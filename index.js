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
  restaurants.push(req.body);
  res.send(req.body);
});

app.put("/update/:id", (req, res) => {
  const restroUpdatedData = req.body;
  const restroId = parseInt(req.params.id);
  const restroIndex = restaurants.findIndex((restro) => restro.id == restroId);

  if (restroIndex !== -1) {
    restaurants[restroIndex] = {
      id: restroId,
      ...restroUpdatedData,
    };

    res.json({
      message: "Restro data is updated",
    });
  } else {
    res.json({
      message: "Restro id is invalid!!",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
