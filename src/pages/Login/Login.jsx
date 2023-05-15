import React, { useContext } from 'react';
import imgLogin from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn, googleLoginUser } = useContext(AuthContext)
    const navigate = useNavigate()
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // navigate('/')
                // navigate(from, { replace: true });
                // const loggedUser = {
                //     email: user.email
                // }

                // na hole kete dibo
                navigate(from, { replace: true });
                console.log(loggedUser)
                // fetch('https://car-doctor-server-iota-nine.vercel.app/jwt', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(loggedUser)
                // }).then(res => res.json())
                //     .then(data => {
                //         console.log(data)
                //         localStorage.setItem('car-access-token', data.token)
                //         navigate(from, { replace: true });
                //     })
            }
            )
            .catch(error => console.log(error));
    }
    const handleGoogleLogin = () => {

        googleLoginUser()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // navigate('/')
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error));
    }
    return (
        <div>
            <h1 className='text-4xl text-center font-bold'>Login</h1>
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
                                <input className="btn btn-primary" type="submit" value="Sign In" />
                                <Link><button onClick={handleGoogleLogin} className="btn btn-primary">Google Login</button></Link>
                            </div>
                            <p><small>No account?<Link to='/register'>Register</Link> </small></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;