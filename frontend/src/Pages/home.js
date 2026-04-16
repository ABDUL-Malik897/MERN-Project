// import React, { useEffect, useState } from 'react'
import React, { useEffect } from 'react'


import Workoutdetails from "../Components/Workout-details";
import Workoutform from '../Components/Workout-form';
import { useWorkoutContext } from '../hooks/useWorkoutContext';


const Home = () => {

    // const [workouts ,setWorkout] = useState(null)

    const { workouts , dispatch } = useWorkoutContext()



    useEffect(()=>{
        const fetchWorkouts = async  () => {
            const response = await fetch("/api/workouts/")
            const json = await response.json()

            if (response.ok){
                // setWorkout(json)
                dispatch({type : "SET_WORKOUTS",payload : json})
            }
        }
        fetchWorkouts()
    },[dispatch])


    return (
    <div className='home'>
        <div className='workouts'>
            {
                workouts && workouts.map((workout) => (
                    <Workoutdetails key={workout._id} workout={workout}/>
                ))
            }
        </div>
        <Workoutform />
    </div>
    )
}

export default Home