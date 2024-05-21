// @types.context.ts
import IAbout from './about';
import IContact from './contact';
import IHeader from './header';
import { ISkills } from './skills';

export type AppContextType = {
    about: IAbout;
    header: IHeader;
    contact: IContact;
    skills: ISkills;
    setActive: React.Dispatch<React.SetStateAction<IHeader>>;
};
