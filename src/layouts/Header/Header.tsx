import { Link } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header>
      <SearchBar />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
    </header>
  );
};
