const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//프론트와 포트를 다르게 해야함
const port = 3002;
app.listen(port, () => console.log(`Listening on port ${port}`));
