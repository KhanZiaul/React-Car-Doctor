import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const { _id, title, img, price } = service
    return (
        <div className='border-2 p-5 rounded-md space-y-5 my-9'>
            <img className='rounded-md w-[350px] h-[208.01px]' src={img} alt="" />
            <p className='text-2xl font-bold'>{title}</p>
            <div className="flex justify-between">
                <p className='text-xl font-semibold text-red-500'>Price : ${price}</p>
                <Link to={`booking/${_id}`}>
                    <FiArrowRight className="cursor-pointer" />
                </Link>
            </div>
        </div>
    );
};

export default Service;