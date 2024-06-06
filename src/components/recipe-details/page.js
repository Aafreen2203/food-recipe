import Link from "next/link";

export default function RecipeDetailsItems({ getRecipeDetails }) {
  return (
    <div>
      <div className="recipe-list-page">
        <Link href={"/recipe-list"}>Go to Recipe List</Link>
      </div>
      <div className="recipe-details-items">
        <div className="grid">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <img
              src={getRecipeDetails?.image}
              name={getRecipeDetails?.name}
              className="w-4/5 rounded object-cover"
            />
          </div>
          <div>
            <h2 className="text-9xl font-extrabold text-gray-950">
              {getRecipeDetails?.name}
            </h2>
          </div>
          <div className="recipe-meal">
            <p>{getRecipeDetails?.mealType[0]}</p>
          </div>
          <div className="recipe-state">
            <p>{getRecipeDetails?.cuisine}</p>
          </div>
          <div className="recipe-ingredients">
            <h3>Ingredients:</h3>
            <ul className="steps">
              {getRecipeDetails?.ingredients.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
