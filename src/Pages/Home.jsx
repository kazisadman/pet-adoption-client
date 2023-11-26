import { Helmet } from "react-helmet-async";
import Banner from "../Components/Home/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Pet Harmony | Home</title>
      </Helmet>
      <Banner></Banner>
    </div>
  );
};

export default Home;
