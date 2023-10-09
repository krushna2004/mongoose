const LaptopSchema = require('./model/Product_Model');
const connectDB = require('./db/connection');
const productsJSON = require('./Data.json')

connectDB("mongodb+srv://krushna:kkk2324@cluster0.vmjzodx.mongodb.net/?retryWrites=true&w=majority");

const upload = async () =>{
    await LaptopSchema.create(productsJSON)
    .then(()=> console.log("successfully uploaded..."))
    .catch((err)=>console.log(err))
}
upload();