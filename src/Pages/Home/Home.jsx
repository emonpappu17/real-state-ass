import { tabTitle } from "../../TitleFunction/titleFunction";

const Home = () => {
    //dynamic title
    tabTitle('MYHOME | Home')

    return (
        <div>
            <h1>i am home</h1>
        </div>
    );
};

export default Home;