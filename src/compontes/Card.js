import React from 'react';

const Card = () => {
  return (
    <div className="card-container">
        <div className="testimonial-heading text-center">
              <h2>Summer Collection</h2>
            </div>
      <div className="row row-cols-1 row-cols-md-4 g-2">
        <div className="col">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1581381685617-4dc270458aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbnN3ZWFyJTIwbG9uZGF8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="Image 1" />
            <div className="card-overlay">
              <p>Full Back Wear</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1552252059-9d77e4059ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbnN3ZWFyJTIwbG9uZGF8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="Image 2" />
            <div className="card-overlay">
              <p>White Plane shirt</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbnN3ZWFyJTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="Image 3" />
            <div className="card-overlay">
              <p>Black Royal Watch</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1537261131936-3cdff36a1ac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnN3ZWFyJTIwc2hvc2V8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="Image 4" />
            <div className="card-overlay">
              <p>Comfort Shose</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
