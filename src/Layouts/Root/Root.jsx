import { Outlet } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Root = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <div className="max-w-screen-xl mx-auto px:2 md:px-8 lg:px-16 font-poppins py-5">
                <Outlet></Outlet>
            </div>
        </HelmetProvider>
    );
};

export default Root;