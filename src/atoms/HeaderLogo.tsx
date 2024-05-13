import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

function HeaderLogo({ children }: Props) {
    return <div className="header-logo">{children}</div>;
}

export default HeaderLogo;
