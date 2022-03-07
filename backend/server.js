const express = require("express");
const dotenv = require("dotenv").config('');
const colors = require("colors");
const PORT = process.env.PORT || 5000;

const app = express();

// Routes mount
const goals = require("./routes/goalRoutes");
app.use("/api/goals",goals);

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})
