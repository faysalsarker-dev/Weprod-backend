const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();


const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: ["http://localhost:5173"],
    // credentials: true,
  })
);
app.use(express.json());




const uri = process.env.DB_url;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    const productCollection = client.db('Weprod').collection('product')

app.get('/product',async(req,res)=>{
    const result = await productCollection.find().toArray()
    console.log(result);
    res.send(result)
})






    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {

  }
}
run().catch(console.dir);



app.get("/", (req, res) => {
    res.send("server is running");
  });
  
  app.listen(port, () => {
    console.log(`server is running on ${port}`);
  });