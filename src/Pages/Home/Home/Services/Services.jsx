import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {

    const[services,setServices] = useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(datas => setServices(datas))
    },[])

    return (
        <div>
            <div className='space-y-6'>
                <p className='text-xl text-center text-orange-600 font-bold'>Service</p>
                <p className='font-bold text-3xl text-center lg:text-6xl'>Our Service Area</p>
                <p className='text-[#737373] text-center'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services?.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;