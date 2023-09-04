import { combineReducers } from "redux";
import { loggedInReducer, billDetailReducer } from "../Reducer/Reducer";


const rootreducers = combineReducers({
    loggedInReducer, billDetailReducer
});

export default rootreducers;

