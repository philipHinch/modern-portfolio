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
import nodeLogo from '../assets/other/node.svg';
import expressLogo from '../assets/other/express.svg';
import vueLogo from '../assets/other/vue.svg';
import nuxtLogo from '../assets/other/nuxt.svg';
import storybookLogo from '../assets/other/storybook.svg';
import devopsLogo from '../assets/other/devops.svg';
import umbracoLogo from '../assets/other/umbraco.svg';
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
                <div className="aboutMe">
                    <p className="aboutMeIntro">"A passionate and enthusiastic self-taught web developer with exceptional eye for detail and a constant drive to improve personal and technical skills"</p>
                    <br /><br />
                    I always have been very passionate about computers and the web since I was a young boy. I love to learn new things and, as a software developer, you basically never stop learning and the thought of that really excites me. This also means that the job will never get boring as time goes by. I always want to improve myself and keep my knowledge up to date with the latest technologies and trends. I really enjoy creating websites and applications that function properly. My eye for detail and my creativity really help me with that. I get extreme satisfaction when solving problems. In the programming field there are a never ending array of problems and issues that need to be resolved which make it perfectly suitable for me. I have the skills to solve these problems and I always aim to deliver good results.</div>
                <br />
                <div className={`aboutMe aboutMe2 ${ readMore ? 'grow' : '' }`}>After losing my position in aviation due to the <span className="red large">covid-19</span> pandemic, I focused on improving my web development skills at home during the lockdown. This was a great choice because I found out that I loved what I was studying and also it allowed me to be at home together with my partner and my newborn baby <span className="red large">Alex</span>! Now, after all the effort and time learning, I am now able to comfortably build dynamic and fluid single page applications using the latest technologies. <br /> <br /> The discovery programming really opened a whole new exciting world for me. I really enjoy using <span className="red large">JavaScript</span> and building various fun projects and I am currently improving my <span className="red large">React.js</span> skills and I have started looking into back-end technologies and testing. My plan for the near future is to learn the "MERN Stack" which includes <span className='red large'>Node.js</span>, <span className="red large">MongoDB</span> and <span className="red large">Express.js</span>. I also think that <span className="red large">Next.js</span> and <span className="red large">Typescript</span> are technologies that are worth learning.</div>

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
                    <div className="technologyContainer" title='Vue'>
                        <img src={vueLogo} alt="vue logo" />
                    </div>
                    <div className="technologyContainer" title='Nuxt'>
                        <img src={nuxtLogo} alt="nuxt logo" />
                    </div>
                    <div className="technologyContainer" title='Storybook'>
                        <img src={storybookLogo} alt="react logo" />
                    </div>
                    <div className="technologyContainer" title='Umbraco'>
                        <img src={umbracoLogo} alt="umbraco logo" />
                    </div>
                    <div className="technologyContainer" title='Node'>
                        <img src={nodeLogo} alt="node logo" />
                    </div>
                    <div className="technologyContainer" title='Express'>
                        <img src={expressLogo} alt="express logo" />
                    </div>
                    <div className="technologyContainer" title='Firebase'>
                        <img src={firebaseLogo} alt="firebase logo" />
                    </div>
                    <div className="technologyContainer" title='Jest'>
                        <img src={jestLogo} alt="jest logo" />
                    </div>
                    <div className="technologyContainer" title='Devops'>
                        <img src={devopsLogo} alt="devops logo" />
                    </div>
                    <div className="technologyContainer" title='Git'>
                        <img src={gitLogo} alt="git logo" />
                    </div>
                    <div className="technologyContainer" title='Sass'>
                        <img src={sassLogo} alt="sass logo" />
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
                    {/* <div className="technologyContainer" title='VS Code'>
                        <img src={vsLogo} alt="vs code logo" />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default AboutMe;