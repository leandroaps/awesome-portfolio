import React from 'react';
import { AppContextType } from '../@types/context';
import AboutDownloadProfile from '../atoms/AboutDownloadProfile';
import AboutLead from '../atoms/AboutLead';
import Title from '../atoms/Title';
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
                    <Title level="h3" content={about.subtitle} />
                    <Title level="h1" content={about.title} />
                    <AboutLead content={about.lead} />
                </ColFull>
            </RowNarrow>
            <div className="row about-content">
                <Hello />
                <Skills />
            </div>

            <RowContent section={'about'} classSection={'buttons'}>
                <ColFull>
                    <AboutDownloadProfile content={about.download} />
                </ColFull>
            </RowContent>

            <RowContent classSection={'timeline'}>
                <div className="col-full text-center">
                    <Title level="h3" content={about.myWork} />
                </div>

                <ColSixTabFullLeft>
                    <div className="timeline">
                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <p className="timeline__timeframe">July 2015 - Present</p>
                                <Title level="h3" content="Awesome Studio" />
                                <Title level="h5" content="Lead Designer" />
                            </div>
                            <div className="timeline__desc">
                                <p>{about.lorem}</p>
                                <p>{about.lorem}</p>
                                <p>{about.lorem}</p>
                            </div>
                        </div>

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <p className="timeline__timeframe">July 2014 - June 2015</p>
                                <Title level="h3" content="Super Cool Agency" />
                                <Title level="h4" content="Front-end Developer" />
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
                                <Title level="h3" content="Great Design Studio" />
                                <Title level="h4" content="Web Designer" />
                            </div>
                            <div className="timeline__desc">
                                <p>{about.lorem}</p>
                                <p>{about.lorem}</p>
                                <p>{about.lorem}</p>
                            </div>
                        </div>

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <p className="timeline__timeframe">July 2011 - June 2012</p>
                                <Title level="h3" content="Epic Design Agency" />
                                <Title level="h4" content="Web Designer" />
                            </div>
                            <div className="timeline__desc">
                                <p>{about.lorem}</p>
                                <p>{about.lorem}</p>
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
