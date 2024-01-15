import { Layout } from "../../layouts/Layout";
import { PostsSection } from "../../layouts/PostsSection";
import s from "./Home.module.scss";

export const Home = () => {
  return (
    <Layout>
      <PostsSection />
    </Layout>
  );
};
