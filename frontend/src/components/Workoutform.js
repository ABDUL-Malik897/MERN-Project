import React, { useState } from   'react'  
import { useWorkoutsContent } from '../hooks/useWorkoutContent'

const Workoutform = () => {
    const {dispatch} = useWorkoutsContent()
    const [title,setTitle] = useState('')
    const [load,setLoads] = useState('')
    const [reps,setReps] = useState('')
    const [error ,setError] = useState(null)
    const [emptyFields ,setEmptyFields] = useState([])

    const handleSubmit = async(e) =>{
        e.preventDefault()

        const workout  = {title,load,reps}
        const response = await fetch('/api/workouts/',{
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                "Content-Type" : 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }else{
        setError(null)
        setTitle('')
        setLoads('')
        setReps('')
        setEmptyFields([])
        console.log('New Workout Added',json);
        dispatch({type : 'CREATE_WORKOUT',payload : json})
        }
    }



    return (
        <>
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Exercise Title:</label>
            <input
            type='text'
            value={title} 
            onChange={(e)=> setTitle(e.target.value)}
            className={emptyFields.includes("title") ? "error": ''}
            />

            <label>Loads(in KG's): </label>
            <input 
            type='number' 
            value={load} 
            onChange={(e)=> setLoads(e.target.value)}
            className={emptyFields.includes("load") ? "error": ''}
            />

            <label>Reps:</label>
            <input 
            type='number' 
            value={reps} 
            onChange={(e)=> setReps(e.target.value)}
            className={emptyFields.includes("reps") ? "error": ''}
            />

            <button>Add Workout</button>
            
            {error && <div className='error'>{error}</div>}
        </form>
        </>
    )
}  

export default Workoutform