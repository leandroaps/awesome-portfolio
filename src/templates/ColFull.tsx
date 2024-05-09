import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

function ColFull({ children }: Props) {
    return <div className="col-full text-center">{children}</div>;
}

export default ColFull;
