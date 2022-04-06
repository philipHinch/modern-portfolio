//icons
import { Icon } from '@iconify/react';

const MenuSocial = () => {
    return (
        <ul className='menuSocialLinksContainer'>
            <li className="menuSocialIconContainer" title='Github'>
                <a href='https://github.com/philipHinch' target={'_blank'}><Icon icon="fa6-brands:github-square" className='menuSocialIcon' /></a>
            </li>
            <li className="menuSocialIconContainer" title='Linkedin'>
                <a href='https://www.linkedin.com/in/philip-hinchsliff' target={'_blank'}><Icon icon="fa6-brands:linkedin" className='menuSocialIcon' /></a>
            </li>
            <li className="menuSocialIconContainer" title='Facebook'>
                <a href='https://www.facebook.com/philiphinchsliff' target={'_blank'}><Icon icon="fa6-brands:facebook-square" className='menuSocialIcon' /></a>
            </li>
            <li className="menuSocialIconContainer" title='Instagram'>
                <a href='https://www.instagram.com/phil_hinch' target={'_blank'}><Icon icon="fa6-brands:instagram-square" className='menuSocialIcon' /></a>
            </li>
            <li className="menuSocialIconContainer" title='Codepen'>
                <a href='https://codepen.io/neo90sr' target={'_blank'}><Icon icon="fa6-brands:codepen" className='menuSocialIcon' /></a>
            </li>
            {/* <li className='line'></li> */}
        </ul>
    );
}

export default MenuSocial;