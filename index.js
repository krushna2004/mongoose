const express = require('express');
const app = express();
const product_router = require('./routes/products');
const connectDB = require('./db/connection')

app.get('/',(req,res) =>{
    res.send("This is Home page.");
})

app.get('/about',(req,res) =>{
    res.send("This is About page.");
})

connectDB("mongodb+srv://krushna:kkk2324@cluster0.vmjzodx.mongodb.net/?retryWrites=true&w=majority");
app.use("/products",product_router);
app.listen(3000,()=> {
    console.log('server is running...');
})
