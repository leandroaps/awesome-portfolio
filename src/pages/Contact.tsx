import React from 'react';
import { AppContextType } from '../@types/context';
import Title from '../atoms/Title';
import { AppContext } from '../context';
import RowNarrow from '../templates/RowNarrow';
import Section from '../templates/Section';

function Contacts() {
    const { contact } = React.useContext(AppContext) as AppContextType;

    return (
        <>
            <Section id="contact" className="s-contact">
                <div className="overlay"></div>

                <RowNarrow hasBottomSep={false}>
                    <div className="col-full">
                        <Title level="h3" content={contact.subtitle} />
                        <Title level="h1" content={contact.title} />
                    </div>
                </RowNarrow>

                <div className="row contact__main">
                    <div className="col-eight tab-full contact__form">
                        <form
                            name="contactForm"
                            id="contactForm"
                            method="post"
                            action="https//:leandroaps.com.br/"
                            noValidate={true}
                        >
                            <fieldset>
                                <div className="form-field">
                                    <input
                                        name="contactName"
                                        type="text"
                                        id="contactName"
                                        placeholder="Name"
                                        value=""
                                        minLength={2}
                                        required
                                        aria-required="true"
                                        className="full-width"
                                        onChange={() => alert()}
                                    />
                                </div>
                                <div className="form-field">
                                    <input
                                        name="contactEmail"
                                        type="email"
                                        id="contactEmail"
                                        placeholder="Email"
                                        value=""
                                        required
                                        aria-required="true"
                                        className="full-width"
                                        onChange={() => alert()}
                                    />
                                </div>
                                <div className="form-field">
                                    <input
                                        name="contactSubject"
                                        type="text"
                                        id="contactSubject"
                                        placeholder="Subject"
                                        value=""
                                        className="full-width"
                                        onChange={() => alert()}
                                    />
                                </div>
                                <div className="form-field">
                                    <textarea
                                        name="contactMessage"
                                        id="contactMessage"
                                        placeholder="message"
                                        rows={10}
                                        cols={50}
                                        required
                                        aria-required="true"
                                        className="full-width"
                                        onChange={() => alert()}
                                    ></textarea>
                                </div>
                                <div className="form-field">
                                    <button className="full-width btn--primary">Submit</button>
                                    <div className="submit-loader">
                                        <div className="text-loader">Sending...</div>
                                        <div className="s-loader">
                                            <div className="bounce1"></div>
                                            <div className="bounce2"></div>
                                            <div className="bounce3"></div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                        <div className="message-warning">Something went wrong. Please try again.</div>
                        <div className="message-success">
                            Your message was sent, thank you!
                            <br />
                        </div>
                    </div>
                    <div className="col-four tab-full contact__infos">
                        <Title level="h4" content="Phone" className="h06" />
                        <p>Mobile: (+55) 19 99111 2239</p>

                        <Title level="h4" content="Email" className="h06" />

                        <p>leandroaps@gmail.com</p>

                        <Title level="h4" content="Address" className="h06" />

                        <p>
                            Campinas - São Paulo
                            <br />
                            Brazil
                        </p>
                    </div>
                </div>
            </Section>
        </>
    );
}

export default Contacts;
