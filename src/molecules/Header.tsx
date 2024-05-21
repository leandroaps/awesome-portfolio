import React from 'react';
import { AppContextType } from '../@types/context';
import HeaderContent from '../atoms/HeaderContent';
import HeaderLogo from '../atoms/HeaderLogo';
import HeaderMenuToggle from '../atoms/HeaderMenuToggle';
import HeaderNav from '../atoms/HeaderNav';
import HeaderNavWrap from '../atoms/HeaderNavWrap';
import SiteLogo from '../atoms/SiteLogo';
import { AppContext } from '../context';

function Header() {
    const { header } = React.useContext(AppContext) as AppContextType;

    return (
        <HeaderContent>
            <HeaderLogo>
                <SiteLogo content={header.title} href={'index.html'} />
            </HeaderLogo>

            <HeaderNavWrap>
                <HeaderNav />
            </HeaderNavWrap>

            <HeaderMenuToggle content="menu" />
        </HeaderContent>
    );
}

export default Header;
