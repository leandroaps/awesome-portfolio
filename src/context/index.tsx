import React from 'react';
import { IAbout } from '../@types/about';
import { IContact } from '../@types/contact';
import { AppContextType } from '../@types/context';
import { IHeader } from '../@types/header';
import ABOUT_DATA from '../data/about.json';
import CONTACT_DATA from '../data/contact.json';
import HEADER_DATA from '../data/header.json';
import SKILLS_DATA from '../data/skills.json';

import { ISkills } from '../@types/skills';

export const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [about] = React.useState<IAbout>(ABOUT_DATA);
    const [contact] = React.useState<IContact>(CONTACT_DATA);
    const [header, setActive] = React.useState<IHeader>(HEADER_DATA);
    const [skills] = React.useState<ISkills>(SKILLS_DATA);

    return <AppContext.Provider value={{ about, header, contact, skills, setActive }}>{children}</AppContext.Provider>;
};

export default AppProvider;
