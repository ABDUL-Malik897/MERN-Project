import { useContext } from "react";
import { WorkoutsContent } from "../content/WorkoutContent";

export const  useWorkoutsContent = ()=>{
    const content = useContext(WorkoutsContent)
    

    if (!content) {
        throw Error('useWorkoutsContent must be used inside a WorkoutsContentProvider')
    }
    return content
}  