import { NextPage } from "next";
import EpubReader from "../components/EpubReader";

const Home: NextPage = () => {
    return (
        <div>
            <h1>ePub Reader</h1>
            <EpubReader url="https://s3.amazonaws.com/moby-dick/" />
        </div>
    );
};

export default Home;