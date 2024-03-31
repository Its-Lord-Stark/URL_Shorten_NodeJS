const express = require("express");
const app = express();
const {connectToMongoDB,} = require('./connect');
const urlRoute = require('./routes/url')
const PORT = 8010;

connectToMongoDB("mongodb://localhost:27017/short-url")
.then(() => {console.log('MongoDB connected')});

app.use(express.json());

app.use('/url' , urlRoute);
app.use('/', urlRoute);



app.listen(PORT , ()=>{
    console.log('Server running');
})

