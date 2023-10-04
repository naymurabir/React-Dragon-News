import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Register = () => {


    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, email, password);
    }

    return (
        <div>
            <Navbar></Navbar>

            <form onSubmit={handleRegister}>
                <h2 className="font-semibold text-center  text-xl mt-10">Register your account</h2>
                <hr className="w-1/2 mx-auto mt-3" />

                <div className=" md:w-3/4 lg:w-1/2 mx-auto px-5 my-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name..." className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Your Photo url</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo url..." className="input input-bordered" />
                    </div>

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

                        <div className="flex gap-2 items-center mt-2">
                            <input type="checkbox" name="terms" id="" />
                            <label className="text-sm font-semibold" htmlFor="terms"> Terms and Conditions. </label>
                        </div>

                    </div>

                    <div className="form-control mt-2">
                        <button className="bg-rose-600 text-white px-2 py-1 rounded">Login</button>
                    </div>
                </div>
            </form>

            <div className="text-center">
                <p>Already have an Account? <Link to="/login" className="text-rose-600 font-semibold" >Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;