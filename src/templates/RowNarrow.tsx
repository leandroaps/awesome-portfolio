import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    hasBottomSep: boolean;
}

function RowNarrow({ children, hasBottomSep }: Props) {
    return <div className={`row narrow target-section ${hasBottomSep ? 'has-bottom-sep' : ''}`}>{children}</div>;
}

export default RowNarrow;
