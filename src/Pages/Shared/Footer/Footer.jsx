import logo from '../../../assets/flogo.svg'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white ">
            <div>
                <img src={logo} alt="" />
                <p>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
                <div className='flex gap-4'>
                    <FcGoogle />
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                </div>
            </div>
            <div>
                <span className="font-bold text-xl mb-4">About</span>
                <Link className="link link-hover">Home</Link>
                <Link className="link link-hover">Service</Link>
                <Link className="link link-hover">Contact</Link>
            </div>
            <div>
                <span className="font-bold text-xl mb-4">Company</span>
                <a className="link link-hover">Why Car Doctor</a>
                <Link className="link link-hover">About</Link>
            </div>
            <div>
                <span className="font-bold text-xl mb-4">Support</span>
                <Link className="link link-hover">Support Center</Link>
                <Link className="link link-hover">Feedback</Link>
                <Link className="link link-hover">Accesbility</Link>
            </div>
        </footer>
    );
};

export default Footer;