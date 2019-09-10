import React, { Component } from 'react';
import Nav from "./nav";

class Header extends Component {
  render() {
    return (
     
      <header>
      <Nav/>
        <div className="head">
        <video autoplay muted loop id="myVideo">
  <source src="../images/chrisvid1.mp4" type="video/mp4"/>
</video>
            {/* <h1 style={{color:'white'}}>Chris Cotton Comedy</h1> */}
            <div>
              {/* <p>Integer posuere leo non erat ornare dictum id vitae magna. Proin consectetur iaculis nisi, ut convallis tortor tempor congue. Curabitur sit amet tempus felis. Duis tellus eros, pellentesque at rhoncus eu, maximus ut diam.</p>
              <div><a className="contact" href="#">Contact Us</a></div> */}
            </div>
        </div>
       
      </header>
      
    );
  }
}

export default Header;
