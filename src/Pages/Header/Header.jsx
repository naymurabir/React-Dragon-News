import logo from "../../assets/logo.png"
import moment from 'moment';


const Header = () => {
    return (

        <div className="text-center space-y-2">
            <img className="w-96 mx-auto" src={logo} alt="" />
            <h2 className="text-[#706F6F]">Journalism Without Fear or Favour</h2>
            <h2> {moment().format("dddd, MMMM D, YYYY")} </h2>

        </div>
    );
};

export default Header;