interface Props {
    content: string;
}

const AboutLead = ({ content }: Props) => {
    return <p className="lead">{content}</p>;
};

export default AboutLead;
