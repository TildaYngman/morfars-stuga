//Import dependencies
import express from "express";
import mongodb from "mongodb";
import cors from "cors";

//Configure MongoDB
const MONGODB_URL = process.env.DATABASE_URI;

const mongoClient = new mongodb.MongoClient(MONGODB_URL);
mongoClient.connect();

const db = mongoClient.db("cabin");
const QandAcollection = db.collection("QandA");
const weeksCollection = db.collection("bookableWeeks");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

//get collections
app.get("/QandA", async (request, response) => {
  const products = await QandAcollection.find({}).toArray();
  response.json(products);
});

app.get("/bookableWeeks", async (request, response) => {
  const products = await weeksCollection.find({}).toArray();
  response.json(products);
});

//Keep server running
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
