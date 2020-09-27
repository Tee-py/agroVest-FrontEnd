import React from 'react';
import './footer.css';

const p_style = {
  fontSize: '15px',
  fontFamily: "'Roboto', cursive"
  
}
const i_style = {
  fontSize: '30px',
  color: 'white'
}

const a_style = {
  padding: '0.5rem'
}


function Footer(){
    return(
        <footer className="footer text-center" style={{backgroundColor: 'rgb(37, 37, 34)'}}>
        <div className="content has-text-centered">
          <p>
            <p style={p_style}>&copy; 2020 SmartAgro Design By Emmanuel-Oluwatobi(Tee-py)</p> 
            <div className="soc-links">
              <a href="https://github.com/Tee-py" style={a_style}>
                <i className="fab fa-github" style={i_style}></i>
              </a>
              <a href="https://github.com/Tee-py" style={a_style}>
                <i className="fab fa-facebook" style={i_style}></i>
              </a>
              <a href="#" style={a_style}>
                <i className="fab fa-twitter" style={i_style}></i>
              </a>
              <a href="https://emmanueloluwatobi2000@gmail.com" style={a_style}>
                <i className="far fa-envelope" style={i_style}></i>
              </a>
              <a href="https://emmanueloluwatobi2000@gmail.com" style={a_style}>
                <i className="fab fa-instagram" style={i_style}></i>
              </a>
          </div>
          </p>
        </div>
      </footer>
    )
};

export default Footer;