import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const CartDetails = () => {

    const {user} = useContext(AuthContext)

    const [checkout,setCheckout] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:3000/checkout?email=${user?.email}`)
        .then(res => res.json())
        .then(data => console.log(data))
    },[user])

    return (
        <div>
            <div className='my-6 relative'>
                <img className='w-full' src={checkout} alt="" />
                <div className='absolute top-0 left-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-md'>
                    <h2 className='text-5xl h-full font-semibold flex ml-10 items-center'>Cart Details</h2>
                </div>
            </div>

            <div>
                {

                }
            </div>

        </div>
    );
};

export default CartDetails;