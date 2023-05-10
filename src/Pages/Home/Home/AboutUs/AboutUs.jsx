import image1 from '../../../../assets/images/about_us/person.jpg'
import image2 from '../../../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between my-20 gap-6'>
            <div className='bg-black relative'>
                <img className='w-[480px] h-[473px] rounded-md' src={image1} alt="" />
                <div className='absolute bottom-3 md:bottom-0 right-0 md:-right-28'>
                    <img className='w-[200px] md:w-[327px] h-[200px] md:h-[332px] border-8 rounded-md' src={image2} alt="" />
                </div>
            </div>
            <div className='space-y-6 md:w-1/2'>
                <p className='text-xl text-orange-600 font-bold'>About Us</p>
                <p className='font-bold text-3xl lg:text-6xl'>We are qualified & of experience in this field</p>
                <p className='text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <p className='text-[#737373]'>The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <button className='px-5 py-3 border-2 rounded-md text-white border-white bg-orange-600 hover:bg-orange-800'>Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;