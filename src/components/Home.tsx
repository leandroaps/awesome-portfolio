function Home() {
    return (
        <section
            id="home"
            className="s-home page-hero target-section"
            data-parallax="scroll"
            data-image-src="../assets/images/hero-bg.jpg"
            data-natural-width="3000"
            data-natural-height="2000"
            data-position-y="center"
        >
            <div className="overlay"></div>
            <div className="shadow-overlay"></div>

            <div className="home-content">
                <div className="row home-content__main">
                    <h3>Hello There</h3>

                    <h1>
                        I am Jonathan Doe. <br />
                        I am a graphic & UI/UX <br />
                        designer based in Somewhere.
                    </h1>

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
