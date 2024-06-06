import { Card, CardContent } from "@/components/ui/card";

import Link from "next/link";

export default function RecipeList({ recipeList }) {
  console.log(recipeList);
  return (
    <div>
      <div className="recipeName">
        <h2>Recipes</h2>
        <div className="homeButton"><Link href={"/"}>Go Home</Link></div>
        <div className="grid">
          {recipeList && recipeList.length > 0
            ? recipeList.map((recipe) => (
                <Link href={`/recipe-list/${recipe.id}`}>
                  <Card>
                    <CardContent className="CardContent">
                      <div className="aspect-container">
                        <img
                          src={recipe.image}
                          alt={recipe.name}
                          className="image-container"
                        ></img>
                      </div>
                      <div className="recipe-title">
                        <h3>{recipe.name}</h3>
                        <div className="recipe-rating">
                          <p className="rating">Rating: {recipe.rating}</p>
                          <div className="recipe-cuisine">
                            <p>{recipe.cuisine}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
