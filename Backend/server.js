
// Importing express package
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const workoutRoutes = require('../Backend/routes/workout ');

dotenv.config()

// express app
const app = express()
app.use(express.json())

//port number
const PORT = process.env.PORT;

//Routes    
app.use((req,res,next)=>{
    console.log(req.method,req.path);
    next()    
})


// http://localhost:${PORT}/`
app.get('/',(req,res)=>{
    res.json({msg : `Welcome to our appln`})
})

app.use('/api/workouts/', workoutRoutes)


// connect to  db
mongoose.connect(process.env.MONGO_URL).then(()=>{
    // listen for requests
    app.listen(PORT,()=>{
        console.log(`at: http://localhost:${PORT} & connected to  our db`);
    })
}).catch((error)=>{
    console.log(error);
    
})

