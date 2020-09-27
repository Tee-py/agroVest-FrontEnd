import React from 'react';
import './draw.css';


const SideDrawer = props => {
    let drawerClasses = ['drawer'];
    if (props.show) {
        drawerClasses = ['drawer open'];
    }
    return (
        <nav className={drawerClasses}>
            <div className="log" style={{textAlign: "center", margin: "1rem"}}>
                <div className="s_log" ><a href="/" style={{color: 'green'}}>smartAgro.ng</a></div>
            </div>
            <hr className="hr"></hr>
            <ul>
                <li><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="#009688" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z"/>
  <polyline points="5 12 3 12 12 3 21 12 19 12" />
  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
</svg><a href="/">Home</a></li>
                <li><i className="fas fa-rocket" style={{color: "green"}}></i><a href="/">Get Started</a></li>
                <li><i className="fas fa-money-check-alt" style={{color: "green"}}></i><a href="/">Investments</a></li>
                <li><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-square" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3F51B5" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z"/>
  <line x1="12" y1="8" x2="12.01" y2="8" />
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <polyline points="11 12 12 12 12 16 13 16" />
</svg><a href="">About</a></li>
                <li style={{fontSize: '15px'}}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-login" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FF9800" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                    <path d="M20 12h-13l3 -3m0 6l-3 -3" />
                    </svg><a href="/login">Login</a></li>
                <li><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-plus" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FF9800" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <circle cx="9" cy="7" r="4" />
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    <path d="M16 11h6m-3 -3v6" />
                    </svg><a href="/register">Register</a></li>
            </ul>
        </nav>
    );
};


export default SideDrawer;