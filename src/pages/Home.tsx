import Title from '../atoms/Title';

import HeroImage from '../assets/images/hero-bg.jpg';

function Home() {
    return (
        <section
            id="home"
            className="s-home page-hero target-section"
            data-parallax="scroll"
            data-image-src={HeroImage}
            data-natural-width="3000"
            data-natural-height="2000"
            data-position-y="center"
        >
            <div className="overlay"></div>
            <div className="shadow-overlay"></div>

            <div className="home-content">
                <div className="row home-content__main">
                    <Title level="h3" content="Hello There" />
                    <Title level="h1" content="I am Leandro A. Siqueira." />
                    <h2>
                        I am a Front-end Developer focused on React <br />
                        based in São Paulo, Brazil.
                    </h2>

                    <div className="home-content__buttons">
                        <a href="#works" className="smoothscroll btn btn--stroke">
                            Latest Projects
                        </a>
                        <a href="#about" className="smoothscroll btn btn--stroke">
                            More About Me
                        </a>
                    </div>

                    <div className="home-content__scroll">
                        <a href="#about" className="scroll-link smoothscroll">
                            <span>Scroll Down</span>
                        </a>
                    </div>
                </div>
            </div>

            <ul className="home-social">
                <li>
                    <a href="https://linkedin.com/in/leandroaps">
                        <i className="im im-linkedin" aria-hidden="true"></i>
                        <span>LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/leandroaps">
                        <i className="im im-github" aria-hidden="true"></i>
                        <span>Github</span>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Home;
