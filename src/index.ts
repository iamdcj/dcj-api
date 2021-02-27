import express from "express";

import { handleRequest } from "./handle-request"

const app = express();
const port = 8000;

app.get("*", (req, res) => {
  handleRequest(req.path, res);
})

app.listen(port, () => {
  console.log('listening');
})