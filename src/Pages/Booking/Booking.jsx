import {  } from 'react';
import { useLoaderData } from 'react-router-dom';

const Booking = () => {
    const booking = useLoaderData()
    const { title , img ,price} = booking ;

    return (
        <div>
            <h2>This is booking {title}</h2>
        </div>
    );
};

export default Booking;