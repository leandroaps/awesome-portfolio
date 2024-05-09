interface Props {
    content: string;
}

const AboutTitle = ({ content }: Props) => {
    return <h1>{content}</h1>;
};

export default AboutTitle;
