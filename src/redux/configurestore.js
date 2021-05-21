import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import recipesReducer from "./recipesReducer";

export const configurestore = () => {
    const store = createStore(
        combineReducers({
            recipes: recipesReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
}

export const store = configurestore();