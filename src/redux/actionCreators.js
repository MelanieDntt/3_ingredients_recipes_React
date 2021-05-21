import * as ActionTypes from './actionTypes';

export const fetchRecipes = () => (dispatch) => {

    return fetch('/json/data.json')
        .then(response => {
            if (response.ok) {
                return response;
            } 
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
                var errmess = new Error(error.message);
                throw errmess;
        })
        .then((r) => r.json())
        .then(recipes => dispatch(recipesSuccess(recipes)))
        .catch(error => dispatch(recipesFailed(error.message)));
}


export const recipesSuccess = (recipes) => ({
    type: ActionTypes.RECIPES_SUCCESS,
    payload: recipes
});

export const recipesFailed = (errmess) => ({
    type: ActionTypes.RECIPES_FAILED,
    payload: errmess
});
