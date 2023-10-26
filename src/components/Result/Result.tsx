import './Result.scss';

type ResultProps = {
  value: number;
  currencyName: string;
};

function Result({ value, currencyName }: ResultProps) {
  return (
    <div className="result">
      <p className="result-value">{value}</p>
      <p className="result-code">{currencyName}</p>
    </div>
  );
}

export default Result;
