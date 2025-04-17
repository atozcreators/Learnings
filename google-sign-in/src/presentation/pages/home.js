import { useSelector } from "react-redux";
import './home.css';
import defaultImage from '../../assets/profile.jpg'

function Home() {
    const googleData = useSelector((state) => state.googleDetails)

    return (<div className="homepage">
        <div className="container">
            <h2>Welcome {googleData.firstName}!!!</h2>
            <div className="card">
                <div className="card-top">
                    <img src={googleData.profile} alt="profile" onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = defaultImage;
                    }} />
                </div>
                <div className="card-bottom">
                    <p><b>Your email:</b> {googleData.email}</p>
                    <p><b>Your full name:</b> {googleData.name}</p>
                </div>
            </div>
        </div>
    </div>)
}

export default Home;