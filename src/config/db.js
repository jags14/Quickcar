const { MongoClient } = require('mongodb');

require('dotenv').config();

// const uri = `mongodb+srv://jsingh14192_db_user:${process.env.DB_PASSWORD}@cluster0.hqeaf0g.mongodb.net/?appName=Cluster0`;
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
let db = null;

async function runGetStarted() {
  if(db) return db;
  try {
    await client.connect();
    const db = client.db('quickcart');
    console.log(`database connected`);
    return db;
  } finally {
    await client.close();
  }
}
runGetStarted().catch(console.dir);

module.exports = runGetStarted;