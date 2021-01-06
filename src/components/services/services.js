import React from 'react';
import ReactDOM, { render } from 'react-dom';

const Services = () => {
    return (
        <section className="section-services" id="services">
            <div className="services-box">
                <h2 className="heading-secondary u-margin-bottom-small">Our Services</h2>
                <p className="paragraph u-margin-bottom-small">  
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum. Duis mollis, non commodo
                    luctus, nisi, erat porttitot ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac
                    cursus commodo, tortor mauris condimentum nibh.
                </p>
                <div className="container-services">
                    <div className="item">
                        <div className="item__image">
                            <img src="./img/pen.png" alt="" />
                        </div>
                        <div className="item__title">
                            Custom Design
                        </div>
                        <div className="item__text">
                            Curabitur vestibulum eget mauris quis laoreet. Phasellus in quam laoreet,
                            viverra lacus ut, ultrices velit.
                        </div>
                    </div>
                    <div className="item">
                        <div className="item__image">
                            <img src="./img/bulb.png" alt="" />
                        </div>
                        <div className="item__title">
                            Inovative Ideas
                        </div>
                        <div className="item__text">
                            Curabitur vestibulum eget mauris quis laoreet. Phasellus in quam laoreet,
                            viverra lacus ut, ultrices velit.
                        </div>
                    </div>
                    <div className="item">
                        <div className="item__image">
                            <img src="./img/heart.png" alt="" />
                        </div>
                        <div className="item__title">
                            Love Is The Answer
                        </div>
                        <div className="item__text">
                            Curabitur vestibulum eget mauris quis laoreet. Phasellus in quam laoreet,
                            viverra lacus ut, ultrices velit.
                        </div>
                    </div>
                    <div className="item">
                        <div className="item__image">
                            <img src="./img/phone.png" alt="" />
                        </div>
                        <div className="item__title">
                            Responsive Layout
                        </div>
                        <div className="item__text">
                            Curabitur vestibulum eget mauris quis laoreet. Phasellus in quam laoreet,
                            viverra lacus ut, ultrices velit.
                        </div>
                    </div>
                    <div className="item">
                        <div className="item__image">
                            <img src="./img/bubble.png" alt="" />
                        </div>
                        <div className="item__title">
                            24 / 7 Support
                        </div>
                        <div className="item__text">
                            Curabitur vestibulum eget mauris quis laoreet. Phasellus in quam laoreet,
                            viverra lacus ut, ultrices velit.
                        </div>
                    </div>
                    <div className="item">
                        <div className="item__image">
                            <img src="./img/star.png" alt="" />
                        </div>
                        <div className="item__title">
                            Feel Like A Star
                        </div>
                        <div className="item__text">
                            Curabitur vestibulum eget mauris quis laoreet. Phasellus in quam laoreet,
                            viverra lacus ut, ultrices velit.
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
};

export default Services;