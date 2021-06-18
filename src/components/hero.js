import React, { useState } from 'react';

function Hero() {
    return (
        <div>
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <h1>Welcome to Medilab</h1>
                    <h2>We are team of talented designers making websites with Bootstrap</h2>
                    <a href="#about" className="btn-get-started scrollto">Get Started</a>
                </div>
            </section>
        </div>
    );
}

export default Hero