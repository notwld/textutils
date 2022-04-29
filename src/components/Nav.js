import React from "react";
import "../App.css";
import PropTypes from "prop-types";
import { Link, Outlet } from "react-router-dom";

function Nav(props) {
  return (
    <div>
      <header>
        <nav>
          <h1>{props.title}</h1>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </header>
    </div>
  );
}

// actually a check to see if the props are valid
Nav.propTypes = {
  title: PropTypes.string,
};
// default props if no props are passed
Nav.defaultProps = {
  title: "textutils101",
};
export default Nav;
