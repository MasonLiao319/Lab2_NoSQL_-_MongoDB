require('dotenv').config()

const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB;

// Connect to your Atlas cluster
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);

// NoSQL databases, like MongoDB, are designed for flexibility and scalability
// Allowing for the storage of unstructured data in a schema-less format. 
// Unlike SQL databases, which use predefined schemas
// MongoDB allows dynamic document structures
// Making it ideal for applications that need to handle large volumes of diverse data efficiently. 


// I don't think MongoDB is more suitable for our contact App, 
// because we don't need to handle large volumes of diverse data.
// I think predefined schemas is more suitable.