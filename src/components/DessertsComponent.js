import { Link } from "react-router-dom";

const Desserts = ({recipes}) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>Desserts Recipes</h2>
                </div>
            </div>

            {recipes.recipes.map((recipe) => (recipe.type === 'dessert' ?
                   (
                    <Link to={`home/${recipe.id}`}  key={recipe.id} style={{ color: '#000' }}>
                        <div className="row row-content" key={recipe.id}>
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
                    )
                    :
                    null
            ))}
        </div>
    );
}

export default Desserts;