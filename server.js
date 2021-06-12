const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  return res.send(" It works ");
});

app.listen(5500, () => {
  console.log(`server started on port 5500`);
});
