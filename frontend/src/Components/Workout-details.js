import React from 'react'
import {useWorkoutContext} from '../hooks/useWorkoutContext'

import  formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Workoutdetails = ({workout}) => {

    const {dispatch} = useWorkoutContext()

    const handleDelete = async () =>{
        const response = await fetch("/api/workouts/" + workout._id,{
            method: "DELETE"
        })
        const json= await response.json()
        if(response.ok){
            dispatch({type : 'DELETE_WORKOUTS', payload : json})
        }
    } 
    return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong> Load (in Kg's): </strong>{workout.load}</p>
        <p><strong> Reps:</strong>{workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix : true})}</p>
        <span onClick={handleDelete}><ion-icon name="trash-outline"></ion-icon></span>
    </div>
    )
}

export default Workoutdetails