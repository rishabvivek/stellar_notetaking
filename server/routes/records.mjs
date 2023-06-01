import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
    let collection = await db.collection("records");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
  });

  // This section will help you create a new record.
router.post("/", async (req, res) => {
    let newDocument = {
      email: req.body.email,
      name: req.body.name,
      jwt: req.body.jwt,
    };
    let collection = await db.collection("records");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  });