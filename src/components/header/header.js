import React from 'react';
import ReactDOM, { render } from 'react-dom';

import Navigation from '../navigation';

const Header = () => {
    return (
        <header>
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="nav-background">
                &nbsp;
            </div>
            <div className="header">
                <div className="header__title">
                    <h1 className="heading-primary">Singolo</h1>
                </div>
                <Navigation />
            </div>
        </header>
    )
};

export default Header;