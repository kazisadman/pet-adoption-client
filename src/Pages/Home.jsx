import { Helmet } from "react-helmet-async";
import Banner from "../Components/Home/Banner";
import Categories from "../Components/Home/Categories";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Pet Harmony | Home</title>
      </Helmet>
      <Banner></Banner>
      <Categories></Categories>
    </div>
  );
};

export default Home;
