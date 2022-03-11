import React from 'react'
import '../App.css';
import PropTypes from 'prop-types'

function Nav(props) {
  return (
    <div>
        <header>
        <nav>
        <h1>{props.title}</h1>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>github</li>
          <li>contact</li>
        </ul>
        </nav>
      </header>
    </div>
  )
}

// actually a check to see if the props are valid
Nav.propTypes = {
    title: PropTypes.string
}
// default props if no props are passed
Nav.defaultProps = {
    title: "set title"
}
export default Nav;