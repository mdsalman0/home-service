import React from 'react';
import './Home.css';
import g4 from '../image/g4768.png';
import image3 from '../image/image 3.svg';
import StockSna from '../image/StockSnap_ABEBWKIUKG 1.png'
const Home = () => {
    return (
        <div>
        <section className='section-neu'>
            <div className='nav-bar'>
                <div className='logo'>
                    <img className='g4' src={g4} alt="" />
                    <p className='neu'><span>Neu.</span></p>
                    <p className='service'><small>Home Services</small></p>
                </div>
                <div>
                    <p className='start-estimate'><span>Start Estimate</span></p>
                </div>
            </div>
            <div className='info'>
                <div className='dot-logo'>
                    <img src={image3} alt="" />
                </div>
                <div className='project'>
                    <div className='span'></div>
                    <h6>A Neu way for Home Improvement Projects.</h6>
                    <p>Home improvement projects, can sometimes be overwheling. Let us give you a helping hand that will make you feel that you’ve made a postive decision.</p>
                </div>
                <div className='stocksna'>
                    <img src={StockSna} alt="" />
                </div>
            </div>
            <div className="input-group mb-2 w-50 mx-auto">
                <input type="text" className="form-control pl-4" placeholder="Enter your ZipCode" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="input-button text-white" type="button" id="button-addon2">Get Estimate</button>
            </div>
        </section>
        </div>
    );
};

export default Home;