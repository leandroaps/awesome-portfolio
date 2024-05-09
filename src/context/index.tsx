import React from 'react';
import { AboutContextType, IAbout } from '../@types/about';

export const PortfolioContext = React.createContext<AboutContextType | null>(null);

const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [about] = React.useState<IAbout>({
        title: 'More About Me me',
        lead: 'Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.',
        subtitle: 'About',
        download: 'Download My CV',
        myWork: 'My Work Experience.',
        lorem: 'Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.'
    });

    return <PortfolioContext.Provider value={{ about }}>{children}</PortfolioContext.Provider>;
};

export default PortfolioProvider;
