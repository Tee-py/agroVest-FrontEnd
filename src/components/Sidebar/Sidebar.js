import './sidebar.css';
import React from 'react';
import '../SideDrawer/drawerbtn'
import DrawerButton from '../SideDrawer/drawerbtn';



const Sidebar = props => (
    <header className="menu_bar">
        <nav className="menu_nav">
            <div className="site_log" style={{marginLeft: "2rem"}}><a href="/">smartAgro</a></div>
            <div className="space">
                <div className="space-inner">
                    <ul style={{marginLeft: '5rem', marginTop: '1rem'}}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Get started</a></li>
                        <li><a href="/">Investments</a></li>
                        <li><a href="/">About</a></li>
                    </ul>
                </div>
            </div>
            <div className="nav_items">
                <div className="tog-btn">
                    <DrawerButton click={props.onBtnClick}/>
                </div>      
            </div> 
        </nav>
    </header>
)
export default Sidebar;