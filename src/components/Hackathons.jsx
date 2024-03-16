import './styles/Hackathons.css'
import near from '../pictures/nearmetabuild.png'
import elle from '../pictures/ellehacks.jpeg'
import fin from '../pictures/finhacks.jpeg'
import ru from '../pictures/ruhacks.png'
import ink from '../pictures/ikspirehacks.png'
import lan from '../pictures/adrenalanhacks.png'
import htv from '../pictures/valleyhacks.png'

const Hackathons = () => {
    return (
        <div id="hackathons" className="container">
            <div className="row justify-content-center">
                <div className="col">
                    <h2 style={{ fontSize: '60px' }}>I love participating in hackathons!</h2>
                    <p>(some of them are clickable)</p>
                </div>
            </div>
            <div className="row justify-content-center">
                {/* winner */}
                <div className="col-md-2 hack-icon-col">
                    <a href='https://devpost.com/software/aerx-0gm8c5'>
                        <img className="hack-icon" alt="near metabuild" src={near} />
                    </a>
                    <h6>1-st Place</h6>
                </div>
                <div className="col-md-2 hack-icon-col">
                    <a href='https://github.com/innazh/CleanUp'>
                        <img className="hack-icon" alt="ellehacks" src={elle} />
                    </a>
                    <h6>1-st Place</h6>
                </div>
                <div className="col-md-2 hack-icon-col">
                    <a href='https://devpost.com/software/twitch-doctor-iqy5fp'>
                        <img className="hack-icon" alt="adrenaLAN" src={lan} />
                    </a>
                    <h6>1-st Place</h6>
                </div>
            </div>
            {/* 2nd place */}
            <div className="row justify-content-center">
                <div className="col-md-2 hack-icon-col">
                    <img className="hack-icon" alt="finhacks" src={fin} />
                    <h6>2-st Place</h6>
                </div>
            </div>
            {/* the rest */}
            <div className="row justify-content-center">
                <div className="col-md-2 hack-icon-col">
                    <img className="hack-icon" alt="inkspire" src={ink} />
                    <h6>Valuable Participant</h6>
                </div>
                <div className="col-md-2 hack-icon-col">
                    <a href='https://devpost.com/software/applydb'>
                        <img className="hack-icon" alt="hack the valley" src={htv} />
                    </a>
                    <h6>Valuable Participant</h6>
                </div>
                <div className="col-md-2 hack-icon-col">
                    <img className="hack-icon" alt="RU hacks" src={ru} />
                    <h6>Valuable Participant</h6>
                </div>
            </div>
            <div className="row justify-content-center" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                <div className="col">
                    <p>And more...</p>
                </div>
            </div>
        </div>
    )
}
export default Hackathons;