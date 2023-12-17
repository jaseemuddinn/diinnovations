import PropTypes from 'prop-types';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getPathByName } from '../../routes/routerManager';
import './Navbar.scss';

const NavBar = ({ items, location }) => {

    return (
        <div className="navigation">
            <nav className="navbar">
                {items.map((item, index) => {
                    console.log(getPathByName(item.route))
                    return (
                        <NavLink to={getPathByName(item.route)} activeClassName="active" key={index} exact>
                            <span>{item.text}</span>
                        </NavLink>
                    )
                })}
            </nav>

        </div>
    );
};

NavBar.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            route: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
    location: PropTypes.object.isRequired,
};

export default NavBar;
