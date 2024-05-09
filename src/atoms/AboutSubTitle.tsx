interface Props {
    content: string;
}

const AboutSubTitle = ({ content }: Props) => {
    return <h3>{content}</h3>;
};

export default AboutSubTitle;
