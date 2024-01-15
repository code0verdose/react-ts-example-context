import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext<any>(null);

const LS_KEY = process.env.REACT_APP_LS_LIKED || "likedPostsID";

const likedId = localStorage.getItem(LS_KEY);
const initialState = likedId ? JSON.parse(likedId) : [];

export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [likedPosts, setLikedPosts] = useState<number[]>(initialState);

  const like = (id: number) => {
    setLikedPosts((likedPosts) => [...likedPosts, id]);
  };

  const dislike = (id: number) => {
    setLikedPosts(likedPosts.filter((el: number) => el !== id));
  };

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(likedPosts));
  }, [likedPosts]);

  return (
    <FavoritesContext.Provider value={{ likedPosts, like, dislike }}>
      {children}
    </FavoritesContext.Provider>
  );
};
