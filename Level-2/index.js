///MONGOOSE MOVIE STORE ASSIGNMENT


//index page a db er connection, r userrouter ko import krna hota



const userRouter=require("./routes/movie.route")
const connection=require("./config/db")

const express=require("express")
const PORT=4004
const app=express()

app.use("/movieVariety",userRouter)

app.get("/",(req,res)=>{
    res.send("<h1>This is Movie Server</h1>")
})


app.listen(PORT,async ()=>{
    try {
        await connection
        console.log(`server will run at http://localhost:${PORT}`)
    } catch (error) {
        console.log(`server is not started due to this ${error}`)
    }
})