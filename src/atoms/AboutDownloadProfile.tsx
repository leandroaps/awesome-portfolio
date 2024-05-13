interface Props {
    content: string;
}

const AboutDownloadProfile = ({ content }: Props) => {
    return (
        <a href="../assets/pdf/Profile.pdf" className="btn btn--primary full-width" download>
            {content}
        </a>
    );
};

export default AboutDownloadProfile;
