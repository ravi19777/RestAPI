import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  console.log(`Request > ${req}`);
  console.log(`Response > ${res}`);

  res.send("I am up!!");
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
