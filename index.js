import express from "express";
import restaurants from "./data.js";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  // Anything which is coming from client, will be the part of the 'req'
  // Anything which is coming from the server, will be the part of the 'res'

  res.send(restaurants);
});

app.post("/register", (req, res) => {
  res.send("Please enter the details of restaurants to register it!!");
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
