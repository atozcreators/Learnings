import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { addGoogleDetails } from '../../application/redux-logic/slices/googleDetailsSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate hook

  return (
    <div className="App">
      <div className='login-form'>
        <h2>Login with google</h2>
        <GoogleLogin
          onSuccess={credentialResponse => {
            const decoded = jwtDecode(credentialResponse?.credential)
            console.log(decoded);
            console.log(decoded.picture)
            
            dispatch(addGoogleDetails({firstName: decoded.given_name ,name: decoded.name, email: decoded.email, profile: decoded.picture}));

            navigate('/home'); // navigate to home after login
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </div>
    </div>
  );
}

export default Login;
