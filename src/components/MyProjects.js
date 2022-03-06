
const MyProjects = () => {
    return (
        <div className="container" id='myProjects'>
            <h2 className="containerHeader">02.myProjects</h2>
            <div className="projectsContainer">
                <div className="project">
                    <div className="projectLeft">
                        <div className="projectImageContainer">
                            <img src={require('../assets/projectImages/mymoney.png')} alt="" />
                        </div>


                        <div className="projectImageShadow"></div>
                    </div>
                    <div className="projectRight">
                        <h5 className="projectType">personal project</h5>
                        <h3 className="projectTitle">myMoney</h3>
                        <p className="projectDetails">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestias eius ipsam, sit commodi, beatae velit non exercitationem autem dolore temporibus sunt consequuntur eum quidem dicta delectus? Nobis, exercitationem beatae.</p>
                        <div className="projectTechs">
                            <small className="tech">react</small>
                            <small className="tech">firebase</small>
                            <small className="tech">tailwind css</small>
                        </div>
                        <div className="projectLinks">
                            <div className="btn btn-primary">viewProject</div>
                            <div className="btn btn-primary">viewRepo</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MyProjects;