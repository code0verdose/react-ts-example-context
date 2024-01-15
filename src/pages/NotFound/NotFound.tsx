import { Link } from "react-router-dom";
import { Layout } from "../../layouts/Layout";
import s from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <Layout>
      404 Not Found page
      <Link to="/">Go home</Link>
    </Layout>
  );
};
