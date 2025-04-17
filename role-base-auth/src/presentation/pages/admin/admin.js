import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import './admin.css';
import NavBar from "../../components/navbar";

function Admin() {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuthenticated'));
    const isAdmin = localStorage.getItem('admin')

    useEffect(() => {
        if ((!isAuth || isAuth === 'false') || (!isAdmin || isAdmin === 'false')) {
            navigate('/');
        }
    }); // run this when isAuth changes

    const handleLogout = (e) => {
        e.preventDefault();
        console.log('hey logout was clicked');

        setIsAuth(localStorage.setItem('isAuthenticated', false));
        localStorage.setItem('admin', false)
    }

    return <div className="admin-page">
        <NavBar basePath="/admin" />
        <h2>Welcome to admin page</h2>
        <div className="container">
            <p>What you are able to do?</p>
            <p>View Users</p>
            <p>View Complaints</p>
            <button onClick={(e) => handleLogout(e)}>Logout</button>
        </div>
    </div>
}

export default Admin;