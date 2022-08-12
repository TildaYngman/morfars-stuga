//Import dependencies
import express from "express";
import mongodb from "mongodb";
import cors from "cors";

//Configure MongoDB
const MONGODB_URL =
  process.env.MONGODB_URL ||
  "mongodb+srv://admin:eoiAjqS8s5JGlTj9@cluster0.qyz0gie.mongodb.net";

const mongoClient = new mongodb.MongoClient(MONGODB_URL);
mongoClient.connect();

const db = mongoClient.db("cabin");
const itemsCollection = db.collection("QandA");

const PORT = process.env.PORT || 28017;
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

//get test collection
app.get("/QandA", async (request, response) => {
  const products = await itemsCollection.find({}).toArray();
  response.json(products);
});

//Keep server running
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
