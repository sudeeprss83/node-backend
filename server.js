const express = require("express");
// const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cors());
// require("./config/db");

// const Feedback = require("./models/feedback");

const port = 5500;

app.get("/", async (req, res) => {
  return res.send(" It works ");
});

app.get("/feedbacks", async (req, res) => {
  const feedbacks = await Feedback.find();
  return res.json({ data: feedbacks });
});

app.post("/feedbacks", async (req, res) => {
  const feedback = new Feedback({
    name: req.body.name,
    email: req.body.email,
    type: req.body.type,
    message: req.body.message,
  });
  await feedback.save();
  return res.json({ data: feedback });
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
