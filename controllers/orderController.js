// Import Model
const expres = require("mongoose");
const Timestam = require("../models/orders");

// Function add and export
exports.postTimestam = async(req,res)=>{
    try{
        const {customer_name,product,quantity ,order_date,status}=req.body;
        const timestamp = new Timestam({customer_name,product,quantity ,order_date,status});
        res.status(201).json(savedTimestam);}
        catch(error){
            res.status(500).json({Message:error.Message});
        }
};

// Function update and export
exports.updateTimestam = async(req,res)=>{
    try{
        const {id} = req.params;
        const timestamp = await Timestam.findById(id);
        if(!timestamp) return res.status(404).json({message:'Timestam  not found'});
        const update = req.body;
        Object.assign(timestamp,update);
        const updatedTimestam = await timestamp.save();
        res.status(200).json(updatedTimestam);
    }catch(error){
            res.status(500).json({Message:error.Message});
        }
};

// Function delete and export
exports.DeleteTimestam = async(req,res)=>{
    try{
        const {id} = req.params;
        const timestamp = await Timestam.findById(id);
        if(!timestamp) return res.status(404).json({message:'Timestam  not found'});
        const update = req.body;
        Object.assign(timestamp,update);
        const updatedTimestam = await timestamp.save();
        res.status(200).json(updatedTimestam);
    }catch(error){
            res.status(500).json({Message:error.Message});
        }
};

// Function get all data and export
exports.getTimestam = async(req,res)=>{
    try{
        const timestamp =await Timestam.find();
        res.status(200).json(timestamp);}
        catch(error){
            res.status(500).json({Message:error.Message});
        }
};

// Function get data by genre and export
exports.getTimestamID = async(req,res)=>{
    try{
        const {id} = req.params;
        const timestamp = await Timestam.findById(product);
        if(!timestamp){res.status(200).json(timestamp);
        }else{res.status(404).json({Message:'Timestam  not found'});}
    }catch(error){
        res.status(500).json({Message:error.Message});};
    
    };