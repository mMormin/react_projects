import './Header.scss';

type HeaderProps = {
  title: string;
  thumbnail: string;
  author: string;
  difficulty: string;
};

function Header({ title, thumbnail, author, difficulty }: HeaderProps) {
  const thumbnailStyle = {
    backgroundImage: `url(${thumbnail})`,
  };

  return (
    <header className="header">
      <div className="header__thumbnail" style={thumbnailStyle}>
        <div className="header__bandeau">
          <h1 className="header__bandeau-title">{title}</h1>
          <p className="header__bandeau-author">{author}</p>

          <p className="header__bandeau-difficulty">
            Difficulté :
            <span className="header__bandeau-difficulty--bold">
              {difficulty}
            </span>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
