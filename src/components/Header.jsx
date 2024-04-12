import "./styles/Header.css";
import logoIcon from "../assets/Icons/IMG_20240412_144316.jpg";
import redirectIcon from "../assets/Icons/IMG_20240412_144955.jpg";
import globeIcon from "../assets/Icons/IMG_20240412_145008.jpg";
import downArrowIcon from "../assets/Icons/IMG_20240412_145018.jpg";

function Header() {
  return (
    <header className="header">
      <section className="header-section">
        <img src={logoIcon} alt="" className="header-logo" />
        <h1 className="header-heading">
          Frequently&nbsp;&nbsp;asked&nbsp;&nbsp;questions
        </h1>
      </section>

      <nav className="header-nav">
        <a href="#" className="header-links">
          <p>Go&nbsp;&nbsp;to&nbsp;&nbsp;Tilda.cc</p>
          <img src={redirectIcon} alt="" />
        </a>
        <a href="#" className="header-links">
          <p>Go&nbsp;&nbsp;to&nbsp;&nbsp;Help&nbsp;&nbsp;Center</p>
          <img src={redirectIcon} alt="" />
        </a>
        <button className="header-btn">
          <img src={globeIcon} alt="" />
          <p>EN</p>
          <img src={downArrowIcon} alt="" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
