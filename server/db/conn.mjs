import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config({path: '/Users/rishabvivek/stellar_app/.env'});


const connectionString = process.env.ATLAS_URI;

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error("mongo error");
  console.error(e);
}

let db = conn.db("sample_training");

export default db;