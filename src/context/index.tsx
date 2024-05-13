import React from 'react';
import { AppContextType, IAbout, IContact, IHeader } from '../@types/about';

export const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [about] = React.useState<IAbout>({
        title: 'More About Me me',
        lead: 'Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.',
        subtitle: 'About',
        download: 'Download My CV',
        myWork: 'My Work Experience.',
        lorem: 'Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.'
    });

    const [header] = React.useState<IHeader>({
        title: 'leandroaps',
        nav: [
            {
                active: true,
                content: 'Home',
                href: 'home',
                title: 'Home',
                id: 0
            },
            {
                active: false,
                content: 'About',
                href: 'about',
                title: 'About',
                id: 1
            },
            {
                active: false,
                content: 'Works',
                href: 'works',
                title: 'Works',
                id: 2
            },
            {
                active: false,
                content: 'Blog',
                href: 'blog',
                title: 'Blog',
                id: 3
            },
            {
                active: false,
                content: 'Contact',
                href: 'contact',
                title: 'Contact',
                id: 4
            }
        ]
    });

    const [contact] = React.useState<IContact>({
        title: 'Say Hello.',
        subtitle: 'Contact'
    });

    return <AppContext.Provider value={{ about, header, contact }}>{children}</AppContext.Provider>;
};

export default AppProvider;
