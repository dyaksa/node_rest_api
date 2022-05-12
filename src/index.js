const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const v1Route = require("./v1/routes");

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hello World",
  });
});

app.use("/api/v1", v1Route);

app.listen(PORT, () => {
  console.log("listen on port ", PORT);
});
