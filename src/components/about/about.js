import React from 'react';

const About = () => {
    return (
        <section className="section-about" id="about">
            <div className="about">
                <div className="info">
                    <h2 className="heading-secondary u-margin-bottom-small">About Us</h2>
                    <p className="paragraph u-margin-bottom-small">  
                        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum. Duis mollis, non commodo
                        luctus, nisi, erat porttitot ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac
                        cursus commodo, tortor mauris condimentum nibh.
                    </p>
                </div>
                <div className="container-about">
                    <div className="author">
                        <img src="./img/photo.png" alt="" className="author__image" />
                        <h3 className="author__name">Adam Jensen</h3>
                        <p className="author__text">Quisque luctus, quam eget molestie commodo, lacus purus cursus purus,
                            nec rutrum tellus dolor id lorem.</p>
                        <ul className="social">
                            <li className="social__item">
                                <a href="#" className="social__link"><img src="./img/facebook.png" alt="" className="social__pict" /></a>
                            </li>
                            <li className="social__item">
                                <a href="#" className="social__link"><img src="./img/google+.png" alt="" className="social__pict" /></a>
                            </li>
                            <li className="social__item">
                                <a href="#" className="social__link"><img src="./img/twitter.png" alt="" className="social__pict" /></a>
                            </li>
                            <li className="social__item">
                                <a href="#" className="social__link"><img src="./img/linkedin.png" alt="" className="social__pict" /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="author">
                        <img src="./img/photo(1).png" alt="" className="author__image" />
                        <h3 className="author__name">Desmond Miles</h3>
                        <p className="author__text">Quisque luctus, quam eget molestie commodo, lacus purus cursus purus,
                            nec rutrum tellus dolor id lorem.</p>
                        <ul className="social">
                            <li className="social__item">
                                <a href="#" className="social__link"><img src="./img/facebook.png" alt="" className="social__pict" /></a>
                            </li>
                            <li className="social__item">
                                <a href="#" className="social__link"><img src="./img/google+.png" alt="" className="social__pict" /></a>
                            </li>
                            <li className="social__item">
                                <a href="#" className="social__link"><img src="./img/twitter.png" alt="" className="social__pict" /></a>
                            </li>
                            <li className="social__item">
                                <a href="#" className="social__link"><img src="./img/linkedin.png" alt="" className="social__pict" /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="author">
                        <img src="./img/photo(2).png" alt="" className="author__image" />
                        <h3 className="author__name">Scolara Visari</h3>
                        <p className="author__text">Quisque luctus, quam eget molestie commodo, lacus purus cursus purus,
                            nec rutrum tellus dolor id lorem.</p>
                        <ul className="social">
                            <li className="social__item">
                                <a href="#" className="social__link"><img src="./img/facebook.png" alt="" className="social__pict" /></a>
                            </li>
                            <li className="social__item">
                                <a href="#" className="social__link"><img src="./img/google+.png" alt="" className="social__pict" /></a>
                            </li>
                            <li className="social__item">
                                <a href="#" className="social__link"><img src="./img/twitter.png" alt="" className="social__pict" /></a>
                            </li>
                            <li className="social__item">
                                <a href="#" className="social__link"><img src="./img/linkedin.png" alt="" className="social__pict" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;