import { space } from "postcss/lib/list";
import { AiFillCloseCircle } from "react-icons/ai";

const Carts = ({ checkout }) => {
    const { _id, img, title, date, price, status } = checkout;

    function deleteHandler(id) {
        fetch(`http://localhost:3000/checkout/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    function checkoutHandler(id) {
        fetch(`http://localhost:3000/checkout/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <tbody>
            <tr>
                <th>
                    <label>
                        <AiFillCloseCircle onClick={() => deleteHandler(_id)} className="w-8 h-8 cursor-pointer" />
                    </label>
                </th>
                <td>
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </td>
                <td className='font-bold'>{title}</td>
                <td className='font-bold'>{'$' + price}</td>
                <td className='font-bold'>{date}</td>
                <th>
                    {
                        status === 'confirm' ? <span className="btn bg-green-600 btn-xs text-white">Confirm</span> : <button onClick={() => checkoutHandler(_id)} className="btn bg-orange-500 btn-xs text-white">Pending...</button>
                    }

                </th>
            </tr>
        </tbody>
    );
};

export default Carts;