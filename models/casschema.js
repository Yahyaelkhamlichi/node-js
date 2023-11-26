const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// structre data send to mongo db == طريقة داتا 

const x = new Schema({
  Fristname:String,
  
  Lastname:String,

  Phone:Number,
  Email:String,
  Age:Number,
  Gender:String,
  Country:String

  },
  { timestamps: true }
  
  );
  const user = mongoose.model("customer",x)
  module.exports=user