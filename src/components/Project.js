//bootstrap
import Carousel from 'react-bootstrap/Carousel'
//css
import 'bootstrap/dist/css/bootstrap.min.css';
//hooks
import { useState } from 'react';
//icons
import { Icon } from '@iconify/react';



const Project = ({ type, title, details, techs, images }) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="project">
            <div className="projectLeft">
                {/* <div className="projectImageContainer">
                    <img src={require('../assets/projectImages/mymoney.png')} alt="" />
                </div> */}

                <div className='projectImageContainer'>
                    <Carousel activeIndex={index} onSelect={handleSelect} interval={null} touch={true}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require('../assets/projectImages/contacts.png')}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require('../assets/projectImages/mymoney.png')}
                                alt="Third slide"
                            />
                        </Carousel.Item>
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
                    {/* <small className="tech">react</small>
                    <small className="tech">firebase</small>
                    <small className="tech">tailwind css</small> */}
                </div>
                <div className="projectLinks">
                    <div className="btn btn-primary">viewProject</div>
                    <div className="btn btn-primary">viewRepo</div>
                </div>
            </div>
        </div>
    );
}

export default Project;