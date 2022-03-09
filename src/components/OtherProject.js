//icons
import { Icon } from '@iconify/react';



const OtherProject = ({ title, tech, extraInfo, repo, link, type }) => {
    return (
        <div className="otherProject">
            <div className="otherProjectTop">
                <div className='otherProjectText'>
                    <div className="otherProjectTitle">{title}</div>
                    <ul className="otherProjectTechs">
                        {tech && tech.map((t) => (
                            <li className="otherTech" key={t}>{t}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="otherProjectBottom">
                <p className="otherProjectDetails">{extraInfo}</p>
                <div className="projectLinks otherProjectLinks">
                    <a href={link} className="btn btn-primary" target={'_blank'}>viewProject</a>
                    <a href={repo} className="btn btn-primary repoBtn" target={'_blank'}>viewRepo</a>
                </div>
            </div>
        </div>
    );
}

export default OtherProject;