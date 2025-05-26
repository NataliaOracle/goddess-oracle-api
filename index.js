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
    message: "Forgive yourself. Extend grace
