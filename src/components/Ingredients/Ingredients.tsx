import './Ingredients.scss';

type Ingredient = {
  id: number;
  quantity: number;
  unit: string;
  name: string;
};

type IngredientsProps = {
  ingredients: Ingredient[];
};

function Ingredients({ ingredients }: IngredientsProps) {
  return (
    <div className="ingredients">
      <ul className="ingredients__list">
        {ingredients.map((ingredient) => (
          <li className="ingredients__item" key={ingredient.id}>
            <span className="ingredients__item-quantity">
              {ingredient.quantity} {ingredient.unit}
            </span>
            {ingredient.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ingredients;
