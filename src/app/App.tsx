import { RouterProvider } from "react-router-dom";
import { routes } from "./providers/router/router";
import "./styles/global.css";
import { PostsProvider } from "./providers/context/PostsProvider";
import { FavoritesProvider } from "./providers/context/FavoritesProvider";

function App() {
  return (
    <>
      <FavoritesProvider>
        <PostsProvider>
          <RouterProvider router={routes} />
        </PostsProvider>
      </FavoritesProvider>
    </>
  );
}

export default App;
