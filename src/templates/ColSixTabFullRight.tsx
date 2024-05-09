import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

function ColSixTabFullRight({ children }: Props) {
    return <div className="col-six tab-full right">{children}</div>;
}

export default ColSixTabFullRight;
