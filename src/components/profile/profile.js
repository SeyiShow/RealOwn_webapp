import React from 'react';
import "./profile.css";
import { Link } from "react-router-dom";

const Profile = (props) => {
    const { name, bio, image } = props;
    return (
    <section>
        <h1>Profile</h1>  
        <div>
            <div>
                <img src={image} alt={image} />
                <h2>{name}</h2>
                <p>{bio}</p>
            </div>

            <div>
                <input type="button" value="Withdraw" name="" />
                <input type="button" value="Withdraw" name="" />
            </div>
        </div>

        <div>
            <Link to="/Referrals">Referrals</Link>
            <Link to="/Settings">Settings</Link>
            <Link to="/Help">Help</Link>
            <Link to="/Contact">Contact Us</Link>
            <Link to="/About">About Us</Link>
            <Link to="/Legals">Legals</Link>
            <Link to="/LogOut" className="LogOut">Log Out</Link>
        </div>
    </section>   
    );
}

export default Profile;