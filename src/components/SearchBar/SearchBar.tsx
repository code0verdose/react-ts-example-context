import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import { useContext } from "react";
import s from "./SearchBar.module.scss";
import { PostsContext } from "../../app/providers/context/PostsProvider";

export const SearchBar = () => {

  const { filterValue, setFilterValue } = useContext(PostsContext);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };


  return (
    <div>
      <Input
        value={filterValue}
        type="text"
        onChange={inputHandler}
        placeholder="Search..."
      />
      <Button onClick={() => ""}>🔎</Button>
    </div>
  );
};
