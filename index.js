const express = require("express");
require('dotenv').config();
const app = express();
const {connectToMongoDB,} = require('./connect');
const urlRoute = require('./routes/url')
const PORT = process.env.PORT;

connectToMongoDB(process.env.MONGODB_URI)
.then(() => {console.log('MongoDB connected')});

app.use(express.json());

app.use('/url' , urlRoute);
app.use('/', urlRoute);



app.listen(PORT , ()=>{
    console.log('Server running');
})

