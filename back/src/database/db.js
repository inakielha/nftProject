const mongoose = require ("mongoose");
// require ("dotenv").config({path:'../../.env'});
// const test = require ("dotenv").config();
require ("dotenv").config();



const dbConnection = async ()=>{
    try {
         // await mongoose.connect(process.env.MONGO_URL);
        await mongoose.connect(process.env.MONGO_TESTNET);
        console.log("Db connected",process.env.MONGO_TESTNET)
    }catch(e){
        console.log(e,"db fail")
    }
}

module.exports = {
    dbConnection
}