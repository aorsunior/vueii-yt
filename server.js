const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")

mongoose.connect("mongodb+srv://aorsunior:0897922532@cluster0.gplwnge.mongodb.net/vueii?retryWrites=true&w=majority")

app.use(express.json())
app.use(cors())

const productRoute = require("./routes/product");

app.use("/",productRoute);

app.listen(3000,() => {
    console.log("server running at port 3000")
})

