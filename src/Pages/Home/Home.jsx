import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import LeftSideContent from "../SharedPages/LeftSideContent";
import RightSideContent from "../SharedPages/RightSideContent";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>


            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5  my-10">
                <div className="border">
                    <LeftSideContent></LeftSideContent>
                </div>

                <div className="col-span-2 border">
                    <h2 className="text-xl font-semibold">News is coming.......</h2>
                </div>

                <div className="border">
                    <RightSideContent></RightSideContent>
                </div>
            </div>
        </div>
    );
};

export default Home;