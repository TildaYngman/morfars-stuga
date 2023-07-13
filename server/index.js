//Import dependencies
import express from "express";
import mongodb from "mongodb";
import cors from "cors";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//Configure MongoDB
const MONGODB_URL = process.env.DATABASE_URI;

const mongoClient = new mongodb.MongoClient(MONGODB_URL);
mongoClient.connect();

const db = mongoClient.db("cabin");
const weeksCollection = db.collection("bookableWeeks");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/bookableWeeks", async (request, response) => {
  const products = await weeksCollection.find({}).toArray();
  response.json(products);
});

app.post("/send-email", (req, res) => {
  const { name, email, title, message } = req.body;

  const msg = {
    to: "tilda.yngman@gmail.com",
    from: "Matilda.yngman@hyperisland.se",
    subject: title,
    html: `
          <body>
            <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
                  </div>
                  <div class="container" style="margin-left: 20px;margin-right: 20px;">
                  <h3>You've got a new mail from ${name} , their email is: ✉️ ${email} </h3>
                  <div style="font-size: 16px;">
                  <p>Message:</p>
                  <p>${message}</p>
                  <br>
                  </div>
          </body>
          </html>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ message: "Email sent successfully!" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Error sending email" });
    });
});

app.post("/send-request", (req, res) => {
  const { name, email, phone, message, people, vecka } = req.body;

  const msg = {
    to: "tilda.yngman@gmail.com",
    from: "Matilda.yngman@hyperisland.se",
    subject: "Bokningsföfrågan från ",
    name,
    html: `
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new booking request from ${name}, their email is: ✉️${email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${message}</p>
              <p>Phone number to guest:</p>
              <p>${phone}</p>
              <p>Number of people:</p>
              <p>${people}</p>
              <br>
              <p>Vecka:</p>
              <p>${vecka}</p>
              <br>
              </div>
      </body>
      </html>`,
  };

  console.log(msg);

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ message: "Email sent successfully!" });
    })
    .catch((error) => {
      console.error(error.response.body);
      res.status(500).json({ error: "Error sending email" });
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
