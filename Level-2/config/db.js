const url="mongodb://127.0.0.1:27017/movieDatabase"
const mongoose=require("mongoose")
const connection=mongoose.connect(url)
module.exports=connection
