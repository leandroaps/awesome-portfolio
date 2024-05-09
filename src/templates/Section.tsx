import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    id: string;
    className: string;
}

function Section({ children, id, className }: Props) {
    return (
        <section id={id} className={`${className} target-section`}>
            {children}
        </section>
    );
}

export default Section;
