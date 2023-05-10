import image1 from '../../../../assets/images/about_us/person.jpg'
import image2 from '../../../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between'>
            <div className='bg-black relative'>
                <img className='w-[480px] h-[473px]' src={image1} alt="" />
                <div className='absolute'>
                    <img className='w-[327px] h-[332px]' src={image2} alt="" />
                </div>
            </div>
            <div className='space-y-6 w-1/2'>
                <p className='text-xl text-orange-600 font-bold'>About Us</p>
                <p className='font-bold text-3xl lg:text-6xl'>We are qualified & of experience in this field</p>
                <p className='text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <button className='px-5 py-3 border-2 rounded-md text-white border-white bg-orange-600 hover:bg-orange-800'>Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;