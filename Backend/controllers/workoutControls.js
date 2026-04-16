const  mongoose  = require("mongoose");
const workoutModels = require("../models/workoutModels");
const Workouts = require('../models/workoutModels');

// get all workouts
exports.getAllWorkouts = async(req,res)=>{
    const workouts = await Workouts.find({}).sort({createdAt : -1})      //todo : find({reps : 15 }) => slicing ={workout with only reps = 15 }
    if(!workouts){
        return res.status(400). json({error : error.message})
    }
    res.status(200).json(workouts)
}


// get a single workout by it id
exports.getWorkoutById = async (req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error :"No such workouts"})
    }

    const workout = await Workouts.findById(id)    //? find({_id : id })
    if(!workout){
        return res.status(404).json({error : error.message})
    }
    res.status(200).json(workout)
}


// create a new workout
exports.createWorkout = async (req,res)=>{

    const { title, load, reps } = req.body;
    
    let  emptyFields = []
    if(!title){
        emptyFields.push('title')
    }if(!load){
        emptyFields.push('load')
    }if(!reps){
        emptyFields.push('reps')
    }

    if(emptyFields.length > 0){
        return res.status(400).json({error : emptyFields.map(field => `${field} is required`).join(', '), emptyFields})
    }
    // add doc to db
    try{
        const workout = await Workouts.create({ title , load , reps })
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


// delete a workout by id
exports.deleteWorkoutById = async (req,res)=>{
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error :"No such workouts"})
    }
        const workout = await Workouts.findByIdAndDelete({_id : id})
        if(!workout){
            return res.status(400).json({error : "No such Workout exists"})
        }
        res.status(200).json(workout)
}


// update a workout by id
exports.updateWorkoutById = async (req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error :"No such workouts"})
    }
    const workout =  await Workouts.findOneAndUpdate(
        {
            _id : id 
        },{
            ...req.body
        },{
            new : true    //todos : To see the updates in response box 
        }
    )
    if(!workout){
        return res.status(400).json({error : ' No such workouts'})
    }
    res.status(200).json(workout)
}