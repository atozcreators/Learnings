import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import './admin.css';
import NavBar from "../../components/navbar";

function ViewComplaints() {
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
        <NavBar />
        <h2>View Complaints</h2>
        <div className="container">
            <table border="1" cellpadding="10" cellspacing="0">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Complaint Title</th>
                        <th>Student Name</th>
                        <th>Department</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Delay in syllabus completion</td>
                        <td>Alice Johnson</td>
                        <td>Computer Science</td>
                        <td>2025-04-01</td>
                        <td>Pending</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Lack of lab equipment</td>
                        <td>Bob Smith</td>
                        <td>Physics</td>
                        <td>2025-04-02</td>
                        <td>Resolved</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Insufficient reference books</td>
                        <td>Carol Lee</td>
                        <td>English</td>
                        <td>2025-04-03</td>
                        <td>In Progress</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Project guidance issues</td>
                        <td>David Kim</td>
                        <td>IT</td>
                        <td>2025-04-04</td>
                        <td>Pending</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Exam schedule conflict</td>
                        <td>Ella Brown</td>
                        <td>Mathematics</td>
                        <td>2025-04-05</td>
                        <td>Resolved</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Low WiFi signal in library</td>
                        <td>Frank Miller</td>
                        <td>Commerce</td>
                        <td>2025-04-06</td>
                        <td>In Progress</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Online class issues</td>
                        <td>Grace Wilson</td>
                        <td>Biology</td>
                        <td>2025-04-07</td>
                        <td>Pending</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Extra class timings</td>
                        <td>Henry Scott</td>
                        <td>History</td>
                        <td>2025-04-08</td>
                        <td>Resolved</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Library closed during free hours</td>
                        <td>Ivy Moore</td>
                        <td>Botany</td>
                        <td>2025-04-09</td>
                        <td>In Progress</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Faculty not available during office hours</td>
                        <td>Jack Davis</td>
                        <td>Mechanical</td>
                        <td>2025-04-10</td>
                        <td>Pending</td>
                    </tr>
                </tbody>
            </table>

            <button onClick={(e) => handleLogout(e)}>Logout</button>
        </div>
    </div>
}

export default ViewComplaints;