import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/script.js", (req, res) => {
  wait(10000, () => res.sendFile(__dirname + "/script.js"));
});

app.get("/style.css", (req, res) => {
  wait(200, () => res.sendFile(__dirname + "/style.css"));
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const wait = (timeout, fn) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      fn();
      resolve();
    }, timeout);
  });
};
