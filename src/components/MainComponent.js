import Footer from './FooterComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Snacks from './SnacksComponent'
import { Redirect, Route, Switch } from 'react-router';
import Meals from './MealsComponent';
import Desserts from './DessertsComponent';
import LoginRegister from './LoginRegisterComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRecipes } from '../redux/actionCreators';
import RecipeDetail from './RecipedetailComponent';

function Main() {
    const recipes = useSelector((state) => state.recipes);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRecipes());
      }, [dispatch]);

      const recipeClicked = ({match}) => {
          return(
            <RecipeDetail  
                recipe={recipes.recipes.filter((recipe) => recipe.id === parseInt(match.params.id, 10))[0]} 
            />
          );
      }

    return(
        <div>
            <Header />
            <Switch>
                <Route exact path="/home" component={() => <Home recipes={recipes} />} />
                <Route exact path="/home/:id" component={recipeClicked} />
                <Route exact path="/snacks" component={() => <Snacks recipes={recipes} />} />
                <Route exact path="/snacks/:id" component={recipeClicked} />
                <Route exact path="/meals" component={() => <Meals recipes={recipes} />} />
                <Route exact path="/meals/:id" component={recipeClicked} />
                <Route exact path="/desserts" component={() => <Desserts recipes={recipes} />} />
                <Route exact path="/desserts/:id" component={recipeClicked} />
                <Route path="/loginregister" component={() => <LoginRegister />} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>
    );
}

export default Main;