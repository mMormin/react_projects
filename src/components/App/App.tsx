import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Result from '../Result/Result';
import LikeCounter from '../LikeCounter/LikeCounter';
import { Currency } from '../../@types/currency';
import currenciesData from '../../data/currencies';

import './App.scss';

function App() {
  const [likesCount, setLikesCount] = useState(0);
  const [currency, setCurrency] = useState<Currency>(currenciesData[0]);
  const [rate, setRate] = useState(0);

  useEffect(() => {
    document.title = `${currency.description} - React Currency Converter`;

    fetch(
      `http://api.exchangerate.host/convert?from=EUR&to=${currency.code}&amount=1&access_key=9d46bb89cea1d1b38026b7c3cce9aa5b`
    )
      .then((response) => response.json())
      .then((data) => {
        setRate(data.result);
      });
  }, [currency]);

  return (
    <div className="app">
      <Header />
      <Currencies currencies={currenciesData} onClickCurrency={setCurrency} />
      <Result value={rate} currencyName={currency.description} />
      <LikeCounter likesCount={likesCount} setLikesCount={setLikesCount} />
    </div>
  );
}

export default App;
