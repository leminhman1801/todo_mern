import express from "express";
import { v4 as uuidv4 } from "uuid";
import db from "../db/connection.js";

import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection("tasks");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

router.post("/", async (req, res) => {
  try {
    let newTask = {
      id: uuidv4(),
      title: req.body.title,
      priority: req.body.priority,
      status: req.body.status || "Pending",
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      isDeleted: false,
    };
    let collection = await db.collection("tasks");
    let result = await collection.insertOne(newTask);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding task");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const query = { id: req.params.id };
    const collection = db.collection("tasks");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
  } catch (error) {
    console.error(err);
    res.status(500).send("Error deleting task");
  }
});

export default router;
