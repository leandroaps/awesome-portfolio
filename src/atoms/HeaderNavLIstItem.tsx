import { IHeaderNav } from '../@types/about';
import HeaderNavItemsContent from './HeaderNavItemsContent';

const HeaderNavLIstItem = ({ active, content, href, title }: IHeaderNav) => {
    return (
        <li className={`${active && 'current'}`}>
            <HeaderNavItemsContent active={active} content={content} href={href} title={title} />
        </li>
    );
};

export default HeaderNavLIstItem;
