import checkout from '../../assets/images/checkout/checkout.png'

const CartDetails = () => {
    return (
        <div>
            <div className='my-6 relative'>
                <img className='w-full' src={checkout} alt="" />
                <div className='absolute top-0 left-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-md'>
                    <h2 className='text-5xl h-full font-semibold flex ml-10 items-center'>Cart Details</h2>
                </div>
            </div>

            <div>
                
            </div>

        </div>
    );
};

export default CartDetails;