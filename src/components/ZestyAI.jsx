import zestyai from '../pictures/zestyai.png'

const ZestyAI = () => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <li className="ul-li-child">
                        <div className="accordion" id="zestyai-exp">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="zaiHeading">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#zestyai-tasks" aria-expanded="true" aria-controls="morno-tasks">
                                        <div className="row">
                                            <div className="col-md-2 logo-container">
                                                <img className="company-logo card-img" alt="ZestyAI" src={zestyai} />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">Software Engineer II @ ZestyAI</h5>
                                                    <h6 className="card-subtitle mb-2">Remote</h6>
                                                    <h6 className="card-subtitle mb-2 text-muted">05/2023 - 09/2023</h6>
                                                    <p className="card-text tasks">
                                                        <b>Technology:</b> Python, Docker, BigQuery, GCS

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div id="zestyai-tasks" className="accordion-collapse collapse" aria-labelledby="zaiHeading" data-bs-parent="#zestyai-exp">
                                    <div className="accordion-body">
                                        <ul className="tasks">
                                            <li>
                                                Improved QA for roof modelling features: ensured consistency across ML outputs, improving User Experience
                                                {/* //Implemented new rules, fixed some old rules. Output of one model is given to another and they run like a chain
                                                to create a big json with the data about the roof of a property */}
                                            </li>
                                            <li>
                                                Migrated a Prefect job from v1 to v2, decreased its running time by 10 seconds by removing an extra step
                                                {/* This was a data-intensive workflow which syncs at least every week */}
                                            </li>
                                            <li>Decreased the analysis time for certain properties by 70% by optimizing the input data preprocessing, specifically by cropping the image used as an input for machine learning models</li>
                                            {/* Cropped the image size that serves as an input into the ML models. */}
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
export default ZestyAI;