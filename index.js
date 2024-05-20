import express from "express";
import restaurants from "./data.js";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  // Anything which is coming from client, will be the part of the 'req'
  // Anything which is coming from the server, will be the part of the 'res'

  res.send(restaurants);
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
