//pass= PPvW6RAI1PUBcOwW

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./Route/products');
const feedbackRoutes = require('./Route/feedback');
const noteRoutes = require('./Route/notes');
const router = require("./Route/deliveryRoute");

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/notes', noteRoutes);
app.use('/Delivery', router);
app.use('/Wishlist', router);



mongoose.connect("mongodb+srv://admin:PPvW6RAI1PUBcOwW@cluster0.cdmpb.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5000);
    
})
.catch((err)=> console.log((err)));

