import { 
    GET_TASKS,
    SET_LOADING,
    TASKS_ERROR, 
    ADD_TASK,
    UPDATE_TASK,
    SEARCH_TASK, 
    DELETE_TASK,
    GET_MEMBERS, 
    ADD_MEMBER, 
    DELETE_MEMBER,
    SET_CURRENT_TASK,
    CLEAR_CURRENT_TASK } from "./types";

//general action for loading

export const setLoading=()=>{
    return {
        type: SET_LOADING
    }

}

//all actions for tasks handling 

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


    export const updateTask=(task)=> async (dispatch)=>{
        try {
            setLoading();
            let response= await fetch(`/tasks/${task.id}`, {
                method:"PUT",
                body: JSON.stringify(task),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            let data=await response.json();
    
            dispatch({
                type:UPDATE_TASK,
                payload:data
            })
     
        } catch (error) {
            dispatch({
                type:TASKS_ERROR,
                payload:error.response.data
            })
        }
        }

        export const searchTasks=(text)=> async (dispatch)=>{
            try {
                setLoading();
                let response= await fetch(`/tasks?q=${text}`);
                let data=await response.json();
        
                dispatch({
                    type:SEARCH_TASK,
                    payload:data
                })
         
            } catch (error) {
                dispatch({
                    type:TASKS_ERROR,
                    payload:error.response.data
                })
            }
            }


 export const setCurrenttask=(task)=>{

        return {
            type:SET_CURRENT_TASK,
            payload:task
        }

    }
    
export const clearCurrenttask=()=>{
        return {
            type:CLEAR_CURRENT_TASK
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

//all actions for members handling 

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
                    payload:error.response.statusText
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
                payload:error.response.statusText
            })
        }
        }
    


        export const deleteMember=(id)=> async (dispatch)=>{
            try {
                setLoading();
                await fetch(`/members/${id}`, {
                    method:"DELETE",
                });
                
                dispatch({
                    type:DELETE_MEMBER,
                    payload:id
                })
         
            } catch (error) {
                dispatch({
                    type:TASKS_ERROR,
                    payload:error.response.statusText
                })
            }
            }
