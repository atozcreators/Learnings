import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import './user.css';
import NavBar from "../../components/navbar";

function User() {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuthenticated'));
    const isUser = localStorage.getItem('user')

    useEffect(() => {
        if ((!isAuth || isAuth === 'false') || (!isUser || isUser === 'false')) {
            navigate('/');
        }
    }); // run this when isAuth changes

    const handleLogout = (e) => {
        e.preventDefault();
        console.log('hey logout was clicked');

        setIsAuth(localStorage.setItem('isAuthenticated', false));
        localStorage.setItem('user', false)
    }

    return <div className="user-page">
        <NavBar basePath="/user" />
        <h2>Welcome to user page</h2>
        <div className="container">
            <p>What you are able to do?</p>
            <p>View Users</p>
            <button onClick={(e) => handleLogout(e)}>Logout</button>
        </div>
    </div>
}

export default User;