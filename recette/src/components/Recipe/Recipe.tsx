import './Recipe.scss';

type RecipeProps = {
  recipe: string[];
};

function Recipe({ recipe }: RecipeProps) {
  return (
    <div className="instructions">
      <ul className="instructions__list">
        {recipe.map((intruction) => (
          <li className="instructions__item" key={intruction}>
            {intruction}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipe;
