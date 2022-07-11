//Steps to create your server
//1.Will need to install Node Package Manager, express, and cors
/*Run this commands in the terminal:
npm install -g nodemon
npm i express cors axios
*/ 




/*2. Import the express and cors packages by using the require function*/
const express = require("express");
const cors = require("cors");

//3. To avoid repeating lengthy code, we will create a variable called app that we will reuse to initialize express commands
const app = express();

//4.configure our express server to use cors and JSON objects correctly
app.use(express.json());
app.use(cors());

//6. Adding endpoint and method to handle sending a friends array back to the client (front end)
app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
  });

//7.endpoint and method that will tell us how the weather is today
// app.get("/weather/:temperature", (req, res) => {
//     const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
//     res.status(200).send(phrase);
//   });

//With object destructuring, we can make the above code a little easier to read
app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
  });



//5.tell express to set our server up to run (or “listen”) on port 4000
app.listen(4000, () => console.log("Server running on port 4000"));


//Final Step - Launch the index.html file in your browser and test out your endpoints by clicking the “GET Friends List” button or by navigating to either http://localhost:4000/weather/hot or to http://localhost:4000/weather/cold