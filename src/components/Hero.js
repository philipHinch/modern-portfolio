const Hero = () => {
    return (
        <div className="heroContainer">
            <div className="innerHero">
                <div className="leftInnerHero">
                    <div className="avatarContainer">
                        <img src={require('../assets/other/avatar.png')} alt="" />
                    </div>
                    <div className="avatarContainerShadow"></div>
                    <h1 className='heroIntroHeading'>hello, i'm <span className='firstNameHero'>philip</span>,</h1>
                    {/* <p className='heroIntro'>i'm <span className="firstNameHero">philip</span>. a front-end web developer who loves to build applications for the web.</p> */}
                    <p className='heroIntroParagraph'>a front-end web developer who loves to build applications for the web.</p>
                </div>
                <div className="rightInnerHero">
                    <div>
                        <p>{'dev {'}</p>
                        <br />
                        <p className="code firstNameCode">{'firstName : "philip",'}</p>
                        <p className="code lastNameCode">{'lastName : "hinchsliff",'}</p>
                        <p className="code nationalityCode">{'nationality : "british/italian",'}</p>
                        <p className="code infoCode">{'info : "passionate web developer"'}</p>
                        <br />
                        <p>{'}'}</p>
                    </div>
                    <div>
                        <div className='btn btn-primary'>viewProjects</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;