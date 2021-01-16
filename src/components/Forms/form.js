import React, { Component } from 'react';



class Form extends Component{

    render() {
        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form action="" method="post" style={{padding: '1.5rem'}}>
                        <div className="form-header" style={{padding: '1rem'}}>
                            <h3 className="text-center" style={{color: 'green', fontSize: '1.5rem', fontWeight: '700',}}>Login to your account</h3>
                            <p className="text-center" style={{color: '#4a5568', fontSize: '15px', fontWeight: '300'}}>SmartAgro.ng! The future.</p>
                        </div>
                        <div class="input-sec">
                            <label className="lab">Email or Phone Number</label>
                            <input type="text" className="form-control c_input"></input>
                        </div>
                        <div className="input-sec">
                            <label className="lab">Password</label>
                            <input type="password" className="form-control c_input"></input>
                        </div>
                        <div className="sub-btn" style={{padding: '1rem'}}>
                            <button type="submit" className="btn btn-primary btn-block s-btn">
                                <h6 style={{padding: '0.5rem'}}>LOG IN</h6>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};

export default Form;