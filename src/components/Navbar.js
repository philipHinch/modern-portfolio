//icons
import { Icon } from '@iconify/react';



const Navbar = () => {
    return (
        <ul className="navbar">
            {/* <li className="mainLogo">
                <div className="firstNameContainer">
                    <span className='firstName'>philip</span>
                </div>
                <div className='lastNameContainer'>
                    <span className='lastName'>hinchsliff</span>
                </div>
            </li> */}
            <li className="mainLogo">
                <div className="firstContainer">
                    <span>{'<'}</span>
                    <span className='firstName'>philip</span>
                    <span>{'/>'}</span>
                </div>
                <div className="lastContainer">
                    <span>{'<'}</span>
                    <span className='lastName'>hinchsliff</span>
                    <span>{'/>'}</span>
                </div>
            </li>
            <li className="navbarLinks">
                <ul>
                    <li><a href="#">aboutMe</a></li>
                    <li><a href="#">myProjects</a></li>
                    <li><a href="#">contactMe</a></li>
                </ul>
            </li>
            <li className="socialLinks">
                <div className="socialLinkContainer">
                    <Icon icon="fa6-brands:linkedin" className='socialIcon' />
                </div>
                <div className="socialLinkContainer">
                    <Icon icon="fa6-brands:facebook-square" className='socialIcon' />

                </div>
                <div className="socialLinkContainer">
                    <Icon icon="fa6-brands:github-square" className='socialIcon' />
                </div>
            </li>
        </ul>
    );
}

export default Navbar;