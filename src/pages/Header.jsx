

function Header() {
  return (
    <header>
      <div className="header">
        <div id="menu" className="fas fa-bars">
          {" "}
        </div>

        <nav className="navbar">
          <ul>
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#experience">experience</a>
            </li>

            <li>
              <a href="#education">education</a>
            </li>

            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
