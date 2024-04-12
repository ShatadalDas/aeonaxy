import "./styles/Search.css";
import searchIcon from "../assets/Icons/IMG_20240412_144911.jpg";

function SearchBox() {
  return (
    <div className="search-box">
      <img src={searchIcon} alt="" />
      <input type="text" placeholder="How do i connect a custom domain?" />
    </div>
  );
}
export default SearchBox;
