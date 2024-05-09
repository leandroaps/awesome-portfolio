import React from 'react';
import { AboutContextType } from '../@types/about';
import AboutLead from '../atoms/AboutLead';
import AboutSubTitle from '../atoms/AboutSubTitle';
import AboutTitle from '../atoms/AboutTitle';
import { PortfolioContext } from '../context';
import ColFull from '../templates/ColFull';
import ColSixTabFullLeft from '../templates/ColSixTabFullLeft';
import ColSixTabFullRight from '../templates/ColSixTabFullRight';
import Section from '../templates/Section';
import Hello from './Hello';
import Skills from './Skills';

const About = () => {
    const { about } = React.useContext(PortfolioContext) as AboutContextType;

    return (
        <Section id="about" className="s-about">
            <div className="row narrow section-intro has-bottom-sep">
                <ColFull>
                    <AboutSubTitle content={about.subtitle} />
                    <AboutTitle content={about.title} />
                    <AboutLead content={about.lead} />
                </ColFull>
            </div>
            <div className="row about-content">
                <Hello />
                <Skills />
            </div>

            <div className="row about-content about-content--buttons">
                <ColSixTabFullLeft>
                    <a href="../assets/pdf/Profile.pdf" className="btn btn--primary full-width" download>
                        {about.download}
                    </a>
                </ColSixTabFullLeft>
            </div>

            <div className="row about-content about-content--timeline">
                <div className="col-full text-center">
                    <h3> {about.myWork}</h3>
                </div>

                <ColSixTabFullLeft>
                    <div className="timeline">
                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <p className="timeline__timeframe">July 2015 - Present</p>
                                <h3>Awesome Studio</h3>
                                <h5>Lead Designer</h5>
                            </div>
                            <div className="timeline__desc">
                                <p>{about.lorem}</p>
                            </div>
                        </div>

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <p className="timeline__timeframe">July 2014 - June 2015</p>
                                <h3>Super Cool Agency</h3>
                                <h5>Front-end Developer</h5>
                            </div>
                            <div className="timeline__desc">
                                <p>{about.lorem}</p>
                            </div>
                        </div>
                    </div>
                </ColSixTabFullLeft>

                <ColSixTabFullRight>
                    <div className="timeline">
                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <p className="timeline__timeframe">July 2012 - June 2014</p>
                                <h3>Great Design Studio</h3>
                                <h5>Web Designer</h5>
                            </div>
                            <div className="timeline__desc">
                                <p>{about.lorem}</p>
                            </div>
                        </div>

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <p className="timeline__timeframe">July 2011 - June 2012</p>
                                <h3>Epic Design Agency</h3>
                                <h5>Web Designer</h5>
                            </div>
                            <div className="timeline__desc">
                                <p>{about.lorem}</p>
                            </div>
                        </div>
                    </div>
                </ColSixTabFullRight>
            </div>
        </Section>
    );
};

export default About;
