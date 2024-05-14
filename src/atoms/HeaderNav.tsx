import React, { useContext } from 'react';
import { AppContext } from '../context';
import HeaderNavLIstItem from './HeaderNavLIstItem';

const Nav: React.FC = () => {
    const { header } = useContext(AppContext)!; // Using ! because we know AppContext will not be null
    const { nav } = header;

    return (
        <ul className="header-nav">
            {nav.map((navItem) => (
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

export default Nav;
