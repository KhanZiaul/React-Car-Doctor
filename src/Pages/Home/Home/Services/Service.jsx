import React from 'react';

const Service = ({service}) => {
    const {title,img,price} = service
    return (
        <div className='border-2 p-5 rounded-md space-y-5 my-9'>
            <img className='rounded-md w-[314px] h-[208.01px]' src={img} alt="" />
            <p className='text-2xl font-bold'>{title}</p>
            <p className='text-xl font-semibold text-red-500'>Price : ${price}</p>
        </div>
    );
};

export default Service;