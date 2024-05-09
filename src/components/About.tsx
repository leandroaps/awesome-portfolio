import React from 'react';
import { AboutContextType, IAbout } from '../@types/about';
import { PortfolioContext } from '../context';
import Hello from './Hello';
import Skills from './Skills';

type Props = {
    about: IAbout;
};

const About: React.FC<Props> = () => {
    const { about } = React.useContext(PortfolioContext) as AboutContextType;

    return (
        <section id="about" className="s-about target-section">
            <div className="row narrow section-intro has-bottom-sep">
                <div className="col-full text-center">
                    <h3>{about.title}</h3>
                    <h1>{about.title}</h1>
                    <p className="lead">{about.lead}</p>
                </div>
            </div>
            <div className="row about-content">
                <Hello />
                <Skills />
            </div>

            <div className="row about-content about-content--buttons">
                <div className="col-six tab-full left">
                    <a href="../assets/pdf/Profile.pdf" className="btn btn--primary full-width" download>
                        {about.download}
                    </a>
                </div>
            </div>

            <div className="row about-content about-content--timeline">
                <div className="col-full text-center">
                    <h3> {about.myWork}</h3>
                </div>

                <div className="col-six tab-full left">
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
                </div>

                <div className="col-six tab-full right">
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
                </div>
            </div>
        </section>
    );
};

export default About;
