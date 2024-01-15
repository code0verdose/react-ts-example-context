import { useContext } from "react";
import { Layout } from "../../layouts/Layout";
import s from "./Favorites.module.scss";
import { FavoritesContext } from "../../app/providers/context/FavoritesProvider";
import { PostsContext } from "../../app/providers/context/PostsProvider";
import { PostType } from "../../app/types/PostType";
import { Card } from "../../components/Card";

export const Favorites = () => {
  const { likedPosts } = useContext(FavoritesContext);
  const { filteredData, isLoading } = useContext(PostsContext);

  const likedPostsMap = filteredData
    .filter((el: PostType) => likedPosts.includes(el.id))
    .map((el: PostType) => (
      <Card
        key={el.id}
        isLiked={likedPosts.includes(el.id)}
        id={el.id}
        cardTitle={el.title}
        cardDesc={el.body}
      />
    ));

  return (
    <Layout>
      <div>{isLoading ? <h1>Loading...</h1> : likedPostsMap}</div>
    </Layout>
  );
};
