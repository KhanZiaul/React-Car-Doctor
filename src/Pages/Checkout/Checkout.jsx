import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import checkout from '../../assets/images/checkout/checkout.png'

const Checkout = () => {
    const booking = useLoaderData()
    const { user } = useContext(AuthContext)
    const { price , img} = booking;

    function formHandler(event) {
        event.preventDefault()
        const date = event.target.date.value;
        const chekoutInfo ={
            email:user?.email,
            clientName : user?.displayName,
            img,
            date,
            price
        }
        fetch(`http://localhost:3000/checkout`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(chekoutInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div>
            <div className='my-6 relative'>
                <img className='w-full' src={checkout} alt="" />
                <div className='absolute top-0 left-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-md'>
                    <h2 className='text-5xl h-full font-semibold flex ml-10 items-center'>Check Out</h2>
                </div>
            </div>

            <form onSubmit={formHandler} className="card-body">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Your Name" value={user?.displayName} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input name='date' type="date" className="input input-bordered cursor-pointer" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="Your email" value={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='price' type="text" value={'$' + price} className="input input-bordered" required />
                    </div>
                </div>
                <button className="btn bg-orange-500 my-6">Order Confirm</button>
            </form>
        </div>
    );
};

export default Checkout;