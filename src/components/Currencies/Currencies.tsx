import './Currencies.scss';

type Currency = {
  description: string;
  code: string;
  rate: number;
};

type CurrencyProps = {
  currencies: Currency[];
};

function Currencies({ currencies }: CurrencyProps) {
  return (
    <div className="currencies">
      <h2>Curencies</h2>
      <ul>
        {currencies.map((currency) => (
          <li key={currency.code}>
            <p>{currency.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Currencies;
