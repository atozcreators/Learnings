import { useState } from 'react';

import loginimg from '../../assets/images/login-main.png';
import logo from '../../assets/images/logo.png';
import './login.css';
import marker from '../../assets/design/login-sign-up-marker.png'
import email from '../../assets/icons/sms.png'
import password from '../../assets/icons/lock.png'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(user === 'admin@mail.com'  && pass === 'admin'){
            const check = localStorage.getItem('isAuthenticated');
            
            if (!check || check === 'false'){
                localStorage.setItem("isAuthenticated", true);
                localStorage.setItem("admin", true);
                navigate('admin');
            }
            else{
                console.log("Already authenticated.");
                navigate('admin');
            }
        }

        else if(user === 'user@mail.com'  && pass === 'user'){
            const check = localStorage.getItem('isAuthenticated');
            if (!check || check === 'false'){
                localStorage.setItem("isAuthenticated", true);
                localStorage.setItem("user", true);
                navigate('user');
            }
            else{
                console.log("Already authenticated.");
                navigate('user');
            }
        }
    };

    return <div className="login">
        <div className='left-con'>
            <img src={loginimg} alt='login-image' />
        </div>
        <div className='right-con'>
            <div className='logo'>
                <img src={logo} alt='logo' />
                <h2>Company<br />Logo</h2>
            </div>
            <div className='main-login'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <h2>Let the Journey Begin!</h2>
                    <p>Unlock a world of education with a single click! Please login in to your account.</p>

                    <label>Email Address</label><br />
                    <div className='input-div'>
                        <img src={email} alt='icon' />
                        <input type='email' name='email' placeholder='@example.com' onChange={e => setUser(e.target.value)}/><br />
                    </div>

                    <label>Password</label><br />
                    <div className='input-div'>
                        <img src={password} alt='icon' />
                        <input type='password' name='password' placeholder='***********' onChange={e => setPass(e.target.value)}/>
                    </div>

                    <p className='forgot'>Forgot Password?</p>

                    <input type='submit' className='btn-submit' value='Login'/>

                    <div className='sign-up-div'><div><p className='sign-up-link'>Don’t have an account? <b>Sign up for free</b></p></div><img src={marker} alt='marker' /></div>
                </form>
            </div>
        </div>
    </div>
}

export default Login;