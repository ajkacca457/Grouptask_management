import { GET_TASKS, SET_LOADING, TASKS_ERROR } from "./types";


export const getTasks=()=> async (dispatch)=>{
    try {
        setLoading();
        let response= await fetch("/tasks");
        let data=await response.json();

        dispatch({
            type:GET_TASKS,
            payload:data
        })
 
    } catch (error) {
        dispatch({
            type:TASKS_ERROR,
            payload:error.response.data
        })
    }
    }
    


export const setLoading=()=>{
    return {
        type: SET_LOADING
    }


}


