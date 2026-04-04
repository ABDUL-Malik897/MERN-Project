import React, { useEffect } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import Workoutform from '../components/Workoutform'
import { useWorkoutsContent } from '../hooks/useWorkoutContent'



const Home = () => {
    //* useState
    // const [workouts, setWorkout] = useState(null)

    const {state,dispatch} = useWorkoutsContent()
    useEffect(() =>{
        const fetchWorkouts = async ()=>{
            const response = await fetch('/api/workouts/')
            const json = await response.json()
            // console.log(json);
            
            
            if(response.ok){
                // setWorkout(json)
                dispatch({type : 'SET_WORKOUTS',payload : json})
            }

        }
        fetchWorkouts()
    },[dispatch])
// console.log(state.workouts);

    return (
        <>
        <div className='Home'>
            <div className='workouts'>
                {
                state.workouts?.map((workout)=>(
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))
                }
            </div>
            <Workoutform />
        </div>
        </>
    )
}

export default Home