import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import CartsDetails from '../CartsDetails/CartsDetails';
import cover from '../../assets/images/checkout/checkout.png'

const CheckOut = () => {

    const { user } = useContext(AuthContext)

    const [checkouts, setCheckouts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/checkout?email=${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('user-login-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setCheckouts(data))
    }, [user])

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
                const remaining = checkouts?.filter(restId => restId._id !== id)
                const checkOutId = checkouts?.find(co => co._id === id)
                checkOutId.status = 'confirm'

                const confimCheckout =[checkOutId,...remaining]
                setCheckouts(confimCheckout)
            })
    }


    function deleteHandler(id) {
        fetch(`http://localhost:3000/checkout/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const restId = checkouts?.filter(restId => restId._id !== id)
                setCheckouts(restId)
            })
    }


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
                        checkouts?.map(checkout => <CartsDetails key={checkout._id} checkout={checkout} deleteHandler={deleteHandler} checkoutHandler={checkoutHandler}></CartsDetails>)
                    }

                </table>
            </div>
        </div>
    );
};

export default CheckOut;