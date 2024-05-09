import SkillsBars from '../atoms/SkillsBars';
import SkillsTitle from '../atoms/SkillsTitle';
import ColSixTabFullRight from '../templates/ColSixTabFullRight';

function Skills() {
    return (
        <ColSixTabFullRight>
            <SkillsTitle />
            <SkillsBars />
        </ColSixTabFullRight>
    );
}

export default Skills;
