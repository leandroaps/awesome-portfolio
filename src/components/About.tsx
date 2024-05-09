import Hello from './Hello';
import Skills from './Skills';

function About() {
    return (
        <section id="about" className="s-about target-section">
            <div className="row narrow section-intro has-bottom-sep">
                <div className="col-full text-center">
                    <h3>About</h3>
                    <h1>More About Me</h1>
                    <p className="lead">
                        Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea dolore irure esse Duis
                        nulla sint fugiat cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum
                        non est in officia.
                    </p>
                </div>
            </div>
            <div className="row about-content">
                <Hello />
                <Skills />
            </div>

            <div className="row about-content about-content--buttons">
                <div className="col-six tab-full left">
                    <a href="../assets/pdf/Profile.pdf" className="btn btn--primary full-width" download>
                        Download My CV
                    </a>
                </div>
                <div className="col-six tab-full right">
                    <a href="#0" className="btn full-width">
                        Hire Me Now
                    </a>
                </div>
            </div>

            <div className="row about-content about-content--timeline">
                <div className="col-full text-center">
                    <h3>My Work Experience.</h3>
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
                                <p>
                                    Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi
                                    cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident
                                    cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est
                                    occaecat nisi.
                                </p>
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
                                <p>
                                    Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi
                                    cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident
                                    cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est
                                    occaecat nisi incididunt.
                                </p>
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
                                <p>
                                    Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi
                                    cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident
                                    cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est
                                    occaecat nisi.
                                </p>
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
                                <p>
                                    Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi
                                    cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident
                                    cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est
                                    occaecat nisi incididunt.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
