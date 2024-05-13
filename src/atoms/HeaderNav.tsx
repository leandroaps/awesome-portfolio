import React from 'react';
import { AppContextType, IHeaderNav } from '../@types/about';
import { AppContext } from '../context';
import HeaderNavLIstItem from './HeaderNavLIstItem';

const HeaderNav = () => {
    const { header } = React.useContext(AppContext) as AppContextType;

    return (
        <ul className="header-nav">
            {header.nav.map((navItem: IHeaderNav) => (
                <HeaderNavLIstItem
                    content={navItem.content}
                    href={navItem.href}
                    id={navItem.id}
                    key={navItem.href}
                    title={navItem.title}
                    active={navItem.active}
                />
            ))}
        </ul>
    );
};

export default HeaderNav;
