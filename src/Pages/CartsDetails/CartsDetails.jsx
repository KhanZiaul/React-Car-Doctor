import { AiFillCloseCircle } from "react-icons/ai";

const Carts = ({ checkout }) => {
    const { img, title, date, price } = checkout
    return (
        <tbody>

            <tr>
                <th>
                    <label>
                        <AiFillCloseCircle className="w-8 h-8" />
                    </label>
                </th>
                <td>
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </td>
                <td>{title}</td>
                <td className='font-bold'>{'$' + price}</td>
                <td className='font-bold'>{date}</td>
                <th>
                    <button className="btn bg-orange-500 btn-xs text-white">Pending</button>
                </th>
            </tr>
        </tbody>
    );
};

export default Carts;