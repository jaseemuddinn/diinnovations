import React from "react";
import PropTypes from "prop-types";
import "./DefaultLayout.scss";
import NavBar from "../../components/Navbar/Navbar";
import { NAV } from "../../constants/appConstants";
import Hamburger from "../../components/Hamburger/Hamburger";

const DefaultLayout = ({ children }) => {
    return (
        <div className="mainContainer">
            <div className="flex-row j-sb a-c deskTopNav">
                <NavBar items={NAV} />
                <div className="brandName">
                    <span className="brandColor">D I</span>nnovations
                </div>
            </div>
            <Hamburger />
            {children}
            <footer className="flex-row j-sb footer">
                <div>
                    Copyright {new Date().getFullYear()} D Innovations / All Photographs © D Innovations
                </div>
                <div className="socialIcons">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin-in"></i>
                </div>
            </footer>
        </div>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
