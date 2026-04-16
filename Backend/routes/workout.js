const express = require('express');

const { createWorkout, getAllWorkouts, getWorkoutById, deleteWorkoutById, updateWorkoutById } = require('../controllers/workoutControls');

const router = express.Router()


/**
 * Route : /api/workouts
 * Method : GET
 *  Description : Get all Workouts
 * Access : Public 
 * Parameter : None
 */

router.get('/',getAllWorkouts) 

/**
 * Route : /api/workouts/:id
 * Method : GET
 *  Description : Get a single workout
 * Access : Public 
 * Parameter : id
 */

router.get('/:id',getWorkoutById)


/**
 * Route : /api/workouts
 * Method : POST
 *  Description : Create a new workout
 * Access : Public 
 * Parameter : None
 */

router.post('/',createWorkout)

/**
 * Route : /api/workouts/:id
 * Method : DELETE
 *  Description : Delete a single workout
 * Access : Public 
 * Parameter : id
 */

router.delete('/:id',deleteWorkoutById)

/**
 * Route : /api/workouts/:id
 * Method : PATCH
 *  Description : Update a single workout
 * Access : Public 
 * Parameter : id
 */

router.patch('/:id',updateWorkoutById)


module.exports = router