import './LikeCounter.scss';

type LikeCounterProps = {
  likesCount: number;

  setLikesCount: (newValue: number) => void;
};

function LikeCounter({ likesCount, setLikesCount }: LikeCounterProps) {
  const handleClickLikeBtn = () => {
    setLikesCount(likesCount + 1);
  };

  return (
    <footer>
      <button
        className="button-like"
        type="button"
        onClick={handleClickLikeBtn}
      >
        ❤️ THIS APP
      </button>
      <p>{likesCount} people like it !</p>
    </footer>
  );
}

export default LikeCounter;
