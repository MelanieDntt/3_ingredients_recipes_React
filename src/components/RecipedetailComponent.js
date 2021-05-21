const RecipeDetail = ({recipe}) => {
    
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>{recipe.name}</h2>
                </div>
            </div>
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
            <div className="row">
                <div className="col-12">
                    <h3>Preparation</h3>
                </div>
            </div>
            <div className="row" key={recipe.id}>
                <div className="col-12 col-md-4">
                    <h4>Ingredients</h4>
                    
                    <ul>
                    {recipe.ingredients.map((ingredient) => {
                        return(
                            <li key={ingredient}>{ingredient}</li>
                        );
                    })}
                    </ul>
                </div>

                <div className="col-12 col-md-6">
                    <h4>Instructions</h4>
                    <ul className="list-group list-group-flush">
                        {recipe.instructions.map((instruction) => {
                            return(
                                <li key={instruction} className="list-group-item">{instruction}</li>
                                
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;