import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    classSection?: string;
    section?: string;
}

function RowContent({ children, classSection, section }: Props) {
    return <div className={`row ${section}-content ${section}-content--${classSection}`}>{children}</div>;
}

export default RowContent;
