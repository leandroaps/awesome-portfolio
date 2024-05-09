import ColSixTabFullRight from '../templates/ColSixTabFullRight';

function Skills() {
    return (
        <ColSixTabFullRight>
            <h3>I've Got Some skills.</h3>

            <ul className="skill-bars">
                <li>
                    <div className="progress percent90">
                        <span>90%</span>
                    </div>
                    <strong>ReactJS</strong>
                </li>
                <li>
                    <div className="progress percent80">
                        <span>80%</span>
                    </div>
                    <strong>Javascript</strong>
                </li>
                <li>
                    <div className="progress percent50">
                        <span>50%</span>
                    </div>
                    <strong>TypeScript</strong>
                </li>
                <li>
                    <div className="progress percent90">
                        <span>80%</span>
                    </div>
                    <strong>Agile and Management</strong>
                </li>
                <li>
                    <div className="progress percent50">
                        <span>70%</span>
                    </div>
                    <strong>AWS</strong>
                </li>
                <li>
                    <div className="progress percent60">
                        <span>60%</span>
                    </div>
                    <strong>Angular</strong>
                </li>
            </ul>
        </ColSixTabFullRight>
    );
}

export default Skills;
