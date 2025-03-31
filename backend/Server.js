require("dotenv").config();
const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const APIKEY = "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";
// const apikey = process.env.SECRETE_KEY;
const app = express();
app.use(express.json());
app.use(cors());
const api = process.env.SECRETE_KEY;
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey:api,
});

// const completion = openai.chat.completions.create({
//   model: "gpt-4o-mini",
//   store: true,
//   messages: [
//     {"role": "user", "content": "write a haiku about ai"},
//   ],
// });
// const OpenAI=require('openai')

// const openai = new OpenAI({
//  apiKey:APIKEY,
//  organization:'org-7xT5uXvIWAVTYTMVAL789R2O'
// });
// const response=await openai.listEngines();

const PORT = 8000;

app.post("/completion", async (req, res) => {
  try {
    // const completion = await openai.chat.completions.create({
    //   model: "gpt-4o-mini",
    //   messages: [{ role: "system", content: "Hii" }],
    // });
    // console.log(completion.choices[0].message);
    // res.send(completion);

    const url = " https://api.openai.com/v1/chat/completions";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${api}`,
      },
      body: JSON.stringify({
        messages: [{ role: "system", content: req.body.message }],
        model: "gpt-3.5-turbo",
      }),
    });
    const data = await response.json();
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log("Running on port " + PORT);
});
