import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import CartsDetails from '../CartsDetails/CartsDetails';
import cover from '../../assets/images/checkout/checkout.png'

const CheckOut = () => {

    const { user } = useContext(AuthContext)

    const [checkouts, setCheckouts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/checkout?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setCheckouts(data))
    }, [user, checkouts])

    return (
        <div>
            <div className='my-6 relative'>
                <img className='w-full' src={cover} alt="" />
                <div className='absolute top-0 left-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-md'>
                    <h2 className='text-5xl h-full font-semibold flex ml-10 items-center'>Cart Details</h2>
                </div>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>

                    {
                        checkouts?.map(checkout => <CartsDetails key={checkout._id} checkout={checkout}></CartsDetails>)
                    }

                </table>
            </div>
        </div>
    );
};

export default CheckOut;