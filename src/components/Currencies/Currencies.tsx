import { ChangeEvent, useState } from 'react';
import { Currency } from '../../@types/currency';
import './Currencies.scss';

type CurrenciesProps = {
  currencies: Currency[];
  onClickCurrency: (Currency: Currency) => void;
};

function Currencies({ currencies, onClickCurrency }: CurrenciesProps) {
  const [searchText, setSearchText] = useState('');

  function handleChangeSearchTextInput(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;

    setSearchText(newValue);
  }

  const currenciesFiltered = currencies.filter((currency) => {
    const searchTextLowerCased = searchText.toLowerCase();

    return currency.description.toLowerCase().includes(searchTextLowerCased);
  });

  function handleClickCurrency(currencyClicked: Currency) {
    onClickCurrency(currencyClicked);
  }

  return (
    <div className="currencies">
      <div className="currencies__wrapper">
        <h2>Currencies</h2>
        <input
          type="text"
          value={searchText}
          onChange={handleChangeSearchTextInput}
          placeholder="ex: Peso"
        />
      </div>

      <ul>
        {currenciesFiltered.map((currency) => (
          <li key={currency.code}>
            <button
              type="button"
              value={currency.description}
              onClick={() => handleClickCurrency(currency)}
            >
              {currency.description}
            </button>
          </li>
        ))}
        {currenciesFiltered.length === 0 && (
          <li>
            <button type="button" disabled>
              Aucune devise correspondante
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Currencies;
