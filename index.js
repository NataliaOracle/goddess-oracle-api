const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const readings = [
  {
    goddess: "Isis",
    theme: "Rebirth and Sacred Power",
    message: "You are shedding what no longer serves. Let your inner light rise.",
    ritual: "Light a white candle and journal what you’re ready to release."
  },
  {
    goddess: "Aphrodite",
    theme: "Love and Radiance",
    message: "You are divine beauty. Embrace your reflection without judgment.",
    ritual: "Look in a mirror and say 'I am love, I am whole' three times."
  },
  {
    goddess: "Kuan Yin",
    theme: "Compassion",
    message: "Forgive yourself. Extend grace to others. Flow with softness.",
    ritual: "Write a forgiveness letter you never have to send."
  },
  {
    goddess: "Lilith",
    theme: "Liberation and Truth",
    message: "Stand boldly in your truth. You are not too much. You are enough.",
    ritual: "Speak one truth out loud today that you've been hiding."
  }
];

app.post("/", (req, res) => {
  const random = readings[Math.floor(Math.random() * readings.length)];
  res.json({
    question: req.body.question || "No question provided",
    ...random
  });
});

app.listen(port, () => {
  console.log(`Goddess Oracle API is running on port ${port}`);
});
