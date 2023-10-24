import Header from '../Header/Header';
import Ingredients from '../Ingredients/Ingredients';
import Recipe from '../Recipe/Recipe';
import './App.scss';

import data from '../../data/data';

function App() {
  return (
    <div className="app">
      <Header
        title={data.title}
        author={data.author}
        difficulty={data.difficulty}
        thumbnail={data.thumbnail}
      />
      <Ingredients ingredients={data.ingredients} />
      <Recipe recipe={data.instructions} />
    </div>
  );
}

export default App;
