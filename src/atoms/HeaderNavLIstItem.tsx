import { useContext } from 'react';
import { IHeaderNav } from '../@types/header';
import { AppContext } from '../context';
import HeaderNavItemsContent from './HeaderNavItemsContent';

const HeaderNavLIstItem = ({ active, content, href, title, id }: IHeaderNav) => {
    const { header, setHeader } = useContext(AppContext)!;
    const { nav } = header;

    const handleItemClick = (id: number | undefined) => {
        const updatedNav = nav.map((item: { id: number | undefined }) => ({
            ...item,
            active: item.id === id
        }));

        setHeader((prevHeader: Array<string>) => ({
            ...prevHeader,
            nav: updatedNav
        }));
    };

    return (
        <li className={`${active && 'current'}`} onClick={() => handleItemClick(id)}>
            <HeaderNavItemsContent active={active} content={content} href={href} title={title} key={id} />
        </li>
    );
};

export default HeaderNavLIstItem;
