import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import memberReducer from "./memberReducer";

export default combineReducers({
    tasks:taskReducer,
    members:memberReducer
});


