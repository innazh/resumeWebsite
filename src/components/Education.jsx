import './styles/Education.css';
import senecaLogo from '../pictures/seneca_logo.png'

const Education = () => {
    return (
        <div id="education-main" className="container">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <h2 style={{ fontSize: '60px' }}>Education</h2>
                    </div>
                    {/* <div className="col-md-6"> */}
                        <div className="row">
                            <div className="card mb-3" style={{ maxWidth: '40px;', width: '500px'}}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={senecaLogo} className="card-img" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;