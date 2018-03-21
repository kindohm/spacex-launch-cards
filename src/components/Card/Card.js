import React from "react";

const Card = ({ flightNumber, date, siteName, rocketName, rocketType, payload, success, missionPatchUrl, details, redditUrl, videoUrl, articleUrl }) => (
    <div className="card horizontal">
        <div className="card-image">
            <img className="card-img-top" style={{ maxWidth: '300px' }} alt={flightNumber} src={missionPatchUrl} />
        </div>
        <div className="card-stacked">
            <div className="card-content">
                <h3 className="card-title">Flight Number: {flightNumber}</h3>
                <p className="card-text">{details}</p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Date:</strong> {date}</li>
                    <li className="list-group-item"><strong>Launch Site:</strong> {siteName}</li>
                    <li className="list-group-item"><strong>Rocket:</strong> {rocketName}</li>
                    <li className="list-group-item"><strong>Rocket Type:</strong> {rocketType}</li>
                    <li className="list-group-item"><strong>Payload(s):</strong> {payload}</li>
                    <li className="list-group-item"><strong>Success:</strong> {success ? "yes" : "no"}</li>
                </ul>
            </div>
            <div className="card-action">
                {redditUrl && <a className="card-link" href={redditUrl}>Reddit Campaign</a>}
                {videoUrl && <a className="card-link" href={videoUrl}>Video</a>}
                {articleUrl && <a className="card-link" href={articleUrl}>Article</a>}
            </div>
        </div>
    </div>

);

export default Card