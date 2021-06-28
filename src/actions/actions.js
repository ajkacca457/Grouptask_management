import { GET_TASKS, SET_LOADING, TASKS_ERROR, ADD_TASK, DELETE_TASK,GET_MEMBERS, ADD_MEMBER } from "./types";

export const setLoading=()=>{
    return {
        type: SET_LOADING
    }

}

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
    

    export const getMembers=()=> async (dispatch)=>{
        try {
            setLoading();
            let response= await fetch("/members");
            let data=await response.json();
    
            dispatch({
                type:GET_MEMBERS,
                payload:data
            })
     
        } catch (error) {
            dispatch({
                type:TASKS_ERROR,
                payload:error.response.data
            })
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


    export const addMember=(member)=> async (dispatch)=>{
        try {
            setLoading();
            let response= await fetch("/members", {
                method:"POST",
                body: JSON.stringify(member),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            let data=await response.json();
    
            dispatch({
                type:ADD_MEMBER,
                payload:data
            })
     
        } catch (error) {
            dispatch({
                type:TASKS_ERROR,
                payload:error.response.data
            })
        }
        }
    

    export const deleteTask=(id)=> async (dispatch)=>{
        try {
            setLoading();
            let response= await fetch(`/tasks/${id}`, {
                method:"DELETE",
            });
            let data=await response.json();
    
            dispatch({
                type:DELETE_TASK,
                payload:id
            })
     
        } catch (error) {
            dispatch({
                type:TASKS_ERROR,
                payload:error.response.data
            })
        }
        }