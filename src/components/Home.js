import React from 'react';
import './Home.css';
import Form from './Forms/form';
import RegForm from './Forms/register';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/footer';
import DashBody from './dashboard/dash_body';
import SideDrawer from './SideDrawer/SideDrawer';
import BackDrop from './Backdrop/backdrop';
import { BrowserRouter, Route, Switch } from 'react-router-dom';




class Home extends React.Component {
    state = {
        SideDrawerOpen: false,
    }

    toggleHandler = () => {
        this.setState((prevState)=>{
            return {SideDrawerOpen: !prevState.SideDrawerOpen,}
        });
    };

    backDropClickHandler = () => {
        this.setState((prevState)=> {
            return {SideDrawerOpen: false,}
        });
    }; 
    render() {
        let backDrop;
        if (this.state.SideDrawerOpen) {
            backDrop = <BackDrop click={this.backDropClickHandler} />
        }
        return (
            <div style={{height: "100%"}}>
                <div className="home">
                    <Sidebar onBtnClick={this.toggleHandler} open={this.openModalHandler}/>
                    <SideDrawer show={this.state.SideDrawerOpen} />
                    {backDrop}
                    <main style={{marginTop: '64px'}}>
                        <BrowserRouter>
                            <Switch>
                                <Route exact={true} path='/' component={DashBody}></Route>
                                <Route path='/login' component={Form}></Route>
                                <Route path='/register' component={RegForm}></Route>
                            </Switch>
                        </BrowserRouter>
                    </main>
                    <Footer ></Footer>
                </div>
            </div>
        )
    }
}

export default Home;