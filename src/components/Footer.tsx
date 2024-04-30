function Footer() {
    return (
        <footer>
            <div className="row">
                <div className="col-full">
                    <div className="footer-logo">
                        <a className="footer-site-logo" href="#0">
                            <img src="../assets/images/logo.png" alt="Homepage" />
                        </a>
                    </div>

                    <ul className="footer-social">
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
                </div>
            </div>

            <div className="row footer-bottom">
                <div className="col-twelve">
                    <div className="copyright">
                        <span>© Copyright Hola 2017</span>
                        <span>
                            Design by
                            <a href="https://www.styleshout.com/">styleshout</a>
                        </span>
                    </div>

                    <div className="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#top">
                            <i className="im im-arrow-up" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
