//icons
import { Icon } from '@iconify/react';

const Social = () => {
    return (
        <ul className='socialLinksContainer'>
            <li className="socialIconContainer" title='Github'>
                <a href='https://github.com/philipHinch' target={'_blank'}><Icon icon="fa6-brands:github-square" className='socialIcon' /></a>
            </li>
            <li className="socialIconContainer" title='Linkedin'>
                <a href='https://www.linkedin.com/in/philip-hinchsliff' target={'_blank'}><Icon icon="fa6-brands:linkedin" className='socialIcon' /></a>
            </li>
            <li className="socialIconContainer" title='Facebook'>
                <a href='https://www.facebook.com/philiphinchsliff' target={'_blank'}><Icon icon="fa6-brands:facebook-square" className='socialIcon' /></a>
            </li>
            <li className="socialIconContainer" title='Instagram'>
                <a href='https://www.instagram.com/phil_hinch' target={'_blank'}><Icon icon="fa6-brands:instagram-square" className='socialIcon' /></a>
            </li>
            <li className="socialIconContainer" title='Codepen'>
                <a href='https://codepen.io/neo90sr' target={'_blank'}><Icon icon="fa6-brands:codepen" className='socialIcon' /></a>
            </li>
            <li className='line'></li>
        </ul>
    );
}

export default Social;