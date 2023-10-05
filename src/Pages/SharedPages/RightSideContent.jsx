import { FaGoogle, FaGithub, FaFacebook, FaTwitterSquare } from 'react-icons/fa';
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'
import backgroundImg1 from '../../assets/bg1.png'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';



const RightSideContent = () => {

    const { googleLogin } = useContext(AuthContext)

    const handleGoogleLogin = () => {
        googleLogin()
    }

    return (
        <div>
            <div className='space-y-2 p-4 mb-5'>
                <h2 className='text-md font-semibold'>Login With</h2>

                <button onClick={handleGoogleLogin} className='btn btn-outline w-full btn-sm'>
                    <FaGoogle className='text-blue-700 text-xl'></FaGoogle>
                    Google
                </button>

                <button className='btn btn-outline w-full btn-sm'>
                    <FaGithub className='text-orange-700 text-xl'></FaGithub>
                    Github
                </button>
            </div>



            <div className='space-y-2 p-4'>
                <h2 className='text-md font-semibold'>Find Us On</h2>

                <a className='flex items-center gap-2 px-4 py-2 rounded shadow-md hover:bg-slate-100' href="">
                    <FaFacebook className='text-blue-700 text-xl'></FaFacebook>
                    Facebook</a>

                <a className='flex items-center gap-2 px-4 py-2 rounded shadow-md hover:bg-slate-100' href="">
                    <FaTwitterSquare className='text-green-700 text-xl'></FaTwitterSquare>
                    Facebook</a>

            </div>



            <div className='space-y-2 p-4 bg-gray-100 mt-10'>
                <h2 className='text-md font-semibold'>Q-Zone</h2>

                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />

            </div>

            <div className='space-y-2 p-4 mt-5'>
                <img src={backgroundImg1} alt="" />
            </div>
        </div>

    );
};

export default RightSideContent;