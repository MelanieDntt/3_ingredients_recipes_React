import * as ActionTypes from './actionTypes';

export const recipesReducer = (state = {errMess: null, recipes: []}, action) => {
    switch (action.type) {

        case ActionTypes.RECIPES_SUCCESS:
            return {...state, isLoading: false, errMess: null, recipes: action.payload};

        case ActionTypes.RECIPES_FAILED:
            return {...state, errMess: action.payload};

        default:
            return state;
    }
}

export default recipesReducer;