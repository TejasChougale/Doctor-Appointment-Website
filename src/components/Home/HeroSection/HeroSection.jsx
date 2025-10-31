import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div>
                    <small>TOTAL HEALTH CARE SOLUTION</small>
                    <h1>Trusted <br />Health Partner</h1>
                    <small>Doctors are essential healthcare professionals who dedicate their expertise to diagnosing, treating,<br /> and preventing illnesses, playing a crucial role in safeguarding and improving human well-being.</small>
                </div>
                <div className="d-flex justify-content-start gap-2">
                    <Link to={'/doctors'} className="btn-get-started scrollto">Get Started</Link>
                    <Link to={'/track-appointment'} className="btn-get-started scrollto">Track Appointment</Link>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;