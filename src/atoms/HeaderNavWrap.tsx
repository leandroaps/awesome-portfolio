import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const HeaderNavWrap = ({ children }: Props) => {
    return <nav className="header-nav-wrap">{children}</nav>;
};

export default HeaderNavWrap;
