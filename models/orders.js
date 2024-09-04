const mongoose = require("mongoose");
// Define Schame wit timestamps and disable versionKey
const timestampSchema = new mongoose.Schema({
    customer_name :{type:String,require:true},
    product :{type:String,require:true},
    quantity :{type:Number,require:true},
    order_date:{type:String,require:true},
    status :{type:String,require:true}},
    {Timestamp:true,versionKey :false});
    module.exports=mongoose.model('Timestam',timestampSchema);


// Define Model

// Export Model
