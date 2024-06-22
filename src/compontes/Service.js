import React from 'react';

const ServicesPage = () => {
  return (
    <div className="container-fluid p-0">
        
      <div className="position-relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-100"
          style={{ height: 'calc(100vh - 80px)', objectFit: 'cover', marginTop: '80px' }}
          poster="http://menswearoflondon.com/cdn/shop/files/Logo_4_Menol_60x.png?v=1631542826"
        >
          <source
            src="https://media.istockphoto.com/id/1338612954/video/several-female-models-walking-in-row-on-fashionable-luxury-vogue-show-runway.mp4?s=mp4-640x640-is&k=20&c=pa9oP7y072QiXMQjTpmppoWEGM2UuNVY2DozuXAKB5M="
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="text-white position-absolute top-0 start-0 m-3">
          <p className="fs-5">London Fashion Week 2024</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
