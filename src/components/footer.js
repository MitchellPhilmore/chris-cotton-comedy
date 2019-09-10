import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
     
      <footer style={{background:'black'}}>
         
       
          <ul>
            <li style={{fontSize:'300%',margin:'10px'}}><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li style={{fontSize:'300%',margin:'10px'}}><a href="#"><i className="fab fa-youtube-square"></i></a></li>
            <li style={{fontSize:'300%',margin:'10px'}}><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li style={{fontSize:'300%',margin:'10px'}}><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
          <h3>
             2019 &#169; chriscottoncomedy.com
             <br/>
             <a style={{fontSize:'300%',margin:'10px',color:'white'}} href="#"><i class="fas fa-envelope-square"></i></a>
             
             
             </h3>
         
      </footer>
      
    );
  }
}

export default Footer;
