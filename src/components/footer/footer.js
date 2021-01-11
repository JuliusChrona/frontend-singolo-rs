import React from 'react';
import ReactDOM, { render } from 'react-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; Copyright 2021</p>
            <ul className="footer__social social">
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
        </footer>
    )
};

export default Footer;