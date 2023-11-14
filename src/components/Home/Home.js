import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import planetImage from '../assets/planets.jpg';
import vehicleImage from '../assets/vehicles.jpg';
import '../style/Home.css';

const Home = () => {
  const renderContent = () => {
    return (
      <>
        <Typography variant="h5" component="div" sx={{ fontFamily: 'sans-serif' }}>
          <div className="home-section">
            Our problem is set in the planet of Lengaburu...in the distant distant
            galaxy of Tara B. After the recent war with neighbouring planet
            Falicornia, King Shan has exiled the Queen of Falicornia for 15
            years. Queen Al Falcone is now in hiding. But if King Shan can find her
            before the years are up, she will be exiled for another 15 years....
            <img src={planetImage} width="100%" alt="PlanetImage" loading="lazy" />
            Help King Shan to choose the planets to search, and the vehicles to
            use in
            <Link className="link" to="/problem" sx={{ textDecoration: 'none' }}>
              <Button sx={{ fontFamily: 'sans-serif', fontSize: '25px' }}>
                {' '}
                Finding falcone
              </Button>
            </Link>
            <img src={vehicleImage} width="100%" alt="PlanetImage" loading="lazy" />
          </div>
        </Typography>
      </>
    );
  };

  const renderHome = () => {
    return (
      <Box sx={{ width: '100%', marginBottom: '10px', marginTop: '10px' }}>
        {renderContent()}
      </Box>
    );
  };

  return <>{renderHome()}</>;
};

export default Home;
