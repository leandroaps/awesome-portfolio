import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

function HeaderContent({ children }: Props) {
    return <div className="s-header">{children}</div>;
}

export default HeaderContent;
