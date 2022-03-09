//images
import htmlLogo from '../assets/other/htmllogo.svg';
import reactLogo from '../assets/other/react.svg';
import cssLogo from '../assets/other/csslogo.svg';
import javascriptLogo from '../assets/other/jslogo.svg';
import es6Logo from '../assets/other/es6logo.svg';
import tailwind from '../assets/other/tailwind.svg';
import firebaseLogo from '../assets/other/firebase.svg';
import gitLogo from '../assets/other/gitlogo.png';
import figmaLogo from '../assets/other/figmalogo.svg';
import vsLogo from '../assets/other/vscodelogo.svg';
import sassLogo from '../assets/other/sasslogo.svg';
import bootstrapLogo from '../assets/other/bootstraplogo.svg';
import routerLogo from '../assets/other/reactrouterlogo.svg';
import jestLogo from '../assets/other/jestlogo.svg';
import npmLogo from '../assets/other/npmlogo.svg';
//icons
import { Icon } from '@iconify/react';
//hooks
import { useState } from 'react';


const AboutMe = () => {

    const [readMore, setReadMore] = useState(false)



    return (
        <div className="container" id='aboutMe'>
            <h2 className="containerHeader "><span className='red'>01.</span>aboutMe</h2>
            <div className="innerContainer">
                <div className="aboutMe">I always have been very passionate about computers and the web since I was a little kid. I love to learn new things and as a developer you never stop learning, the thought of that really excites me and it also means that the job will never get boring. I always want to improve myself and keep my knowlege up to date with the latest technologies & trends. I enjoy creating websites and applications that function properly, my eye for detail and my creativity really help me with that. I get extreme satisfaction in solving problems and in this industry there is a never ending array of problems that need to be solved. I have the skills to solve these problems and together with my technical knowlege I always aim to provide good results.</div>
                <br />
                <div className={`aboutMe aboutMe2 ${ readMore ? 'grow' : '' }`}>After losing my aviation job during the covid-19 pandemic, I focused on improving my web development skills. This was a great choice because it allowed me to study and in the meantime it allowed me to be at home together with my family and my newborn baby Alex! I am now able to build dynamic and fluid single page applications using the latest technologies. I really enjoy using JavaScript and building various projects. I am currently improving my React.js skills and my solid JavaScript abilities help me out a lot. My plan for the near future is to learn the "MERN Stack" which include Node.js, MongoDB and Express.js.</div>

                <div className="btn btn-primary readMore" onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'close' : 'readMore'}
                    {readMore ? <Icon icon="charm:chevron-up" className='chevronIcon' />
                        : <Icon icon="ci:chevron-big-down" className='chevronIcon' />}
                </div>

                <h2 className="containerSubHeader"><span className='red'>//</span>technologies</h2>
                <div className="technologies">
                    <div className="technologyContainer" title='HTML 5'>
                        <img src={htmlLogo} alt="html logo" />
                    </div>
                    <div className="technologyContainer" title='CSS 3'>
                        <img src={cssLogo} alt="css logo" />
                    </div>
                    <div className="technologyContainer" title='Javascript'>
                        <img src={javascriptLogo} alt="javascript logo" />
                    </div>
                    <div className="technologyContainer" title='ES6+'>
                        <img src={es6Logo} alt="es6 logo" />
                    </div>
                    <div className="technologyContainer" title='React'>
                        <img src={reactLogo} alt="react logo" />
                    </div>
                    <div className="technologyContainer" title='Jest'>
                        <img src={jestLogo} alt="jest logo" />
                    </div>
                    <div className="technologyContainer" title='Firebase'>
                        <img src={firebaseLogo} alt="firebase logo" />
                    </div>
                    <div className="technologyContainer" title='Git'>
                        <img src={gitLogo} alt="git logo" />
                    </div>
                    <div className="technologyContainer" title='Tailwind CSS'>
                        <img src={tailwind} alt="tailwind logo" />
                    </div>
                    <div className="technologyContainer" title='Bootstrap 5'>
                        <img src={bootstrapLogo} alt="bootstrap logo" />
                    </div>
                    <div className="technologyContainer" title='npm'>
                        <img src={npmLogo} alt="npm logo" />
                    </div>
                    <div className="technologyContainer" title='Figma'>
                        <img src={figmaLogo} alt="figma logo" />
                    </div>
                    <div className="technologyContainer" title='VS Code'>
                        <img src={vsLogo} alt="vs code logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;