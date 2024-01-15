import { Card } from "../../components/Card";
import { Container } from "../Container";
import { PostType } from "../../app/types/PostType";
import s from "./PostsSection.module.scss";
import { useContext } from "react";
import { PostsContext } from "../../app/providers/context/PostsProvider";
import { FavoritesContext } from "../../app/providers/context/FavoritesProvider";

export const PostsSection = () => {
  // const { data, isLoading } = useFetch(process.env.REACT_APP_API_URL);
  const { data, filteredData, isLoading } = useContext(PostsContext);
  const { likedPosts } = useContext(FavoritesContext);

  const dataMap = filteredData.map((el: PostType) => (
    <Card
      isLiked={likedPosts.includes(el.id)}
      key={el.id}
      id={el.id}
      cardTitle={el.title}
      cardDesc={el.body}
    />
  ));

  return (
    <section>
      <Container>
        <h2>Posts</h2>
        {isLoading ? <h1>Loading...</h1> : dataMap}
      </Container>
    </section>
  );
};
