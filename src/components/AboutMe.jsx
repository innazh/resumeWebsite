import me from '../pictures/me_round.jpeg' // relative path to image 
import './styles/AboutMe.css';


const AboutMe = () => {
    return (
        <div id="abt-me-main" className="container">
            <div className="row justify-content-center">
                {/* <div className="col-md-2"></div> */}
                <div className="col-md-5 col-sm-12">
                    {/* <div className="row"> */}
                        <h2 style={{ fontSize: '60px' }}>About me:</h2>
                    {/* </div> */}
                    {/* <div className="row"> */}
                        <p>
                            A recent graduate who believes that technology is a great tool that can be utilised to make our lives better.<br />
                            My core motivation is to create great useful things that help others.
                        </p>
                    {/* </div> */}
                    {/* <div className="row"> */}
                        <p>I'm intersted in full-stack development, though I prefer back-end (don't tell anyone).</p>
                    {/* </div> */}
                    {/* <div className="row"> */}
                        <p>While I'm always open to learning new tools to achieve the goal, here's the list of things I've worked with most recently:</p>
                    {/* </div> */}
                    {/* add column around here for the icons to scale properly */}
                    {/* <div className="row"> */}
                        <p>
                            <i className="devicon-javascript-plain icon-size" />
                            <i className="devicon-react-original icon-size" />
                            <i className="devicon-go-line icon-size" />
                            <i className="devicon-python-plain icon-size" />
                            <i className="devicon-github-original icon-size" />
                            <i className="devicon-docker-plain icon-size" />
                            <i className="devicon-mysql-plain icon-size" />
                            <i className="devicon-postgresql-plain icon-size" />
                        </p>
                    {/* </div> */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={me} className="rounded-circle" alt="me" style={{maxWidth:'50%', height:'auto', padding:'30px'}}/>
                </div>
                {/* <div className="col-md-2"></div> */}
            </div>
        </div>
    )
}
export default AboutMe;