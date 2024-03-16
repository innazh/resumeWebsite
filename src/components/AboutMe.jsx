// AboutMe.jsx

import React from 'react';
import me from '../pictures/me_round.jpeg';
import './styles/AboutMe.css';

const AboutMe = () => {
    return (
        <div id="about-me" className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-5 col-sm-12 order-md-1">
                        <img src={me} className="rounded-circle" alt="me" style={{ width: '50%', maxWidth: '50%', height: 'auto' }} />
                    </div>
                    <div className="col-md-5 col-sm-12 ">
                        <div className="row ">
                            <div className="col text-left">
                                <h2 className='about-me-header' style={{ fontSize: '60px' }}>About me:</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col about-me-text">
                                <p>
                                    I believe that technology is a great tool that can be utilized to make our lives better.<br />
                                    My core motivation is to simplify this infinitely complex reality through the engineering of software, which enhances people's quality of life.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col about-me-text">
                                <p>I'm currently interested in back-end engineering, though full-stack roles are not a hard "no".</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col about-me-text">
                                <p>While I'm always open to learning new tools to achieve the goal, here's the list of things I've worked with most recently:</p>
                            </div>
                        </div>
                </div>
            </div>
            <div className='icons-container transparent-icon-bg'>
                <div id="icons-row" className="row row-cols-auto justify-content-center">
                    <div className="col">
                        <i className="devicon-go-original-wordmark icon-size" />
                        <i className="devicon-python-plain-wordmark icon-size" />
                    </div>
                    <div className="col">
                        <i className="devicon-docker-plain-wordmark icon-size" />
                    </div>

                    <div className="col">
                        <i className="devicon-mysql-plain-wordmark icon-size" />
                        <i className="devicon-postgresql-plain-wordmark icon-size" />
                    </div>
                </div>
                <div id="icons-row" className="row row-cols-auto justify-content-center">
                    <div className="col">
                        <i className="devicon-github-original-wordmark icon-size" />
                        <i className="devicon-grafana-original-wordmark icon-size"></i>
                    </div>
                    <div className='col'>
                        <i className="devicon-prometheus-original-wordmark icon-size"></i>
                        <i className="devicon-linux-plain icon-size"></i>
                    </div>
                    <div className="col">
                        <i className="devicon-terraform-plain-wordmark icon-size" />
                        <i className="devicon-ansible-plain-wordmark icon-size" />
                    </div>
                </div>
                <div id="icons-row" className="row row-cols-auto justify-content-center">
                    <div className="col">
                        <i className="devicon-react-original-wordmark icon-size" />
                        <i className="devicon-javascript-plain icon-size" />
                        <i className='devicon-ember-original-wordmark icon-size'></i>
                        <i className="devicon-nextjs-plain icon-size" />
                        <i className="devicon-tailwindcss-plain-wordmark icon-size" />
                        <i className="devicon-selenium-original icon-size" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
