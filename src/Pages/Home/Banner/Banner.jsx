import image1 from '../../../assets/images/banner/1.jpg'
import image2 from '../../../assets/images/banner/2.jpg'
import image3 from '../../../assets/images/banner/3.jpg'
import image4 from '../../../assets/images/banner/4.jpg'
import image5 from '../../../assets/images/banner/5.jpg'
import image6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[100vh]">

            <div id="slide1" className="carousel-item relative w-full">
                <img src={image1} className="w-full" />
                <div className="absolute flex transform bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full left-0 top-0">
                    <div className='my-auto text-white w-1/2'>
                        <p className='text-6xl'>Affordable Price For Car Servicing</p>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button>Discover More</button>
                            <button>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-10 transform -translate-y-1/2 bottom-10 right-10">
                    <a href="#slide6" className="btn btn-circle bg-orange-600">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-orange-600">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img src={image2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <p className='text-6xl text-white'>Affordable Price For Car Servicing</p>
                </div>
                <div className="absolute flex gap-10 transform -translate-y-1/2 bottom-10 right-10">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img src={image3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <p className='text-6xl text-white'>Affordable Price For Car Servicing</p>
                </div>
                <div className="absolute flex gap-10 transform -translate-y-1/2 bottom-10 right-10">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
                <img src={image4} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)">
                    <p className='text-6xl text-white'>Affordable Price For Car Servicing</p>
                </div>
                <div className="absolute flex gap-10 transform -translate-y-1/2 bottom-10 right-10">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide5" className="carousel-item relative w-full">
                <img src={image5} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <p className='text-6xl text-white'>Affordable Price For Car Servicing</p>
                </div>
                <div className="absolute flex gap-10 transform -translate-y-1/2 bottom-10 right-10">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide6" className="carousel-item relative w-full">
                <img src={image6} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <p className='text-6xl text-white'>Affordable Price For Car Servicing</p>
                </div>
                <div className="absolute flex gap-10 transform -translate-y-1/2 bottom-10 right-10">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;