import React, { useContext } from 'react';
import imgLogin from '../../assets/images/login/login.svg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    {const {createUser}=useContext(AuthContext)
    const navigate = useNavigate()

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                navigate('/')
            })
            .catch(error => console.log(error))

    }
    return (
        <div>
        <h1 className='text-4xl text-center font-bold'>Register</h1>
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <img src={imgLogin} alt="" />
                </div>
                <form onSubmit={handleSignUp} className="card flex-shrink-0 lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                          
                        </div>
                        <p><small>Have an account?<Link to='/login'>Login</Link> </small></p>
                    </div>
                </form>


            </div>
        </div>
        </div>
    );}
   
};

export default Register;