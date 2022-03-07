const express = require("express");
const dotenv = require("dotenv").config('');
const colors = require("colors");
const {errorHandler}=require("./middlewares/errorMiddleware")
const PORT = process.env.PORT || 5000;
const connectDb = require("./config/db");
connectDb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

// Routes mount
const goals = require("./routes/goalRoutes");
const { json } = require("body-parser");
app.use("/api/goals",goals);

app.use(errorHandler);
app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})
