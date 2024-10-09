import { tabTitle } from "../../TitleFunction/titleFunction";
import Banner from "./Banner";
import Estates from "./Estates";

const Home = () => {
    //dynamic title
    tabTitle('MYHOME | Home')

    return (
        <div>
            <Banner></Banner>
            <Estates></Estates>
        </div>
    );
};

export default Home;