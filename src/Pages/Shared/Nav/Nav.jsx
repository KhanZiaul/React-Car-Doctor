import logo from '../../../assets/logo.svg'
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Nav = () => {
    const { user , logOut} = useContext(AuthContext)

    function logOutHandler(){
        logOut().then(() => {

        }).catch((error) => {
            
        });
    }

    return (
        <div className="navbar bg-base-100 h-28 my-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link to='/checkout'>Checkout</Link></li>
                        <li>
                            {
                                user ? <div className='flex items-center flex-col'>
                                    <span>
                                        {
                                            user?.email
                                        }
                                    </span>
                                    <button onClick={logOutHandler} className='px-5 py-3 border-2 rounded-md border-orange-500 text-orange-600 hover:bg-orange-700 hover:text-white mx-auto block'>Logout</button>
                                </div>
                                    :
                                    <Link to='/login'><button className='px-5 py-3 border-2 rounded-md border-orange-500 text-orange-600 hover:bg-orange-700 hover:text-white mx-auto block'>Login</button></Link>
                            }
                        </li>

                    </ul>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link>Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link to='/checkout'>Checkout</Link></li>
                    <li>
                        {
                            user ? <div className='flex items-center'>
                                <span>
                                    {
                                        user?.email
                                    }
                                </span>
                                <button onClick={logOutHandler} className='px-5 py-3 border-2 rounded-md border-orange-500 text-orange-600 hover:bg-orange-700 hover:text-white mx-auto block'>Logout</button>
                            </div>
                                :
                                <Link to='/login'><button className='px-5 py-3 border-2 rounded-md border-orange-500 text-orange-600 hover:bg-orange-700 hover:text-white mx-auto block'>Login</button></Link>
                        }
                    </li>
                </ul>
            </div>
            <div className="navbar-end items-center lg:gap-6">

                <HiOutlineShoppingBag className='w-6 h-6' />

                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-outline btn-warning">Appointment</button>
            </div>
        </div>
    );
};

export default Nav;