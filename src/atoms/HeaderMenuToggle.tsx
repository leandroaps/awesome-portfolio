interface Props {
    content: string;
}

const HeaderMenuToggle = ({ content }: Props) => {
    return (
        <a className="header-menu-toggle" href="#0">
            <span>{content}</span>
        </a>
    );
};

export default HeaderMenuToggle;
