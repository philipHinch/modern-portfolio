//icons
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <footer>
            <a href="#" className="goToTop" title='Go to top'><Icon className='upArrowIcon' icon="bi:arrow-up-square-fill" /></a>
            <small>Copyright &copy; 2022 - <a href="https://github.com/philipHinch" className="githubLink" target="_blank">https://github.com/philipHinch</a></small>
        </footer>
    );
}

export default Footer;