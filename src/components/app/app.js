import { Fragment } from 'react';

import About from '../about';
import Footer from '../footer';
import Header from '../header';
import Portfolio from '../portfolio';
import Quote from '../quote';
import Services from '../services';
import Slider from '../slider';

const App = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <Slider />
                <Services />
                <Portfolio />
                <About />
                <Quote />
            </main>
            <Footer />
        </Fragment>
    )
};

export default App;