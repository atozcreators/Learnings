import { Link, Outlet } from "react-router-dom";
import './navbar.css';

import { addUrlPath } from "../../application/redux-logic/slices/urlPathSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

/*View*/
import { useSelector } from "react-redux";

function NavBar({ basePath }) {
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (basePath) {
            dispatch(addUrlPath(basePath));
        }
    }, [dispatch, basePath]);

    const basePathUrl = useSelector((state) => state.urlPath)

    return(<div className="nav-bar">
        <nav>
            <ul>
                <li><Link to={`${basePathUrl}`}>Home</Link></li>
                <li><Link to='/view-users'>View Users</Link></li>
                <li><Link to='/view-complaints'>View Complaints</Link></li>
            </ul>
        </nav>
        <Outlet/>
    </div>)
}

export default NavBar;