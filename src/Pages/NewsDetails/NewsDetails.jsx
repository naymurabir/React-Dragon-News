import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import RightSideContent from "../SharedPages/RightSideContent";

const NewsDetails = () => {

    const newsDetails = useLoaderData()
    const { _id } = useParams()
    const idInt = parseInt(_id)

    console.log(idInt);

    const newsDetail = newsDetails.find(newsDetail => newsDetail._id === idInt)

    const { image_url, title, details } = newsDetail


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-5 my-10">

                <div className="col-span-3 p-4">
                    <img className="w-full h-[400px]" src={image_url} alt="" />

                    <h3 className="text-base font-bold mt-3">{title}</h3>
                    <p className="text-sm mt-4">{details}</p>

                    <button className="text-white bg-rose-600 px-4 py-2 rounded mt-4">All news in this Category.</button>
                </div>
                <div>
                    <RightSideContent></RightSideContent>
                </div>
            </div>

        </div>
    );
};

export default NewsDetails;