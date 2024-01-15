import { useContext } from "react";
import { Button } from "../../ui/Button";
import s from "./Card.module.scss";
import { FavoritesContext } from "../../app/providers/context/FavoritesProvider";

interface CardProps {
  cardTitle: string;
  cardDesc: string;
  id: number;
  isLiked: boolean;
}

export const Card: React.FC<CardProps> = ({
  cardTitle,
  cardDesc,
  id,
  isLiked,
}) => {
  const { like, dislike, likedPosts } = useContext(FavoritesContext);

  console.log(likedPosts);
  
  return (
    <article>
      <h3>{cardTitle}</h3>
      <p>{cardDesc}</p>
      <Button onClick={() => (isLiked ? dislike(id) : like(id))}>
        {isLiked ? "❤️" : "🖤"}
      </Button>
    </article>
  );
};
