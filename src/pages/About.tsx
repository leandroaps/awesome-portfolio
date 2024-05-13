import React from 'react';
import { AppContextType } from '../@types/about';
import AboutDownloadProfile from '../atoms/AboutDownloadProfile';
import AboutLead from '../atoms/AboutLead';
import AboutSubTitle from '../atoms/AboutSubTitle';
import AboutTitle from '../atoms/AboutTitle';
import { AppContext } from '../context';
import ColFull from '../templates/ColFull';
import ColSixTabFullLeft from '../templates/ColSixTabFullLeft';
import ColSixTabFullRight from '../templates/ColSixTabFullRight';
import RowContent from '../templates/RowContent';
import RowNarrow from '../templates/RowNarrow';
import Section from '../templates/Section';
import Hello from './Hello';
import Skills from './Skills';

const About = () => {
    const { about } = React.useContext(AppContext) as AppContextType;

    return (
        <Section id="about" className="s-about">
            <RowNarrow hasBottomSep={true}>
                <ColFull>
                    <AboutSubTitle content={about.subtitle} />
                    <AboutTitle content={about.title} />
                    <AboutLead content={about.lead} />
                </ColFull>
            </RowNarrow>
            <div className="row about-content">
                <Hello />
                <Skills />
            </div>

            <RowContent section={'about'} classSection={'buttons'}>
                <ColSixTabFullLeft>
                    <AboutDownloadProfile content={about.download} />
                </ColSixTabFullLeft>
            </RowContent>

            <RowContent classSection={'timeline'}>
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
            </RowContent>
        </Section>
    );
};

export default About;
