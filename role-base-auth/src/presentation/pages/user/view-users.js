import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import '../admin/admin.css';
import NavBar from "../../components/navbar";

function Admin() {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuthenticated'));
    const isAdmin = localStorage.getItem('admin')
    const isUser = localStorage.getItem('user')

    useEffect(() => {
        if ((!isAuth || isAuth === 'false') && ((!isAdmin || isAdmin === 'true') || (!isUser || isUser === 'true'))) {
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
        <NavBar />
        <h2>View Users</h2>
        <div className="container">
            <table border="1" cellpadding="10" cellspacing="0">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Alice Johnson</td>
                        <td>alice@example.com</td>
                        <td>Admin</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Bob Smith</td>
                        <td>bob@example.com</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Carol Lee</td>
                        <td>carol@example.com</td>
                        <td>Moderator</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>David Kim</td>
                        <td>david@example.com</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Ella Brown</td>
                        <td>ella@example.com</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Frank Miller</td>
                        <td>frank@example.com</td>
                        <td>Admin</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Grace Wilson</td>
                        <td>grace@example.com</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Henry Scott</td>
                        <td>henry@example.com</td>
                        <td>Moderator</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Ivy Moore</td>
                        <td>ivy@example.com</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Jack Davis</td>
                        <td>jack@example.com</td>
                        <td>Admin</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={(e) => handleLogout(e)}>Logout</button>
        </div>
    </div>
}

export default Admin;