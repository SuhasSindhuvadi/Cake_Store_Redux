import { createStore,combineReducers } from "redux";
import { cakeReducer, iceCreamReducer } from "../reducers/reducer";

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
const store=createStore(rootReducer)

export default store