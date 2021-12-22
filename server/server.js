import express from "express";
import devBundleCompile from "./devBundle";
import path from "path";
import template from "./../template";
import { MongoClient } from "mongodb";

const url = process.env.MONGO_URI || "mongodb://localhost:27017/mernBase";
MongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, db) => {
    if (err) {
      console.log("Not connected to MongoDB :(");
      try {
        db.close();
      } catch (error) {
        console.log("No db to close.");
      }
      return;
    }
    console.log("Connected to MongoDB");
    db.close();
  }
);

const CURRENT_WORKING_DIR = process.cwd();

const app = express();

// This is only for development
// if (process.env.NODE_ENV === "development") {
devBundleCompile(app);
// }

app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

app.get("/", (req, res) => {
  res.status(200).send(template());
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
