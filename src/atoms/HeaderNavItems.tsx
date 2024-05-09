import { IHeader } from '../@types/about';

const HeaderNavItem = ({ active, content, href, title }: IHeader) => {
    return (
        <li className={`${active && 'current'}`}>
            <a className="smoothscroll" href={`#${href}`} title={title}>
                {content}
            </a>
        </li>
    );
};

export default HeaderNavItem;
