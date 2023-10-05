import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

    const { loginUser } = useContext(AuthContext)

    const location = useLocation()
    console.log("Pathname", location.pathname);

    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        e.target.reset()
        console.log(email, password);


        loginUser(email, password)
            .then(result => {
                const user = result.user
                navigate(location?.state ? location.state : '/')

                console.log("User has been logged in.", user);
            })
            .catch(error => {
                console.log("Error", error.message);
            })
    }

    return (
        <div>
            <Navbar></Navbar>

            <form onSubmit={handleLogin}>
                <h2 className="font-semibold text-center  text-xl mt-10">Login your account</h2>
                <hr className="w-1/2 mx-auto mt-3" />

                <div className=" md:3/4 lg:w-1/2 mx-auto px-5 my-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email Address</span>
                        </label>
                        <input type="email" name="email" placeholder="Email..." className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password..." className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="bg-rose-600 text-white px-2 py-1 rounded">Login</button>
                    </div>
                </div>
            </form>

            <div className="text-center">
                <p>Do not have Account? <Link className="text-rose-600 font-semibold" to="/register">Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;