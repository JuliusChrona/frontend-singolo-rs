import React, { useState, useContext } from 'react';

import Collage from '../collage';

const FilterContext = React.createContext();

const FilterItem = ({ text }) => {
    const [filter, changeFilter] = useContext(FilterContext);
    const filterClass = "filter__link" + (filter == text ? " filter__link--active" : "");

    return (
    <li key={"key" + text} className="filter__title">
        <a href="#" className={ filterClass } onClick={(e) => changeFilter(e)}>
            {text}
        </a>
    </li>
    )
};

const Portfolio = () => {
    const [filter, setFilter] = useState("All");
    const changeFilter = (e) => {
        e.preventDefault();
        setFilter(e.target.innerHTML || e.target.innerText);
    };

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
                <FilterContext.Provider value={[filter, changeFilter]}>
                    <ul className="filter u-margin-bottom-small">
                        <FilterItem text="All" />
                        <FilterItem text="Web Design" />
                        <FilterItem text="Graphic Design" />
                        <FilterItem text="Artwork" />
                    </ul>
                <Collage />
                </FilterContext.Provider>
            </div>
        </section>
    )
};

export default Portfolio;
export { FilterContext };