const Hero = () => {
    return (
        <div className="heroContainer">
            <div className="innerHero">
                <div className="leftInnerHero">
                    <div className="avatarContainer">
                        <img src={require('../assets/other/avatar.png')} alt="" />
                    </div>
                    <h1>hello,</h1>
                    <p>i'm <span className="firstNameHero">philip</span>. front-end web developer</p>
                </div>
                <div className="rightInnerHero">
                    <div>
                        <p>{'user {'}</p>
                        <br />
                        <p className="code">{'firstName : "philip"'}</p>
                        <p className="code">{'lastName : "hinchsliff"'}</p>
                        <p className="code">{'nationality : "british/italian"'}</p>
                        <p className="code">{'info : "passionate web developer"'}</p>
                        <br />
                        <p>{'}'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;