import React, { useContext, useState } from 'react';

const CurrentContext = React.createContext();

const NavItem = ({ text }) => {
    const [current, changeCurrent] = useContext(CurrentContext);
    const navigationClass = "navigation__link" + (current == text ? " navigation__link--current" : "");

    return (
    <li key={"key" + text} className="navigation__item">
        <a  href={`#${text.toLowerCase()}`} className={ navigationClass } onClick={(e) => changeCurrent(e)}>
            {text}
        </a>
    </li>
    )
};

const Navigation = () => {
    
    const [current, setCurrent] = useState("Home");
    const changeCurrent = (e) => {
        setCurrent(e.target.innerHTML || e.target.innerText);
    };

    return (
        <div className="navigation">
            <CurrentContext.Provider value={[current, changeCurrent]}>
            <nav>
                <ul className="navigation__list">
                    <NavItem text="Home" />
                    <NavItem text="Services" />
                    <NavItem text="Portfolio" />
                    <NavItem text="About" />
                    <NavItem text="Contact" />
                </ul>
            </nav>
            </CurrentContext.Provider>
        </div>
    )
};

export default Navigation;