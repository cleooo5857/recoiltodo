import { combineReducers } from "redux";
import {todoReducer} from './todo'

const rootReducer = combineReducers({
   todo:todoReducer.reducer
})

export default rootReducer;