import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div className="text-pink-600 text-4xl">Homepage</div>
      </Layout>
    </>
  );
};

export default Home;
