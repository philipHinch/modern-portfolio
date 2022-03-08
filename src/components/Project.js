//bootstrap
import Carousel from 'react-bootstrap/Carousel'
//css
import 'bootstrap/dist/css/bootstrap.min.css';
//hooks
import { useState } from 'react';
//icons
import { Icon } from '@iconify/react';
//animate on scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    once: true,
    mirror: false,
    anchorPlacement: 'center-bottom'
});

const Project = ({ type, title, details, link, repo, techs, images }) => {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="project" data-aos="fade-in">
            <div className="projectLeft">
                <div className='projectImageContainer'>
                    <Carousel activeIndex={index} onSelect={handleSelect} interval={null} touch={true}>
                        {/* <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require('../assets/projectImages/contacts.png')}
                                alt="Third slide"
                            />
                        </Carousel.Item> */}
                        {images && images.map((image) => (
                            <Carousel.Item key={image}>
                                <img
                                    className="d-block w-100"
                                    src={`${ image }`}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>

                <div className="projectImageShadow"></div>
            </div>
            <div className="projectRight">
                <h5 className="projectType"><Icon icon="entypo:triangle-up" className='triangleIcon' />{type}</h5>
                <h3 className="projectTitle">{title}</h3>
                <p className="projectDetails">{details}</p>
                <div className="projectTechs">
                    {techs && techs.map((tech) => (
                        <small className="tech" key={tech}>
                            {tech}</small>
                    ))}
                </div>
                <div className="projectLinks">
                    <a href={link} className="btn btn-primary" target={'_blank'}>viewProject</a>
                    <a href={repo} className="btn btn-primary" target={'_blank'}>viewRepo</a>
                </div>
            </div>
        </div>
    );
}

export default Project;