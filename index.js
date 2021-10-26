const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
require('dotenv').config();
const port = 3000


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.57jms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
    try {
        await client.connect();
        // const database = client.db("understand");
        // const movies = database.collection("movies");
        console.log('connected');

    } finally {
        //   await client.close();
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log("Running Port", port)
})






/*
one time:
1. nodemon globally install
2. mongodb atlas user, access
3. Network access (ip address allow)
Every projects:
1. install mongodb, express, cors, dotenv
2. import (require), mongodb
3. copy uri (connection string)
4. create the client (copy code from atlas)
5. Create or get database access credentials (username, password)
6. create .env file and add DB_USER and DB_PASS as environment variable
7. Make sure you require (import) dotenv
8. Convert URI string to a template string.
9. Add DB_USER and DB_PASS in the connection URI string.
10. Check URI string by using console.log
11. Create async function run and call it by using run().catch(console.dir)
12. add try and finally inside the run function.
13. comment out await client.close() to keep the connection alive
14. add await client.connect(); inside the try block
15. use a console.log after the client.connect to ensure database is connected
*/

