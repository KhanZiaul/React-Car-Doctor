import loginImg from '../../../assets/images/login/login.svg'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content gap-20 flex-col lg:flex-row">

                <div >
                    <img src={loginImg} alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center mt-4 font-semibold">Login</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="your password" className="input input-bordered" required />
                            <label className="label">
                                <small className=" text-blue-700 underline hover:text-blue-900 cursor-pointer">Forgot password ?</small>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-700 text-white">sign in</button>
                            <p className='text-center text-[#737373] my-4'>Or Sign In with</p>
                            <div className='flex justify-center gap-5'>
                                <FcGoogle />
                                <FaFacebook />
                            </div>
                            <p className='text-center text-[#737373] my-4'>New to car doctor ? <Link to='/register' className='font-bold text-orange-500 underline hover:text-orange-700 '>sign up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;