import React, { useState } from 'react';
import { FaHeart, FaMapMarkerAlt, FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa'; 

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className='bar'>
      <div className="bg-secondary text-center py-2">
        <p className="text-white m-0">Menswear in London</p>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="http://menswearoflondon.com/cdn/shop/files/Logo_4_Menol_60x.png?v=1631542826" alt="MENOL Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item ms-5">
                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link text-white" href="#">Brand</a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link text-white" href="#">Clothing</a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link text-white" href="#">Sports</a>
              </li>
              <li className="nav-item dropdown ms-5">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Summer Special
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Shirt</a></li>
                  <li><a className="dropdown-item" href="#">Pants</a></li>
                  <li><a className="dropdown-item" href="#">Shoes</a></li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <FaSearch onClick={toggleSearch} style={{ cursor: 'pointer', marginLeft: '10px', color: 'white' }} />
            <FaHeart className="ms-5 text-white" style={{ cursor: 'pointer' }} /> 
            <FaUser className="ms-5 text-white" style={{ cursor: 'pointer' }} /> 
            <FaShoppingBag className="ms-5 text-white" style={{ cursor: 'pointer' }} /> 
            <FaMapMarkerAlt className="ms-5 text-white" style={{ cursor: 'pointer' }} /> 
            {showSearch && (
              <form className="d-flex ms-3" role="search"> 
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success text-white" type="submit">Search</button>
              </form>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
