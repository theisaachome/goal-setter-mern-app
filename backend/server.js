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
const users = require("./routes/userRoutes");

app.use("/api/goals",goals);
app.use("/api/users",users);


// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    )
  } else {
    app.get('/', (req, res) => res.send('Please set to production'))
  }
  
app.use(errorHandler);
app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})
