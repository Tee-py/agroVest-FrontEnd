import React from 'react';
import './dash.css';


/*const style = {
    fontSize: '30px',
    fontFamily: "'Shojumaru', cursive"
}*/

const Card = (props) => {
    return (
        <div className="info-card shadow bg-white text-center" style={{padding: "1.5rem", borderRadius: "15px", marginTop: "0.5rem"}}>
          <div className="info-head">
            <h1 className="c-h text-center">2000000+</h1>
          </div>
          <div className="figure">
            <p className="c-tiny" style={{color: "black", marginTop: "0.7rem"}}>transactions processed</p>
          </div>
        </div>
    )
}

export default Card;