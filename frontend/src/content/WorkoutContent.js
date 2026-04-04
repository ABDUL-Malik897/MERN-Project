const { createContext, useReducer } = require("react");

export const  WorkoutsContent = createContext()


export const WorkoutsReducer =(state,action)=>{
    switch(action.type){
        case 'SET_WORKOUTS':
            return{
                workouts : action.payload
            }
        case 'CREATE_WORKOUT':
            return{
                workouts :[action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts : state.workouts.filter((each)=> each._id !== action.payload._id)
            }
        default:
            return state
    }
} 





export const WorkoutContentProvider = ({children})=>{
    const [state,dispatch] = useReducer(WorkoutsReducer,{
    workouts: null
})

    return(
        <WorkoutsContent.Provider value ={{state,dispatch}}>
            {children}
        </WorkoutsContent.Provider>
    )
}