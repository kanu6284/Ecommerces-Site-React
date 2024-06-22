import React from 'react';

const Carosal = () => {
  return (
    <div>
        
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000"> 
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://media.istockphoto.com/id/956924278/photo/indian-businessman-in-vintage-clothes.webp?s=2048x2048&w=is&k=20&c=lzB2WphO2JIAcsf7gFiueTIY8SJRHjVN4gU8hj6bHXU="
              className="d-block w-100 carousel-image"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Elegant Men's Wear</h5>
              <p>Discover the latest trends in men's fashion.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/888946762/photo/he-will-see-you-later.webp?s=2048x2048&w=is&k=20&c=YQNApQXG3HTdxZ2wtkLJZmvscrfst4uk0jnOfWt89mk="
              className="d-block w-100 carousel-image"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Stylish Outfits</h5>
              <p>Perfect for any occasion.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/638385938/photo/mens-accessories-organized-on-table-in-knolling-arrangement.webp?s=2048x2048&w=is&k=20&c=uRljJeF8G2osMhyZTg5Rxt1X_RgYemoTM4ukPfdgYl4="
              className="d-block w-100 carousel-image"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Classic Collection</h5>
              <p>Timeless pieces for your wardrobe.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carosal;
