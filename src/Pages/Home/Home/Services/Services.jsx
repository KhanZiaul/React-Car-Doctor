import { useEffect, useState } from "react";
import Service from "./Service";
import { FcOvertime } from "react-icons/fc";

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(datas => setServices(datas))
    }, [])

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

            <button className='px-5 py-3 border-2 rounded-md border-orange-500 text-orange-600 hover:bg-orange-700 hover:text-white mx-auto block'>More Services</button>

            <div className="my-8 text-white bg-black flex justify-between p-16 rounded-md">
                <div className="flex items-center gap-3">
                    <FcOvertime className="h-12 w-12 text-red-500"/>
                    <div>
                        <p>We are open monday-friday</p>
                        <p className="text-2xl font-semibold">7:00 am - 9:00 pm</p>
                    </div>
                </div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <p>Have a question?</p>
                        <p className="text-3xl font-semibold">+2546 251 2658</p>
                    </div>
                </div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <p>Need a repair? our address</p>
                        <p className="text-3xl font-semibold">Liza Street, New York</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;