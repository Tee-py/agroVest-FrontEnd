import React from 'react';
import './draw.css'


const DrawerButton = props => (
    <button onClick={props.click} className="toggle-button">
        <i class="fas fa-bars" style={{width: "100%", color: "black", height: "100%", marginBottom: "5px"}}></i>
    </button>
);


export default DrawerButton;