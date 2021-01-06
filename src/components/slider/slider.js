import React from 'react';
import ReactDOM, { render } from 'react-dom';

const Slider = () => {
    return (
        <section className="section-slider" id="home">
            <div className="slider">
                <div className="slider__arrow slider__arrow--prev">
                    <img src="./img/chev.png" alt="" />
                </div>
                <div className="slider__phone--vertical">
                    <img src="./img/iPhone Vertical.png" alt="" />
                </div>
                <div className="slider__phone--horizontal">
                    <img src="./img/iPhone Horizontal.png" alt="" />
                </div>
                <div className="slider__arrow slider__arrow--next">
                    <img src="./img/chev(1).png" alt="" />
                </div>
            </div>
        </section>  
        )
};

export default Slider;