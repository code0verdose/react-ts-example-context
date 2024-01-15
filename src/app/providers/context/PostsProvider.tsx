import { createContext, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
// import { PostType } from "../../types/PostType";

export const PostsContext = createContext<any>(null);

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [filterValue, setFilterValue] = useState<string>("");

  const { data, isLoading } = useFetch(process.env.REACT_APP_API_URL);

  // const filterData = () => {
  //   return data.map(el => )
  // }

  const filteredData = data.filter((el) =>
    el.title.toLowerCase().includes(filterValue)
  );

  return (
    <PostsContext.Provider
      value={{ data, filteredData, isLoading, filterValue, setFilterValue }}
    >
      {children}
    </PostsContext.Provider>
  );
};
