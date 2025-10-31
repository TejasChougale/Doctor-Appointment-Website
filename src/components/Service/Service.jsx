import React from 'react'
import SubHeader from '../Shared/SubHeader'
import Footer from '../Shared/Footer/Footer'
import Header from '../Shared/Header/Header'
import { Link } from 'react-router-dom'
import doctorBg from '../../images/img/doctors-bg.jpg';

const Service = () => {
  const weArePleaseStyle = {
    backgroundColor: "antiquewhite",
    height: "60vh",
    background: `url(${doctorBg}) no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    padding: "10px",
    position: "relative",
    marginTop: 200,
    marginBottom: 100
  };

  const departments = [
    {
      img: "https://storage.googleapis.com/treatspace-prod-media/pracimg/u-564/image_IG6hkZD.jpeg",
      title: "Pediatrics",
      description: "Specialized care for infants, children, and adolescents."
    },
    {
      img: "https://southdenver.com/wp-content/uploads/2021/02/cardiology-treatment-1536x1025.jpg",
      title: "Cardiology",
      description: "Expert heart care and cardiovascular treatments."
    },
    {
      img: "https://www.hmcmedicalcenter.com/wp-content/uploads/2021/04/dermatologyappointment.jpg",
      title: "Dermatology",
      description: "Comprehensive skin, hair, and nail care solutions."
    },
    {
      img: "https://www.verywellhealth.com/thmb/vkLIwV8lYZhJDLjXOTYdQQAHUL8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/doctor-operating-on-leg-in-operating-room-124206089-090c5adb1b27422dbd02a94237a59f53.jpg",
      title: "Orthopedics",
      description: "Advanced bone and joint care for all ages."
    },
    {
      img: "https://www.gmrwebteam.com/images/gynecology-banner.jpg",
      title: "Gynecology",
      description: "Women's health services including pregnancy care."
    },
    {
      img: "https://www.lineurology.com/wp-content/uploads/2022/07/Why-See-a-Neurologist-After-a-Stroke.jpg",
      title: "Neurology",
      description: "Diagnosis and treatment for brain and nervous system."
    }
  ];

  return (
    <>
      <Header />
      <SubHeader title="Service" subtitle="We provide comprehensive healthcare services, encompassing diagnosis, treatment, prevention, and ongoing management of your health needs." />

      <div className="container" style={{ marginTop: 200, marginBottom: 100 }}>
        <div className="row">
          {departments.map((dept, id) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={id}>
              <div className="card shadow border-0 mb-5">
                <img
                  src={dept.img}
                  alt={dept.title}
                  className="img-fluid"
                  style={{ maxHeight: '17rem', objectFit: 'cover' }}
                />
                <div className="p-2">
                  <h4 className="mt-4 mb-2">{dept.title}</h4>
                  <p className="mb-4">{dept.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section style={weArePleaseStyle}>
        <div className="container" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <div className="row">
            <div className="col-lg-7">
              <div className="d-flex align-items-center">
                <div className='mb-4 section-title text-center'>
                  <h2 className='text-uppercase'>We are pleased to offer you the</h2>
                  <p className='form-text'>Discover specialized care tailored to your needs, delivered with compassion and expertise.</p>
                  <Link to={'/doctors'} className="btn-get-started scrollto">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Service;
