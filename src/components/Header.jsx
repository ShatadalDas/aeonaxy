import "./styles/Header.css";

function Header() {
  return (
    <header className="header">
      <section className="header-section">
        <img
          src="src/assets/Icons/IMG_20240412_144316.jpg"
          alt=""
          className="header-logo"
        />
        <h1 className="header-heading">
          Frequently&nbsp;&nbsp;asked&nbsp;&nbsp;questions
        </h1>
      </section>

      <nav className="header-nav">
        <a href="#" className="header-links">
          <p>Go&nbsp;&nbsp;to&nbsp;&nbsp;Tilda.cc</p>
          <img src="src/assets/Icons/IMG_20240412_144955.jpg" alt="" />
        </a>
        <a href="#" className="header-links">
          <p>Go&nbsp;&nbsp;to&nbsp;&nbsp;Help&nbsp;&nbsp;Center</p>
          <img src="src/assets/Icons/IMG_20240412_144955.jpg" alt="" />
        </a>
        <button className="header-btn">
          <img src="src/assets/Icons/IMG_20240412_145008.jpg" alt="" />
          <p>EN</p>
          <img src="src/assets/Icons/IMG_20240412_145018.jpg" alt="" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
