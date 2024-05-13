interface Props {
    content: string;
    href: string;
}

const SiteLogo = ({ content, href }: Props) => {
    return (
        <a className="site-logo" href={href}>
            {content}
        </a>
    );
};

export default SiteLogo;
