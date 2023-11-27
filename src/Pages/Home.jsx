import { Helmet } from "react-helmet-async";
import Banner from "../Components/Home/Banner";
import Categories from "../Components/Home/Categories";
import Calltoaction from "../Components/Home/Calltoaction";
import Faq from "../Components/Home/Faq";
import Newslatter from "../Components/Home/Newslatter";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Pet Harmony | Home</title>
      </Helmet>
      <Banner></Banner>
      <Categories></Categories>
      <Calltoaction></Calltoaction>
      <Faq></Faq>
      <Newslatter></Newslatter>
    </div>
  );
};

export default Home;
