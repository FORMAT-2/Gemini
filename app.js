const { GoogleGenerativeAI } = require("@google/generative-ai");
const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config()

app.listen(3001, () => {
    console.log(`Server is listening on http://localhost:3001`);
  });

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to mongo");
});

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

// async function run() {
//     const prompt = "Provide a map of india"
  
//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = response.text();
//     console.log(text);
//   }
  
//   run();
