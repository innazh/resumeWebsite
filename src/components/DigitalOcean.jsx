import digitalocean from '../pictures/do.png'

const DigitalOcean = () => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <li className="ul-li-child">
                        <div className="accordion" id="do2-exp">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="do2Heading">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#do2-tasks" aria-expanded="true" aria-controls="do2-tasks">

                                        <div className="row">
                                            <div className="col-md-2 logo-container">
                                                <img className="card-img company-logo" alt="DigitalOcean" src={digitalocean} />
                                            </div>
                                            <div className="col-md-9">
                                                <div className="card-body">
                                                    <h5 className="card-title">Software Engineer II @ DigitalOcean</h5>
                                                    <h6 className="card-subtitle mb-2">Remote</h6>
                                                    <h6 className="card-subtitle mb-2 text-muted">03/2022 - x</h6>
                                                    <p className="card-text tasks">
                                                        <b>Technology:</b> Go, Grafana, Prometheus, SQL, Docker, Concourse, GoCD, Terraform, Ansible
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div id="do2-tasks" className="accordion-collapse collapse" aria-labelledby="do2Heading" data-bs-parent="#do2-exp">
                                    <div className="accordion-body">
                                        <ul className="tasks">
                                            <li>
                                                Developed a POC company‑wide data analytics tool reading from Kafka to TimescaleDB
                                            </li>
                                            <li>
                                                Handled services responsible for customer billing data
                                            </li>
                                            <li>Used terafform to change resource allocation for instances and to provide new instances, ran ansible playbooks</li>
                                            <li>
                                                Assisted in migration from GoCD to Concourse CI
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <li className="ul-li-child">
                        <div className="accordion" id="do1-exp">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="do1Heading">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#do1-tasks" aria-expanded="true" aria-controls="morno-tasks">
                                        <div className="row">
                                            <div className="col-md-2 logo-container">
                                                <img className="card-img company-logo" alt="DigitalOcean" src={digitalocean} />
                                            </div>
                                            <div className="col-md-9">
                                                <div className="card-body">
                                                    <h5 className="card-title">Software Engineer I @ DigitalOcean</h5>
                                                    <h6 className="card-subtitle mb-2">Remote</h6>
                                                    <h6 className="card-subtitle mb-2 text-muted">06/2021 - 03/2022</h6>
                                                    <p className="card-text tasks">
                                                        <b>Technology:</b> React, NodeJS, Optimizely, EmberJS, Go, Docker

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div id="do1-tasks" className="accordion-collapse collapse" aria-labelledby="do1Heading" data-bs-parent="#do1-exp">
                                    <div className="accordion-body">
                                        <ul className="tasks">
                                            <li>
                                                Key contributor for Uptime product, which greatly decreased the down time of our customers
                                            </li>
                                            <li>
                                                Added features to and maintained expriementation platform & services
                                            </li>
                                            <li>
                                                Managed and implemented innovative feature flipping mechanism for a client‑facing product release
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </div>
            </div>
        </>
    )
}
export default DigitalOcean;