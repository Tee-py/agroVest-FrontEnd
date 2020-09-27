import React from 'react';
import './start.css'



export default function Start(props) {
    return (
        <div className="row">
            <div className="col-md-3 text-center">
                <div className="s-item">
                    <img src="https://thriveagric.com/static/media/user-new-lg.02b06d7c.svg" style={{color: 'black'}}></img>
                    <p className="s-head">Create an Account</p>
                    <div className="s-body">
                        Sign Up to get started on the benefits and great experiences of the platform.
                    </div>
                </div>
            </div>
            <div className="col-md-3 text-center">
                <div className="s-item">
                <i class="fas fa-money-check-alt" style={{fontSize: '100px', marginTop: '0.7rem'}}></i>
                        <p className="s-head" style={{marginTop: '0.5rem', marginTop: '1rem'}}>Fund your wallet</p>
                        <div className="s-body">
                            Fund your SmartAgro wallet with any of the payment processors to start Investment.
                        </div>
                </div>
            </div>
            <div className="col-md-3 text-center">
                <div className="s-item">
                        <img src="https://thriveagric.com/static/media/farm-new-lg.c6b714ef.svg" style={{color: 'black'}}></img>
                        <p className="s-head">Choose an Investment</p>
                        <div className="s-body">
                            Go through the list of open Investments and pick on that's suitable for you.
                        </div>
                </div>
            </div>
            <div className="col-md-3 text-center">
                <div className="s-item">
                        <img src="https://thriveagric.com/static/media/returns-new-lg.324ef96c.svg" style={{color: 'black'}}></img>
                        <p className="s-head">Start Earning</p>
                        <div className="s-body">
                            Earn up to 15-25% returns on your Investments on harvest.
                        </div>
                </div>
            </div>
        </div>
    )
}