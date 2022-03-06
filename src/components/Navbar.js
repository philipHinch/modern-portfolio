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
                <a href="#" className="firstContainer">
                    <span>{'<'}</span>
                    <span className='firstName'>philip
                    </span>
                    <span>{'/>'}</span>

                </a>
                <a href="#" className="lastContainer">
                    <span>{'<'}</span>
                    <span className='lastName'>hinchsliff</span>
                    <span>{'/>'}</span>

                </a>

            </li>
            <li className="navbarLinks">
                <ul>
                    <li><a href="#aboutMe" className='navbarLink'>01.aboutMe</a></li>
                    <li><a href="#myProjects" className='navbarLink'>02.myProjects</a></li>
                    <li><a href="#" className='navbarLink'>03.contactMe</a></li>
                </ul>
            </li>
            {/* <li className="socialLinks">
                <button>CV</button>
            </li> */}
        </ul>
    );
}

export default Navbar;