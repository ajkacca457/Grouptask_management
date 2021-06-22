import { GET_TASKS,SET_LOADING,TASKS_ERROR } from "../actions/types";


const initialState={
    tasks:null,
    current:null,
    loading:false,
    error:null
}


const taskReducer=(state=initialState,action)=>{

 switch (action.type) {
     case SET_LOADING:
        return {
            ...state,
            loading:true
        }             
      default:
        return state;         
 }   

}


export default taskReducer;