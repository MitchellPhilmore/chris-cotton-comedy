import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo">Chris Cotton Comedy</li>
          </ul>
          <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
