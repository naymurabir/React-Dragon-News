import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto px:2 md:px-8 lg:px-16 font-poppins py-5">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;