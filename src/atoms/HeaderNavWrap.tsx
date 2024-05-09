import React from 'react';
import { AboutContextType, IHeader } from '../@types/about';
import { PortfolioContext } from '../context';
import HeaderNavItem from './HeaderNavItems';

const HeaderNavWrap = () => {
    const { header } = React.useContext(PortfolioContext) as AboutContextType;

    return (
        <nav className="header-nav-wrap">
            <ul className="header-nav">
                {header.map((menu: IHeader) => (
                    <HeaderNavItem
                        active={menu.active}
                        content={menu.content}
                        href={menu.href}
                        id={menu.id}
                        key={menu.href}
                        title={menu.title}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default HeaderNavWrap;
