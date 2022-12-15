import "./Navbar.css";
import Hi from "../../assets/Hi.svg";
import Bars from "../../assets/Bars.svg";
import Notification_Icon from "../../assets/Notification_Icon.svg";


const Navbar = ({ sidebarOpen, openSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
            <img src={Bars} className="fa fa-bars" alt=""/> 
            </div>
            <div className="navbar__left">
               <h2><span>Good Morning</span><br /> Oluwaseyi.</h2>
               <img src={Hi} alt=""/>
            </div>
            <div className="nav__right" onClick={() => Notification_Icon}>
                <img src={Notification_Icon} className="nav_rite" alt="" />
            </div>
        </nav>
    )
};

export default Navbar