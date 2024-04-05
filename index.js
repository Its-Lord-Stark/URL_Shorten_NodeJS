const express = require("express");
const path = require('path');
require('dotenv').config();
const app = express();


const {
    connectToMongoDB,
} = require('./connect');


const urlRoute = require('./routes/url')
const staticUrlRoute = require('./routes/staticRoutes');
const userRoutes = require('./routes/user');

const PORT = process.env.PORT;

connectToMongoDB(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB connected')
    });


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use('/url', urlRoute);
app.use('/redirects/', urlRoute);
app.use('/', staticUrlRoute);
app.use('/user', userRoutes);



app.listen(PORT, () => {
    console.log('Server running');
})