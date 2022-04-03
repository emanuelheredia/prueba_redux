import { createStore, combineReducers,compose,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import {recibirDataReducer} from "./Reducer/reducer"

const reducers= combineReducers({
    notebooks:recibirDataReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store= createStore(reducers,composeEnhancers(applyMiddleware(thunk)))
    return store;
};
