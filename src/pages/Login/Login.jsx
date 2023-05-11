import React, { useContext } from 'react';
import imgLogin from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <img src={imgLogin} alt="" />
                </div>
                <form onSubmit={handleLogin} className="card flex-shrink-0 lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                        <Link to='/'><button className="btn btn-primary">Login</button></Link>
                        </div>
                        <p><small>No account?<Link to='/register'>Register</Link> </small></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;