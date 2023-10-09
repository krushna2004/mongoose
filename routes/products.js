const express = require('express');
const router = express.Router();
const LaptopSchema = require('../model/Product_Model');
const LaptopJSON = require('../Data.json');

router.get('/',async(req,res)=>{
    const allProducts = await LaptopSchema.find({})
    res.json({allProducts});
})

router.get('/description',(req,res)=>{
    res.send("Product Description Page");
})

router.put('/update/:title',async (req,res)=>{
    console.log(req.params);
    const myData = await LaptopSchema.updateOne(req.params,
        {"price":900});
        res.json({myData});
})

router.delete('/delete/:title',async (req,res)=>{
    console.log(req.params);
    const myData = await LaptopSchema.deleteOne(req.params)
        res.json({myData});
})

router.post('/add/:title',async (req,res)=>{
    console.log(req.params);
    const newProduct = new LaptopSchema({
        "title":"NewLaptop", "price":2000, "count":3
    })
       const myData = await newProduct.save();
        res.json({myData});
})



module.exports = router;