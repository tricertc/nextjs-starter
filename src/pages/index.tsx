import { NextPage } from "next";
import Layout from "~/components/layout";
import Hero from "~/components/hero";

const Home: NextPage = () => (
  <Layout>
    <div className="p-8">
      <Hero />
    </div>
  </Layout>
);

export default Home;
