interface Props {
    content: string;
    className?: string;
    level: string;
}

const Title = ({ content, level }: Props) => {
    switch (level) {
        case 'h1':
            return <h1>{content}</h1>;
        case 'h2':
            return <h2>{content}</h2>;
        case 'h3':
            return <h3>{content}</h3>;
        case 'h4':
            return <h4>{content}</h4>;
        case 'h5':
            return <h5>{content}</h5>;
        default:
            break;
    }
};

export default Title;
