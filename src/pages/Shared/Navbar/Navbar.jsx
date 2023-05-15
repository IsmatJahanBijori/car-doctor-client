import React, { useContext } from 'react';
import logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut().then(() => {
            // const user=result.user
            // console.log(user)
            // localStorage.removeItem('car-access-token')
        }).catch(error => console.log(error.message))
    }
    const navItems =
        <React.Fragment>
            <li><Link>Home</Link></li>
            <li><Link>About</Link></li>
            <li><Link>Services</Link></li>
            <li><Link>Blog</Link></li>
            <li><Link>Contact</Link></li>
            {/* <li><Link to='/'>LogOut</Link></li>*/}

            {
                user ?
                    <div>
                        <li><Link to='/bookings'>Bookings</Link></li>
                        <li><Link><button onClick={handleLogout}>LogOut</button></Link></li>
                    </div>
                    :
                    <React.Fragment>
                        <li><Link to='/login'><button>Login</button></Link></li>
                        <li><Link to='/register'><button>Register</button></Link></li>
                    </React.Fragment>
            }
        </React.Fragment>
    return (

        <div className="navbar bg-base-100">
            {/* small device*/}
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost">
                        <img src={logo} alt="" />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 lg:hidden">
                        {navItems}
                    </ul>
                </div>
            </div>
            {/*lg device */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn btn-outline btn-error">Appointment</Link>
            </div>
        </div>
    );
};

export default Navbar;