import express, { Express } from 'express';
import { Partner } from './types';
// import { PartnerData } from './types';


const app: Express = express();
const port = 4000;

// // Some partner data
// var sfft: Partner = {
//   "sftt": {
//     "name": "Speak For The Trees",
//     "description": "Speak for the Trees Boston aims to improve the size and health of the urban forest in the greater Boston area, with a focus on under-served and under-canopied neighborhoods. They work with volunteers to inventory (collect data) trees, plant trees, and educate those about trees. C4C has built a tree stewardship application for SFTT that allows users to participate in conserving Boston's urban forest. Across Boston, hundreds of trees have been adopted and cared for.",
//     "logo": "https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/sfft-project-page.png",
//     "active": true,
//   }
// }

const exampleData: Partner = {name: "Speak For The Trees", 
description: "Speak for the Trees Boston aims to improve the size and health of the urban forest in the greater Boston area, with a focus on under-served and under-canopied neighborhoods. They work with volunteers to inventory (collect data) trees, plant trees, and educate those about trees. C4C has built a tree stewardship application for SFTT that allows users to participate in conserving Boston's urban forest. Across Boston, hundreds of trees have been adopted and cared for.",
logo: "https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/sfft-project-page.png", active: true}

let dataStorage: Partner[] = [exampleData];

/* 
  APPLICATION MIDDLEWARE
  This section contains some server configuration.
  You will likely not need to change anything here to meet the requirements.
  (but you are welcome to, if you'd like)
*/

// Parse request bodies as JSON
app.use(express.json());
// Enable CORS for the frontend so it can call the backend
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  next();
})

/*
  APPLICATION ROUTES
*/

app.get('/', (_req, res) => {
  res.status(200).send(dataStorage);
})

app.post('/submit', (_req, res) => {
  // partnerDataStorage = _req.body;
  const { name, description, logo, active } = _req.body;
  const newData: Partner = { name, description, logo, active };
  dataStorage.push(newData);
  res.status(201).send("Data stored.");
})

app.get('/submit', (_req, res) => {
  res.status(200).json(dataStorage);
})

// Start the backend
app.listen(port, () => {
  console.log(`Express server starting on port ${port}!`);
})