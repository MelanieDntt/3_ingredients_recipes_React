import { Link } from "react-router-dom";

const Home = ({recipes}) => {

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>Favorite Recipes</h2>
                </div>
            </div>

            {recipes.recipes.map((recipe) => {
                return(
                    <Link to={`home/${recipe.id}`}  key={recipe.id} style={{ color: '#000' }}>
                        <div className="row row-content">
                            <div className="col-12 col-md-6">
                                <img src={recipe.image} alt={recipe.name} />
                            </div>
                            <div className="col-12 col-md-6">
                                <h3>{recipe.name}</h3>
                                <h4>Prep Time</h4>
                                <p>{recipe.preptime}</p>
                                <h4>Cook Time</h4>
                                <p>{recipe.cooktime}</p>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default Home;