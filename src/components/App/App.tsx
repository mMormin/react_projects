import { useState } from 'react';
import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Result from '../Result/Result';
import LikeCounter from '../LikeCounter/LikeCounter';

import data from '../../data/currencies';
import './App.scss';

function App() {
  const [likesCount, setLikesCount] = useState(0);

  return (
    <div className="app">
      <Header />
      <Currencies currencies={data} />
      <Result />
      <LikeCounter likesCount={likesCount} setLikesCount={setLikesCount} />
    </div>
  );
}

export default App;
