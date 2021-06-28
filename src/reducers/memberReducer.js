import { GET_MEMBERS, SET_LOADING, TASKS_ERROR } from "../actions/types";

const initialState={
        members: null,
        loading: false,
        error:null
}


const memberReducer=(state=initialState,action)=>{

    switch (action.type) {
        case GET_MEMBERS: 
        return {
            ...state,
            members:action.payload,
            loading:false
        }
        case SET_LOADING:
            return {
                ...state,
                loading:true
            }

        case TASKS_ERROR:
            return {
                ...state,
                loading:action.payload
            }

        default:
            return state;
    }
    
}


export default memberReducer;