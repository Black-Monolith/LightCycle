import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import counterReducer from "./counter";

const rootReducer = combineReducers({
    routing: routerReducer,
    counter: counterReducer
});

export default rootReducer;