import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";



const BreakingNews = () => {
    return (

        <div className="flex mt-5 px-3 py-2 bg-gray-200">
            <button className="bg-rose-600 text-white font-semibold px-4 py-2 rounded">Latest</button>

            <Marquee speed={100} pauseOnHover={true}>
                <Link className="mr-5 font-semibold text-black text-sm"> I can be a React component, multiple React components, or just some text... </Link>

                <Link className="mr-5 font-semibold text-black text-sm"> I can be a React component, multiple React components, or just some text... </Link>

                <Link className="font-semibold text-black text-sm"> I can be a React component, multiple React components, or just some text... </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;