import './styles/Education.css';
import senecaLogo from '../pictures/seneca_logo.png'

const Education = () => {
    return (
        <div id="education-main" className="container">
            <div className="row">
                <div className="col">

                    <div className="row">
                        <div className="col">
                            <h2 style={{ fontSize: '60px' }}>Education</h2>
                        </div>
                    </div>

                    <div className="row justify-content-center" style={{marginTop:'50px', marginBottom:'150px'}}>
                        <div className="col-md-6">
                            <div id="seneca-card" className="card mb-3 shadow border-5">
                                <div className="row g-0" style={{ padding: '10px' }}>

                                    <div className="col-md-2">
                                        <img src={senecaLogo} className="card-img border border-danger" style={{ padding: '10px', width:'100%' }} alt="seneca" />
                                    </div>

                                    <div className="col-md-10">
                                        <div className="card-body">
                                            <h5 className="card-title">Honours Bachelor of Technology - Software Development</h5>
                                            <h6 className="card-subtitle mb-2">Seneca College - Toronto, ON</h6>
                                            <h6 className="card-subtitle mb-2 text-muted">2016-2020</h6>

                                            <div className="row" style={{marginTop:'20px'}}>
                                                <div className="col">
                                                    <p className="card-text">
                                                    <b>Awards:</b> Bachelor of Tech Soft Dev Scholarship (x4), President's Honour list<br/>
                                                    <b>GPA:</b> 3.8 / 4.0</p>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;