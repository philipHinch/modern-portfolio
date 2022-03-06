//icons
import { Icon } from '@iconify/react';

const Social = () => {
    return (
        <ul className='socialLinksContainer'>
            <li className="socialIconContainer" title='Github'>
                <Icon icon="fa6-brands:github-square" className='socialIcon' />
            </li>
            <li className="socialIconContainer" title='Linkedin'>
                <Icon icon="fa6-brands:linkedin" className='socialIcon' />
            </li>
            <li className="socialIconContainer" title='Facebook'>
                <Icon icon="fa6-brands:facebook-square" className='socialIcon' />
            </li>
            <li className="socialIconContainer" title='Codepen'>
                <Icon icon="fa6-brands:codepen" className='socialIcon' />
            </li>
            <li className='line'></li>
        </ul>
    );
}

export default Social;