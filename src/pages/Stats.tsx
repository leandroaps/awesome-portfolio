import Title from '../atoms/Title';
import Section from '../templates/Section';

function Stats() {
    return (
        <Section id="stats" className="s-stats">
            <div className="row block-1-4 block-tab-1-2 block-mob-full stats">
                <div className="col-block stats__col">
                    <div className="stats__count">128</div>
                    <Title level="h4" content="Awards Received" />
                </div>
                <div className="col-block stats__col">
                    <div className="stats__count">1500</div>
                    <Title level="h4" content="Cups of Coffee" />
                </div>
                <div className="col-block stats__col stats__col--highlight">
                    <div className="stats__upsign">
                        <a href="#">
                            <i className="im im-arrow-up" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="stats__count">110</div>
                    <Title level="h4" content="Projects Completed" />
                </div>
                <div className="col-block stats__col">
                    <div className="stats__count">101</div>
                    <Title level="h4" content="Happy Clients" />
                </div>
            </div>
        </Section>
    );
}

export default Stats;
