import './App.scss';
import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Result from '../Result/Result';

import data from '../../data/currencies';

function App() {
  return (
    <div className="app">
      <Header />
      <Currencies currencies={data} />
      <Result />
    </div>
  );
}

export default App;
