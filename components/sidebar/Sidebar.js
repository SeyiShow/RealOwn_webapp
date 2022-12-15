import "./Sidebar.css";
import logo from "../../assets/logo.svg";
import times from "../../assets/times.svg";
import More from "../../assets/More.svg";
import Storefront from "../../assets/Storefront.svg"
import Swap from "../../assets/Swap.svg";
import Briefcase from "../../assets/Briefcase.svg";
import Bars from "../../assets/Bars.svg";


const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return(
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo"/>
                </div>
                <img src={times} className="fa fa-times"
                id="sidebarIcon"
                onClick={() => closeSidebar()} alt=""/>
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <img src={More} className="fa fa-home" alt="" />
                    <a href="Home">Home</a>
                </div>
                <div className="sidebar__link">
                    <img src={Storefront} className="fa fa-storefront" alt="" />
                    <a href="Marketplace">Marketplace</a>
                </div>
                <div className="sidebar__link">
                    <img src={Swap} className="fa fa-swap" alt="" />
                    <a href="Activities">Activities</a>
                </div>
                <div className="sidebar__link">
                    <img src={Briefcase} className="fa fa-briefcase" alt="" />
                    <a href="My_portfolio">My portfolio</a>
                </div>
                <div className="sidebar__link">
                    <img src={Swap} className="fa fa-swap" alt="" />
                    <a href="Activities">Activities</a>
                </div>
                <div className="sidebar__link">
                    <img src={More} className="fa fa-more" alt="" />
                    <a href="more">More</a>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;