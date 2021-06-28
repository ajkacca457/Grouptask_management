import { GET_MEMBERS, SET_LOADING, TASKS_ERROR, ADD_MEMBER,DELETE_MEMBER } from "../actions/types";

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

        case ADD_MEMBER: 
        return {
            ...state,
            members:[...state.members,action.payload]
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

            case DELETE_MEMBER:
                return {
                    ...state,
                    members:state.members.filter(item=> item.id!==action.payload),
                    loading:false
                }  

        default:
            return state;
    }
    
}


export default memberReducer;