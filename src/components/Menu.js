//icons
import { Icon } from '@iconify/react';


const Menu = ({ setMenuOpen, menuOpen }) => {

    const handleCloseClick = () => {
        setMenuOpen(!menuOpen)
    }

    const handleLinkClick = () => {
        setMenuOpen(false)
    }

    return (
        <div className="menu">
            <div className="closeIconContainer" onClick={handleCloseClick}>
                <Icon icon="ci:close-small" className='closeIcon' />
            </div>
            <ul className='menuLinksContainer'>
                <li><a href="#aboutMe" className='navbarLink' onClick={handleLinkClick}><span className='red'>01.</span>aboutMe</a></li>
                <li><a href="#myProjects" className='navbarLink' onClick={handleLinkClick}><span className='red'>02.</span>myProjects</a></li>
                <li><a href="#contactMe" className='navbarLink' onClick={handleLinkClick}><span className='red'>03.</span>contactMe</a></li>
            </ul>
        </div>
    );
}

export default Menu;