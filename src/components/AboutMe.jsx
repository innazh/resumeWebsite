import me from '../pictures/me_round.jpeg' // relative path to image 
import img from '../pictures/painting_bg.png'
import './styles/AboutMe.css';


const AboutMe = () => {
    const bg = 'url('+img+')'
    return (
        <div id="bg_abt_me" className="container" style={{color:'white' }}>
            <div className="row">
                <div className="col-md-2"></div>
                <div id="abt_desc_col" className="col-md-5">
                    <div className="row">
                        <h2 style={{fontSize: '60px'}}>About me:</h2>
                    </div>
                    <div className="row">
                        <p>
                            A recent graduate who believes that technology is a great tool that can be utilised to make our lives better.<br/>
                            My core motivation is to create great useful things that help others.
                        </p>
                    </div>
                    <div className="row">
                        <p>I'm intersted in full-stack development, though I prefer back-end (don't tell anyone).</p>
                    </div>
                    <div className="row">
                        <p>While I'm always open to learning new tools to achieve the goal, here's the list of things I've worked with most recently:</p>
                    </div>
                    <div className="row">
                        <p>
                          <i class="devicon-javascript-plain icon-size"/>
                          <i class="devicon-react-original icon-size"/>
                          <i class="devicon-go-line icon-size"/>
                          <i class="devicon-python-plain icon-size"/>
                          <i class="devicon-github-original icon-size"/>
                          <i class="devicon-docker-plain icon-size"/>
                          <i class="devicon-mysql-plain icon-size"/>
                          <i class="devicon-postgresql-plain icon-size"/>
                        </p>
                    </div>
                </div>
                <div className="col-md-3 float-left" style={{paddingTop: '30px'}}>
                    <img src={me} className="rounded-circle" alt="my photo" width="300" height="300" />
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}
export default AboutMe;