import React from 'react';
import { AppContextType } from '../@types/context';
import SkillsBars from '../atoms/SkillsBars';
import Title from '../atoms/Title';
import { AppContext } from '../context';
import ColSixTabFullRight from '../templates/ColSixTabFullRight';

function Skills() {
    const { skills } = React.useContext(AppContext) as AppContextType;

    return (
        <ColSixTabFullRight>
            <Title level="h3" content={skills.subtitle} />
            <SkillsBars />
        </ColSixTabFullRight>
    );
}

export default Skills;
