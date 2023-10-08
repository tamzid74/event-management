import Faq from "../faq/Faq";
import Banner from "./Banner";
import Services from "./Services";
import Team from "./Team";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-6xl mx-auto p-5">
        <Services></Services>
        <Team></Team>
        <Faq></Faq>
      </div>
    </div>
  );
};

export default Home;
