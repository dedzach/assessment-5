const express = require("express");
const cors = require("cors");
const 

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

// app.get("/api/compliment", (req, res) => {
//   const compliments = ["Gee, you're a smart cookie!",
// 					 "Cool shirt!",
// 					 "Your Javascript skills are stellar.",
//   ];

  app.get("/api/compliment", (req, res) => {
    const compliments = ["You will have a lot of hardship in the future.",
             "You will be in a car accident.",
             "You will have something unexpected happen.",
             "Please be careful on your way to work.",
             "You will win something grand and luxurious."
    ];

    
    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
    
    res.status(200).send(randomCompliment);
    
  });
  
  app.post("/api/creditInfo", (req, res) => {
    console.log(req.body)
    let creditNumber = req.body.creditNumber
    let firstName = req.body.firstName
    let lastName = req.body.lastName

    res.status(200).send(`Thankyou!! A support rep will reach out to you shortly!`)
  )};


app.listen(4000, () => console.log("Server running on 4000"));
