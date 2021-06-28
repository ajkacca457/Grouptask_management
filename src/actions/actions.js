import { GET_TASKS, SET_LOADING, TASKS_ERROR, ADD_TASK } from "./types";


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



export const addTask=(task)=> async (dispatch)=>{
    try {
        setLoading();
        let response= await fetch("/tasks", {
            method:"POST",
            body: JSON.stringify(task),
            headers: {
                "Content-Type": "application/json"
            }
        });
        let data=await response.json();

        dispatch({
            type:ADD_TASK,
            payload:data
        })
 
    } catch (error) {
        dispatch({
            type:TASKS_ERROR,
            payload:error.response.data
        })
    }
    }
    