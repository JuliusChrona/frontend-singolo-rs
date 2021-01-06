import React from 'react';
import ReactDOM, { render } from 'react-dom';

const Portfolio = () => {
    return (
        <section className="section-portfolio" id="portfolio">
            <div className="portfolio">
                <h2 className="heading-secondary u-margin-bottom-little">
                    Portfolio
                </h2>
                <p className="paragraph u-margin-bottom-little">
                    Duis mollis, non commodo luctus, nisi, erat porttitot ligula,
                    eget lacinia odio sem nec elit.
                </p>
                <ul className="filter u-margin-bottom-small">
                    <li className="filter__title"><a href="#" className="filter__link filter__link--active">All</a></li>
                    <li className="filter__title"><a href="#" className="filter__link">Web Design</a></li>
                    <li className="filter__title"><a href="#" className="filter__link">Graphic Design</a></li>
                    <li className="filter__title"><a href="#" className="filter__link">Artwork</a></li>
                </ul>
                <div className="collage">
                    <img src="./img/collage_img/image_1.png"
                        alt="" className="collage__image" />
                    <img src="./img/collage_img/image_2.png"
                        alt="" className="collage__image" />
                    <img src="./img/collage_img/image_3.png"
                        alt="" className="collage__image" />                        
                    <img src="./img/collage_img/image_4.png"
                        alt="" className="collage__image" />                        
                    <img src="./img/collage_img/image_5.png"
                        alt="" className="collage__image" />                        
                    <img src="./img/collage_img/image_6.png"
                        alt="" className="collage__image" />                        
                    <img src="./img/collage_img/image_7.png"
                        alt="" className="collage__image" />                        
                    <img src="./img/collage_img/image_8.png"
                        alt="" className="collage__image" />                        
                    <img src="./img/collage_img/image_9.png"
                        alt="" className="collage__image" />                        
                    <img src="./img/collage_img/image_10.png"
                        alt="" className="collage__image" />
                    <img src="./img/collage_img/image_11.png"
                        alt="" className="collage__image" />
                    <img src="./img/collage_img/image_12.png"
                        alt="" className="collage__image" />
                    <img src="./img/collage_img/image_12.png"
                        alt="" className="collage__image" />
                </div>
            </div>
        </section>
    )
};

export default Portfolio;