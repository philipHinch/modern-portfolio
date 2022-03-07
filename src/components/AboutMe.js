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
                <div className="aboutMe">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto ea in esse rem quasi eius autem facilis aperiam velit magni dignissimos quaerat nisi, repudiandae animi totam optio fugit cumque alias provident, rerum consequuntur veniam explicabo? Sint distinctio veritatis, doloribus exercitationem eaque vel nobis accusamus soluta id molestias deleniti minus, magnam fuga expedita nulla optio? Dicta, adipisci! Distinctio, soluta nisi? Unde similique quam nam fugiat fugit temporibus repudiandae vitae ipsam commodi, rem atque, sapiente optio amet facere eaque, nesciunt iste dolor sit quas nobis fuga magnam dolore! Distinctio, culpa perspiciatis? Recusandae eaque aliquam animi enim tenetur aperiam, modi natus at molestias?</div>
                <br />
                <div className={`aboutMe aboutMe2 ${ readMore ? 'grow' : '' }`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid sunt, ullam autem, magni rem quia nesciunt aperiam, vel architecto recusandae dolorum fuga reiciendis itaque. Voluptatum ad temporibus vitae architecto impedit. Laborum nobis veritatis est repudiandae quod quo quaerat, cumque animi temporibus quam maiores fugiat! Dicta asperiores quo nobis et distinctio praesentium obcaecati, dolor, hic, corporis beatae perspiciatis cumque fugiat voluptatum tempore atque qui! Enim nisi recusandae commodi? Voluptates dolore autem atque qui totam dolorum maxime ad modi inventore rerum numquam voluptatibus asperiores voluptatem architecto nam voluptas, molestias temporibus consectetur cum beatae laudantium perspiciatis dolores sit incidunt! Voluptatum unde ducimus magnam!</div>
                {/* {readMore &&
                    <>
                        <br />
                        <div className="aboutMe aboutMe2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid sunt, ullam autem, magni rem quia nesciunt aperiam, vel architecto recusandae dolorum fuga reiciendis itaque. Voluptatum ad temporibus vitae architecto impedit. Laborum nobis veritatis est repudiandae quod quo quaerat, cumque animi temporibus quam maiores fugiat! Dicta asperiores quo nobis et distinctio praesentium obcaecati, dolor, hic, corporis beatae perspiciatis cumque fugiat voluptatum tempore atque qui! Enim nisi recusandae commodi? Voluptates dolore autem atque qui totam dolorum maxime ad modi inventore rerum numquam voluptatibus asperiores voluptatem architecto nam voluptas, molestias temporibus consectetur cum beatae laudantium perspiciatis dolores sit incidunt! Voluptatum unde ducimus magnam!</div>
                    </>
                } */}
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