import Title from '../atoms/Title';
import RowNarrow from '../templates/RowNarrow';
import Section from '../templates/Section';

function Works() {
    return (
        <Section id="works" className="s-works">
            <RowNarrow hasBottomSep={true}>
                <div className="col-full">
                    <Title level="h3" content="Portfolio" />
                    <Title level="h1" content="See My Latest Projects" />

                    <p className="lead">
                        Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea dolore irure esse Duis
                        nulla sint fugiat cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum
                        non est in officia.
                    </p>
                </div>
            </RowNarrow>

            <div className="row masonry-wrap">
                <div className="masonry">
                    <div className="masonry__brick">
                        <div className="item-folio">
                            <div className="item-folio__thumb">
                                <a
                                    href="../assets/images/portfolio/gallery/g-beetle.jpg"
                                    className="thumb-link"
                                    title="The Beetle Car"
                                    data-size="1050x700"
                                >
                                    <img
                                        src="../assets/images/portfolio/beetle.jpg"
                                        srcSet="../assets/images/portfolio/beetle.jpg, ../assets/images/portfolio/beetle@2x.jpg"
                                        alt="The Beetle"
                                    />
                                    <span className="shadow-overlay"></span>
                                </a>
                            </div>

                            <div className="item-folio__text">
                                <Title level="h3" content="The Beetle" className="item-folio__title" />
                                <p className="item-folio__cat">Web Development</p>
                            </div>

                            <a
                                href="https://www.behance.net/"
                                className="item-folio__project-link"
                                title="Project link"
                            >
                                <i className="im im-link"></i>
                            </a>

                            <div className="item-folio__caption">
                                <p>
                                    Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto
                                    quo.Unde dolorem corrupti neque nisi.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="masonry__brick">
                        <div className="item-folio">
                            <div className="item-folio__thumb">
                                <a
                                    href="../assets/images/portfolio/gallery/g-lighthouse.jpg"
                                    className="thumb-link"
                                    title="Lighthouse"
                                    data-size="1050x700"
                                >
                                    <img
                                        src="../assets/images/portfolio/lighthouse.jpg"
                                        srcSet="../assets/images/portfolio/lighthouse.jpg, ../assets/images/portfolio/lighthouse@2x.jpg"
                                        alt="Lighthouse"
                                    />
                                    <span className="shadow-overlay"></span>
                                </a>
                            </div>

                            <div className="item-folio__text">
                                <Title level="h3" content="Lighthouse" className="item-folio__title" />
                                <p className="item-folio__cat">Web Design</p>
                            </div>

                            <a
                                href="https://www.behance.net/"
                                className="item-folio__project-link"
                                title="Project link"
                            >
                                <i className="im im-link"></i>
                            </a>

                            <div className="item-folio__caption">
                                <p>
                                    Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto
                                    quo.Unde dolorem corrupti neque nisi.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="masonry__brick">
                        <div className="item-folio">
                            <div className="item-folio__thumb">
                                <a
                                    href="../assets/images/portfolio/gallery/g-salad.jpg"
                                    className="thumb-link"
                                    data-size="1050x700"
                                >
                                    <img
                                        src="../assets/images/portfolio/salad.jpg"
                                        srcSet="../assets/images/portfolio/salad.jpg, ../assets/images/portfolio/salad@2x.jpg"
                                        alt="Salad"
                                    />
                                    <span className="shadow-overlay"></span>
                                </a>
                            </div>

                            <div className="item-folio__text">
                                <Title level="h3" content="Salad" className="item-folio__title" />

                                <p className="item-folio__cat">Branding</p>
                            </div>

                            <a
                                href="https://www.behance.net/"
                                className="item-folio__project-link"
                                title="Project link"
                            >
                                <i className="im im-link"></i>
                            </a>

                            <span className="item-folio__caption">
                                <p>
                                    Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto
                                    quo.Unde dolorem corrupti neque nisi.
                                </p>
                            </span>
                        </div>
                    </div>

                    <div className="masonry__brick">
                        <div className="item-folio">
                            <div className="item-folio__thumb">
                                <a
                                    href="../assets/images/portfolio/gallery/g-woodcraft.jpg"
                                    className="thumb-link"
                                    data-size="1050x700"
                                >
                                    <img
                                        src="../assets/images/portfolio/woodcraft.jpg"
                                        srcSet="../assets/images/portfolio/woodcraft.jpg, ../assets/images/portfolio/woodcraft@2x.jpg"
                                        alt="Woodcraft"
                                    />
                                    <span className="shadow-overlay"></span>
                                </a>
                            </div>

                            <div className="item-folio__text">
                                <Title level="h3" content="Woodcraft" className="item-folio__title" />

                                <p className="item-folio__cat">Branding</p>
                            </div>

                            <a
                                href="https://www.behance.net/"
                                className="item-folio__project-link"
                                title="Project link"
                            >
                                <i className="im im-link"></i>
                            </a>

                            <span className="item-folio__caption">
                                <p>
                                    Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto
                                    quo.Unde dolorem corrupti neque nisi.
                                </p>
                            </span>
                        </div>
                    </div>

                    <div className="masonry__brick">
                        <div className="item-folio">
                            <div className="item-folio__thumb">
                                <a
                                    href="../assets/images/portfolio/gallery/g-skaterboy.jpg"
                                    className="thumb-link"
                                    data-size="1050x700"
                                >
                                    <img
                                        src="../assets/images/portfolio/skaterboy.jpg"
                                        srcSet="../assets/images/portfolio/skaterboy.jpg, ../assets/images/portfolio/skaterboy@2x.jpg"
                                        alt="Skaterboy"
                                    />
                                    <span className="shadow-overlay"></span>
                                </a>
                            </div>

                            <div className="item-folio__text">
                                <Title level="h3" content="Skaterboy" className="item-folio__title" />

                                <p className="item-folio__cat">Web Development</p>
                            </div>

                            <a
                                href="https://www.behance.net/"
                                className="item-folio__project-link"
                                title="Project link"
                            >
                                <i className="im im-link"></i>
                            </a>

                            <span className="item-folio__caption">
                                <p>
                                    Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto
                                    quo.Unde dolorem corrupti neque nisi.
                                </p>
                            </span>
                        </div>
                    </div>

                    <div className="masonry__brick">
                        <div className="item-folio">
                            <div className="item-folio__thumb">
                                <a
                                    href="../assets/images/portfolio/gallery/g-minimalismo.jpg"
                                    className="thumb-link"
                                    data-size="1050x700"
                                >
                                    <img
                                        src="../assets/images/portfolio/minimalismo.jpg"
                                        srcSet="../assets/images/portfolio/minimalismo.jpg, ../assets/images/portfolio/minimalismo@2x.jpg"
                                        alt="Minimalismo"
                                    />
                                    <span className="shadow-overlay"></span>
                                </a>
                            </div>

                            <div className="item-folio__text">
                                <Title level="h3" content="Minimalismo" className="item-folio__title" />

                                <p className="item-folio__cat">Web Design</p>
                            </div>

                            <a
                                href="https://www.behance.net/"
                                className="item-folio__project-link"
                                title="Project link"
                            >
                                <i className="im im-link"></i>
                            </a>

                            <span className="item-folio__caption">
                                <p>
                                    Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto
                                    quo.Unde dolorem corrupti neque nisi.
                                </p>
                            </span>
                        </div>
                    </div>

                    <div className="masonry__brick">
                        <div className="item-folio">
                            <div className="item-folio__thumb">
                                <a
                                    href="../assets/images/portfolio/gallery/g-liberty.jpg"
                                    className="thumb-link"
                                    data-size="1050x700"
                                >
                                    <img
                                        src="../assets/images/portfolio/liberty.jpg"
                                        srcSet="../assets/images/portfolio/liberty.jpg, ../assets/images/portfolio/liberty@2x.jpg"
                                        alt="Liberty"
                                    />
                                    <span className="shadow-overlay"></span>
                                </a>
                            </div>

                            <div className="item-folio__text">
                                <Title level="h3" content="Liberty" className="item-folio__title" />

                                <p className="item-folio__cat">Branding</p>
                            </div>

                            <a
                                href="https://www.behance.net/"
                                className="item-folio__project-link"
                                title="Project link"
                            >
                                <i className="im im-link"></i>
                            </a>

                            <span className="item-folio__caption">
                                <p>
                                    Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto
                                    quo.Unde dolorem corrupti neque nisi.
                                </p>
                            </span>
                        </div>
                    </div>

                    <div className="masonry__brick">
                        <div className="item-folio">
                            <div className="item-folio__thumb">
                                <a
                                    href="../assets/images/portfolio/gallery/g-shutterbug.jpg"
                                    className="thumb-link"
                                    data-size="1050x700"
                                >
                                    <img
                                        src="../assets/images/portfolio/shutterbug.jpg"
                                        srcSet="../assets/images/portfolio/shutterbug.jpg, ../assets/images/portfolio/shutterbug@2x.jpg"
                                        alt="Lady Shutterbug"
                                    />
                                    <span className="shadow-overlay"></span>
                                </a>
                            </div>

                            <div className="item-folio__text">
                                <Title level="h3" content="Lady Shutterbug" className="item-folio__title" />

                                <p className="item-folio__cat">Branding</p>
                            </div>

                            <a
                                href="https://www.behance.net/"
                                className="item-folio__project-link"
                                title="Project link"
                            >
                                <i className="im im-link"></i>
                            </a>

                            <span className="item-folio__caption">
                                <p>
                                    Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto
                                    quo.Unde dolorem corrupti neque nisi.
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Works;
