import express from "express";
import devBundle from "./devBundle";
import path from "path";
import template from "./../template";

const CURRENT_WORKING_DIR = process.cwd();

const app = express();

// This is only for development
if (process.env.NODE_ENV === "development") {
  devBundle.compile(app);
}

app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

app.get("/", (req, res) => {
  res.status(200).send(template());
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
