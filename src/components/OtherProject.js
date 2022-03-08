//icons
import { Icon } from '@iconify/react';



const OtherProject = () => {
    return (
        <div className="otherProject">
            <div className="otherProjectTop">
                {/* <div className="otherProjectImage">
                    <Icon icon="ant-design:project-filled" className='otherProjectIcon' />
                </div> */}
                <div className='otherProjectText'>
                    <div className="otherProjectTitle">myMoney</div>
                    <ul className="otherProjectTechs">
                        <li className="otherTech">react</li>
                        <li className="otherTech">html</li>
                        <li className="otherTech">css</li>
                    </ul>
                </div>
            </div>
            <div className="otherProjectBottom">
                <p className="otherProjectDetails">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus saepe iste nam adipisci eius illum ipsam ullam non. Temporibus, corporis.</p>
            </div>
        </div>
    );
}

export default OtherProject;