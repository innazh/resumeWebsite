import './styles/Experience.css'
import morno from '../pictures/morno.png'
import olg from '../pictures/olg.png'
import dma from '../pictures/dma.png'

const Experience = () => {
    return (
        <div id="exp-main" className="container">
            <div className="row">
                <div className="col">
                    <h2 style={{ fontSize: '60px' }}>Experience</h2>
                    <div className="row">
                        <div className="col-lg-7 mx-auto" style={{ color: 'black' }}>
                            <ul className="timeline">
                                <div className="row">
                                    <div className="col">
                                        {/* 3 rows below for 3 job experiences */}
                                        <div className="row">
                                            <div className="col">
                                                <li className="ul-li-child">
                                                    <div className="accordion" id="morno-exp">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="mornoHeading">
                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#morno-tasks" aria-expanded="true" aria-controls="morno-tasks">

                                                                    <div className="row">
                                                                        <div className="col-md-2 logo-container">
                                                                            <img className="card-img company-logo" src={morno} />
                                                                        </div>
                                                                        <div className="col-md-9">
                                                                            <div className="card-body">
                                                                                <h5 className="card-title">Automation Test Engineer (Co-op) @ <a className="link-dark" href="https://www.morneaushepell.com/ca-en">Morneau Shepell</a></h5>
                                                                                <h6 className="card-subtitle mb-2">Remote</h6>
                                                                                <h6 className="card-subtitle mb-2 text-muted">05/2020 - 08/2020</h6>
                                                                                <p className="card-text tasks">
                                                                                    <b>Technology:</b> C#, SQL, Selenium, Appium, BrowserStack, Azure DevOps, Swagger, Postman
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </h2>
                                                            <div id="morno-tasks" className="accordion-collapse collapse" aria-labelledby="mornoHeading" data-bs-parent="#morno-exp">
                                                                <div className="accordion-body">
                                                                    <ul className="tasks">
                                                                        <li>Automated tests mobile application for Android using Selenium(C#), Appium and BrowserStack</li>
                                                                        <li>Used Swagger and Postman to automate regression testing for API services</li>
                                                                        <li>Wrote and verified SQL queries in SQL Management Studio</li>
                                                                        <li>Updated framework’s documentation by including 10+ features developed in the last 2 years</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </div>
                                        </div>
                                        {/* OLG */}
                                        <div className="row">
                                            <div className="col">
                                                <li className="ul-li-child">
                                                    <div className="accordion" id="olg-exp">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="olgHeading">
                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#olg-tasks" aria-expanded="true" aria-controls="olg-tasks">

                                                                    <div className="row">
                                                                        <div className="col-md-2 logo-container">
                                                                            <img className="card-img company-logo" src={olg} />
                                                                        </div>
                                                                        <div className="col-md-9">
                                                                            <div className="card-body">
                                                                                <h5 className="card-title">Business Systems Analyst (Co-op) @ <a className="link-dark" href="https://www.olg.ca/en/home.html">OLG</a></h5>
                                                                                <h6 className="card-subtitle mb-2">Toronto, ON</h6>
                                                                                <h6 className="card-subtitle mb-2 text-muted">05/2019 - 08/2019</h6>
                                                                                <p className="card-text tasks">
                                                                                    <b>Technology:</b> ServiceNow, AngularJS, Jelly, HTML, CSS, Powershell, Python, Pandas
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </h2>
                                                            <div id="olg-tasks" className="accordion-collapse collapse" aria-labelledby="olgHeading" data-bs-parent="#olg-exp">
                                                                <div className="accordion-body">
                                                                    <ul className="tasks">
                                                                        <li>Started a project that automated top 30 requests for the IT Support Centre using ServiceNow and AngularJS</li>
                                                                        <li>Transformed the design of the internal IT portal using AngularJS, Jelly, HTML and CSS</li>
                                                                        <li>Thoroughly and clearly documented all work completed</li>
                                                                        <li>Developed Python scripts for Excel sheets using Pandas</li>
                                                                        <li>Developed scripts in Powershell to manage SharePoint sites</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </div>
                                        </div>
                                        {/* DMA */}
                                        <div className="row">
                                            <div className="col">
                                                <li className="ul-li-child">
                                                    <div className="accordion" id="dma-exp">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="dmaHeading">
                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dma-tasks" aria-expanded="true" aria-controls="dma-tasks">

                                                                    <div className="row">
                                                                        <div className="col-md-2 logo-container">
                                                                            <img className="card-img company-logo" src={dma} />
                                                                        </div>
                                                                        <div className="col-md-9">
                                                                            <div className="card-body">
                                                                                <h5 className="card-title">Teaching Assistant @ <a className="link-dark" href="https://digitalmediaacademy.org/">Digital Media Academy</a></h5>
                                                                                <h6 className="card-subtitle mb-2">Toronto, ON</h6>
                                                                                <h6 className="card-subtitle mb-2 text-muted">06/2018 - 07/2018</h6>

                                                                                <p className="card-text tasks"><b>Technology:</b> Java, Processing
                                                                                     <br />
                                                                                    <b>Other skills:</b> teamwork, great communication skills, debugging</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </h2>
                                                            <div id="dma-tasks" className="accordion-collapse collapse" aria-labelledby="dmaHeading" data-bs-parent="#dma-exp">
                                                                <div className="accordion-body">
                                                                    <ul className="tasks">
                                                                        <li>Taught children and teens how to program utilising great communication skills</li>
                                                                        <li>Built project examples using Processing and Java</li>
                                                                        <li>Helped to plan and organised lessons</li>
                                                                        <li>Debugged, answered questions, explained things</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience;