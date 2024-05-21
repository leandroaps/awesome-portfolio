import React, { ReactNode, useMemo, useState } from 'react';
import { IAbout } from '../@types/about';
import { IContact } from '../@types/contact';
import { AppContextType } from '../@types/context';
import { IHeader } from '../@types/header';
import { ISkills } from '../@types/skills';

import ABOUT_DATA from '../data/about.json';
import CONTACT_DATA from '../data/contact.json';
import HEADER_DATA from '../data/header.json';
import SKILLS_DATA from '../data/skills.json';

export const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [header, setHeader] = useState<IHeader>(HEADER_DATA);

    const about = useMemo(() => ABOUT_DATA as IAbout, []);
    const contact = useMemo(() => CONTACT_DATA as IContact, []);
    const skills = useMemo(() => SKILLS_DATA as ISkills, []);

    const value = useMemo(
        () => ({
            about,
            contact,
            header,
            skills,
            setHeader: setHeader
        }),
        [about, contact, header, skills]
    );

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
