import HeaderMenuToggle from '../atoms/HeaderMenuToggle';
import HeaderNavWrap from '../atoms/HeaderNavWrap';

function Header() {
    return (
        <header className="s-header">
            <div className="header-logo">
                <a className="site-logo" href="index.html">
                    leandroaps
                </a>
            </div>

            <HeaderNavWrap />

            <HeaderMenuToggle content="menu" />
        </header>
    );
}

export default Header;
