import { tabTitle } from "../../TitleFunction/titleFunction";
import Banner from "./Banner";

const Home = () => {
    //dynamic title
    tabTitle('MYHOME | Home')

    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;