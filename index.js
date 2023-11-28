const express = require('express');
const app = express();
const { connection } = require('./config/connection');
const { router } = require('./routes/user.routes');
const cookie = require('cookie-parser')
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(cookie());
app.use(router);


app.listen(8080, ()=>{
    console.log(`server listening on http://localhost:8080`);
    connection();
})