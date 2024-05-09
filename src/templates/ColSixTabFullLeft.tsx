import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

function ColSixTabFullLeft({ children }: Props) {
    return <div className="col-six tab-full left">{children}</div>;
}

export default ColSixTabFullLeft;
