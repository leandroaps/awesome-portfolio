import { IHeaderNav } from '../@types/header';

const HeaderNavItemsContent = ({ content, href, title }: IHeaderNav) => {
    return (
        <a className="smoothscroll" href={`#${href}`} title={title}>
            {content}
        </a>
    );
};

export default HeaderNavItemsContent;
