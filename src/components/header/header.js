import React from 'react';
import ReactDOM, { render } from 'react-dom';

const Header = () => {
    return (
        <header>
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>
            <div class="nav-background">
                &nbsp;
            </div>
            <div class="header">
                <div class="header__title">
                    <h1 class="heading-primary">Singolo</h1>
                </div>
                <div class="navigation">
                    <div class="navigation__background">&nbsp;</div>

                    <nav>
                        <ul class="navigation__list">
                            <li class="navigation__item"><a href="#home" class="navigation__link navigation__link--current">Home</a></li>
                            <li class="navigation__item"><a href="#services" class="navigation__link">Services</a></li>
                            <li class="navigation__item"><a href="#portfolio" class="navigation__link">Portfolio</a></li>
                            <li class="navigation__item"><a href="#about" class="navigation__link">About</a></li>
                            <li class="navigation__item"><a href="#contact" class="navigation__link">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
};

export default Header;