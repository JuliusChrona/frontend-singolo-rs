import React from 'react';
import ReactDOM, { render } from 'react-dom';

const Quote = () => {
    return (
        <section className="section-quote" id="contact">
            <div className="quote">
                <div className="quote__info">
                    <h2 className="heading-secondary u-margin-bottom-little u-quote-text-color">Get a Quote</h2>
                    <p className="paragraph u-margin-bottom-small u-quote-text-color">  
                        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum. Duis mollis, non commodo
                        luctus, nisi, erat porttitot ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac
                        cursus commodo, tortor mauris condimentum nibh.
                    </p>
                </div>
                <div className="quote__form">
                    <form action="#" className="quote-form">
                        <input type="text" name="name"
                            id="" required placeholder="Name (Required)" className="quote-form__field" />
                        <input type="email" name="email"
                            id="" required placeholder="Email (Required)" className="quote-form__field" />
                        <input type="text" name="subject"
                            id="" placeholder="Subject" className="quote-form__field" />
                        <textarea name="description" id=""
                            placeholder="Describe your project in detail..." className="quote-form__field">
                        </textarea>
                        <div className="quote-form__btn quote-form__field">
                            <button type="submit" className="btn">
                                Subimt
                            </button>
                        </div>
                    </form>
                </div>
                <div className="quote__contacts">
                    <h3 className="heading-tertiary">
                        Contact Information
                    </h3>
                    <p className="paragraph u-quote-text-color u-margin-bottom-small">
                        Quisque hendrerit purus dapibus, ornare nibh vitae, viverra nibh. Fusce vitae aliquam tellus. Proin sit amet volutpay libero. Nulla sed nunc et tortor luctus faucibussqs. Morbi at aliquet turpis, et consequat felis.
                    </p>
                    
                    <p className="paragraph u-quote-text-color">
                        <img src="./img/location.png" alt="" className="quote__contacts-image" />
                        Elm St. 14/05 Lost City
                    </p>
                
                    <p className="paragraph u-quote-text-color">
                        <img src="./img/phone_2.png" alt="" className="quote__contacts-image" />
                        <a href="tel:035283318635">03528 331 86 35</a>
                    </p>
                    
                    <p className="paragraph u-quote-text-color">
                        <img src="./img/mail.png" alt="" className="quote__contacts-image" />
                        <a href="mailto:indafo@singolo.com">indafo@singolo.com</a>
                    </p>
                        
                </div>
            </div>
        </section>
    )
};

export default Quote;