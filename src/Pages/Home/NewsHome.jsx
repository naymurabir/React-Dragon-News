import { FaRegBookmark, FaShareAlt, FaRegEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';


const NewsHome = ({ news }) => {

    const { _id, author, thumbnail_url, details, title, total_view, rating } = news

    const navigate = useNavigate()

    const handleNewsDetails = () => {
        navigate(`/details/${_id}`)
    }


    return (
        <div >
            <div className=" flex justify-between items-center px-5 py-2 bg-gray-100 rounded mt-5">
                <div className="flex items-center gap-3">
                    <img className="w-14 rounded-full" src={author.img} alt="" />
                    <div>
                        <h3 className="text-xs font-bold">{author.name}</h3>
                        <h3 className="text-xs mt-2"> {author.published_date} </h3>
                    </div>
                </div>

                <div className='flex gap-3'>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </div>

            <div className='mt-5 px-5 space-y-3'>
                <h2 className=' text-sm font-bold'>{title}</h2>
                <img className='w-full h-[250px]' src={thumbnail_url} alt="" />

                {
                    details.length > 200 ? <p onClick={handleNewsDetails}>{details.slice(0, 200)} <Link className='text-blue-600 font-bold'> Read More...</Link>  </p>
                        :
                        <p>{details}</p>


                }

                <div className='flex justify-between items-center bg-gray-100 px-4 py-1 rounded'>
                    <div>
                        <h3> Rating: {rating.number}</h3>
                    </div>

                    <div className='flex items-center gap-2'>
                        <FaRegEye></FaRegEye>
                        <h3>{total_view}</h3>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewsHome;