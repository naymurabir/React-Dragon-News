import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import LeftSideContent from "../SharedPages/LeftSideContent";
import RightSideContent from "../SharedPages/RightSideContent";
import BreakingNews from "./BreakingNews";
import NewsHome from "./NewsHome";


const Home = () => {

    const [allNews, setAllNews] = useState([])

    useEffect(() => {
        fetch('news.json')
            .then(response => response.json())
            .then(data => setAllNews(data))
    }, [])


    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>


            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5  my-10">
                <div>
                    <LeftSideContent></LeftSideContent>
                </div>

                <div className="col-span-2">
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Dragon News Home</h2>

                        {
                            allNews.slice(0, 4).map(news => <NewsHome key={news._id} news={news}></NewsHome>)
                        }
                    </div>
                </div>

                <div >
                    <RightSideContent></RightSideContent>
                </div>
            </div>
        </div>
    );
};

export default Home;