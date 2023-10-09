const mongoose = require('mongoose');
const LaptopSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  ram: String,
  storage: String,
  image_url: String,

});

module.exports=mongoose.model('Laptop',LaptopSchema);