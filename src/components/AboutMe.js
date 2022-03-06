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

const AboutMe = () => {
    return (
        <div className="container typewriter">
            <h2 className="containerHeader ">01.aboutMe</h2>
            <div className="innerContainer">
                <div className="aboutMe">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quam similique ullam quibusdam, atque inventore, nam fugiat ut, eius nemo sunt sequi? Modi in aperiam, voluptates quo nulla quidem temporibus repellendus incidunt quia perspiciatis, voluptatum rerum ab odio est id sequi ut aliquid voluptatibus fugiat doloribus quibusdam ipsam animi eveniet. Aliquid eius quis nobis ex inventore quasi sapiente exercitationem? Ad, unde. Iure error, facilis inventore quisquam eos ipsum illum, blanditiis illo iste a repudiandae quo voluptatem ab quod necessitatibus cum adipisci ut maiores nulla eum corrupti veritatis perspiciatis. Consectetur quia excepturi eum quasi asperiores explicabo soluta vero quis a eveniet?</div>
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
                    <div className="technologyContainer" title='Jest'>
                        <img src={jestLogo} alt="jest logo" />
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