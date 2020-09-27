import React from 'react';
import './news.css';



const NewsBox = props => {
    return (
        <div className='nb-wrap' style={{backgroundColor: '#343a40', color: 'white'}}>
            <div className="news-img">
                <img src="https://thrive-images.sfo2.digitaloceanspaces.com/farms/broiler-live-chicken-farm.jpg" style={{width: "100%"}}></img>
            </div>
            <div className="news-head p5">
                <div className='n-icon'>
                    <h1>Poultry Farm</h1> 
                    <div className="author-info">
                        <p style={{paddingTop: '0'}}>Mowe, Ogun State.</p>
                    </div>
                </div>
            </div>
            <div className="title p5">
                <h4><strong style={{color: '#64ad05'}}>15-25%</strong> for 40years.</h4>
                <div className="l-sec">
                    <h4>₦ 10,000
                        <p>per slot</p>
                    </h4>
                    <h4>₦ 2,079,000
                        <p>needed</p>
                    </h4>
                </div>
            </div>
            <div className="n-foot" style={{textAlign: 'right'}}>
                <div className="bt">
                    <p>closed</p>
                </div>
            </div>
        </div>
    )
};

export default NewsBox;