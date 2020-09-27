import React from 'react';
import './news.css';
import NewsBox from './newsbox';


class News extends React.Component {


    render() {
        return (
            <div className="news-wrap">
                <div className="container-fluid">
                    <div className='head'>
                        <h1><i className="fas fa-rocket" style={{color: "#c91a1a"}}></i> Covid Updates</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <NewsBox />
                        </div>
                        <div className="col-md-4">
                            <NewsBox />
                        </div>
                        <div className="col-md-4">
                            <NewsBox />
                        </div>
                        <div className="col-md-4">
                            <NewsBox />
                        </div>
                        <div className="col-md-4">
                            <NewsBox />
                        </div>
                        <div className="col-md-4">
                            <NewsBox />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default News;