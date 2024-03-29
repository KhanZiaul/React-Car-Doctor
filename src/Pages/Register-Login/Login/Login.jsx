import loginImg from '../../../assets/images/login/login.svg'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useContext } from 'react';


const Login = () => {

    const { signPopup, signInUser } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const location=useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/'

    function formHandler(event) {
        
        event.preventDefault()
        const Email = event.target.email.value;
        const Password = event.target.password.value;
        signInUser(Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                const loggedUser = {
                    email : user.email
                }

                fetch('https://react-car-doctor.vercel.app/jwt',{
                    method:'POST',
                    headers:{
                        'content-type' : 'application/json'
                    },
                    body:JSON.stringify(loggedUser)
                })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('user-login-token',data.token)
                    navigate(from , { replace: true })
                })

            })
            .catch((error) => {
                const errorMessage = error.message;
            });

        event.target.reset()
    }

    function googleHandler() {
        signPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                navigate(from , { replace: true })
            }).catch((error) => {
                const errorMessage = error.message;
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content gap-20 flex-col lg:flex-row">

                <div >
                    <img src={loginImg} alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center mt-4 font-semibold">Login</h1>
                    <form onSubmit={formHandler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="Your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="Your password" className="input input-bordered" required />
                            <label className="label">
                                <small className=" text-blue-700 underline hover:text-blue-900 cursor-pointer">Forgot password ?</small>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-700 text-white">sign in</button>
                            <p className='text-center text-[#737373] my-4'>Or Sign In with</p>
                            <div className='flex flex-col gap-5'>
                                <div onClick={googleHandler} className='border-2 rounded-xl flex p-3 items-center gap-3 bg-orange-700 hover:bg-orange-900 text-white cursor-pointer'>
                                    <FcGoogle />
                                    <span>Sign in with Google</span>
                                </div>
                                <div className='border-2 rounded-xl flex p-3 items-center gap-3 bg-orange-700 hover:bg-orange-900 text-white cursor-pointer'>
                                    <FaFacebook />
                                    <span>Sign in with Facebook</span>
                                </div>
                            </div>

                            <p className='text-center text-[#737373] my-4'>New to car doctor ? <Link to='/register' className='font-bold text-orange-500 underline hover:text-orange-700 '>sign up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;