import React, { useState } from 'react';
import data from '../Json/About.json';

function About() {
    const [aboutData, setAboutData] = useState(data);

    return (
        <div className="container my-4">
            <div className="row g-4">
                {aboutData.map((data, index) => (
                    <div className="col-md-6" key={index}>
                        <div className="card h-100 shadow-sm border-0">
                            <div className="row g-0">
                                {/* Image Box */}
                                <div className="col-md-4">
                                    <img
                                        src={data.images}
                                        className="img-fluid rounded-start img-thumbnail"
                                        alt="Images"
                                    />
                                </div>
                                {/* Content Box */}
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">{data.title}</h5>
                                        <p className="card-text">{data.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;
