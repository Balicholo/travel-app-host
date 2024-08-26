import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const VansDetails = () => {
  const location = useLocation();
  const { van } = location.state || {};

  // Set the active choice
  const activeChoice = "Vans";

  // State to manage selected tab
  const [selectedTab, setSelectedTab] = useState('Details');

  const renderSelectedInfo = () => {
    switch (selectedTab) {
      case 'Details':
        return (
          <>
            <p><span>Name:</span> {van.name}</p>
            <p><span>Category:</span> {van.type}</p>
            <p><span>Description:</span> {van.description}</p>
            <p><span>Visibility:</span> {van.type}</p>
          </>
        );
      case 'Pricing':
        return (
          <p><span>Price:</span> {van.price} /day</p>
        );
      case 'Photos':
        return (
          <div className="car-picture">
            <img src={van.img} alt={van.name} style={{ width: '200px', height: '200px' }} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='vans-details-page'>
      {/* Navigation Choices */}
      <div className='choices-nav'>
        {['Dashboard', 'Income', 'Vans', 'Reviews'].map((choice) => (
          <Link
            key={choice}
            to={`/${choice.toLowerCase()}`} // This will generate paths like /dashboard, /income, /reviews
            className={`choice ${activeChoice === choice ? 'active' : ''}`}
          >
            {choice}
          </Link>
        ))}
      </div>
      
      {/* Van Details Section */}
      {van ? (
        <div className='van-details'>
          {/* Back Link */}
          <Link to="/" className="back-link">
            <i className="ri-arrow-left-line"></i>Back to all vans
          </Link>
          
          {/* Van Information */}
          <div className='van-info'>
            <div className='van-details-wrapper'>
                
              <div className='car-picture'>
                <img src={van.img} alt={van.name}/>
              </div>
          
              <div>
                <p className='van-type'>{van.type}</p>
                <p className='name-van'>{van.name}</p>
                <p className='van-price'>{van.price} <span>/day</span></p>
              </div>
          
            </div>
            
            {/* Selection Navigation */}
            <div className='selection-nav'>
              {['Details', 'Pricing', 'Photos'].map((tab) => (
                <p
                  key={tab}
                  className={`${selectedTab === tab ? 'active-tab' : ''}`}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab}
                </p>
              ))}
            </div>
            
            {/* Selected Info */}
            <div className='selected-info'>
              {renderSelectedInfo()}
            </div>
            
          </div>

        </div>
      ) : (
        <p>Van not found</p>
      )}
    </div>
  );
};

export default VansDetails;
