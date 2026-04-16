import { useContext } from "react";
import { WorkoutContext } from "../Context/Workout-context";

export const useWorkoutContext = () =>{
    const context = useContext(WorkoutContext)

    if(!context){
        throw Error ('useWorkoutContext must be used inside a WorkoutContextProvider')
    }

    return context
}