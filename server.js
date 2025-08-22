// server.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { OpenAI } = require("openai");
const path = require("path");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static("public")); // serve your index.html, images, etc.

// Initialize OpenAI
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// API route
app.post("/api/interpret", async (req, res) => {
  try {
    const { imageUrl } = req.body;

    const response = await client.chat.completions.create({
      model: "gpt-4o",   // ✅ fixed typo here
      messages: [
        {
          role: "system",
          content: "You are an art interpreter specializing in Indian folk art.",
        },
        {
          role: "user",
          content: `Interpret this artwork: ${imageUrl}`,
        },
      ],
    });

    const interpretation = response.choices[0].message.content;
    res.json({ interpretation });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
