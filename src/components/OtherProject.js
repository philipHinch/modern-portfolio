//icons
import { Icon } from '@iconify/react';



const OtherProject = ({ title, tech, extraInfo, repo, link, type }) => {
    return (
        <div className="otherProject">
            <div className="otherProjectTop">
                {/* <div className="otherProjectImage">
                    <Icon icon="ant-design:project-filled" className='otherProjectIcon' />
                </div> */}
                <div className='otherProjectText'>
                    <div className="otherProjectTitle">{title}</div>
                    <ul className="otherProjectTechs">
                        {tech && tech.map((t) => (
                            <li className="otherTech" key={t}>{t}</li>
                        ))}
                        {/* <li className="otherTech">react</li>
                        <li className="otherTech">html</li>
                        <li className="otherTech">css</li> */}
                    </ul>
                </div>
            </div>
            <div className="otherProjectBottom">
                <p className="otherProjectDetails">{extraInfo}</p>
            </div>
        </div>
    );
}

export default OtherProject;