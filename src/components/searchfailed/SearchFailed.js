import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import HomeIcon from '@mui/icons-material/Home';
import ufo from '../assets/ufo.gif';
import '../style/SearchFailed.css';

const SearchFailed = () => {
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    localStorage.clear();
    navigate('/problem');
  };

  const handleGoHome = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  const renderGameOver = () => {
    return (
      <div className="gameOver">
        <Box className="gameOverBox">
          <Button variant="contained" style={{ position: 'absolute', left: 150 }} onClick={handlePlayAgain}>
            <RotateLeftIcon /> Play Again
          </Button>
          <Button variant="contained" style={{ position: 'absolute', right: 150 }} onClick={handleGoHome}>
            <HomeIcon /> Home
          </Button>
          <h3 style={{ color: 'red', fontSize: '25px' }}>
            <span>Game Over</span>
          </h3>
          <h3 style={{ color: 'white', fontSize: '25px' }}>You try again. You fail better.</h3>
          <img src={ufo} width="90%" alt="PlanetImage" loading="lazy" style={{}} />
        </Box>
      </div>
    );
  };

  const renderSearchFailed = () => {
    return (
      <Box sx={{ width: '100%', marginBottom: '10px', marginTop: '10px' }}>
        <Typography variant="h5" style={{ color: '#13253A', fontFamily: 'sans-serif' }}>
          Welcome to the captivating world of Lengaburu in the galaxy of Tara B...
          (Your detailed message here)
        </Typography>
        <Button variant="outlined" onClick={handlePlayAgain}>
          Let the adventure begin!
        </Button>
      </Box>
    );
  };

  const showGameOver = localStorage.getItem('status') === 'false';

  return showGameOver ? renderGameOver() : renderSearchFailed();
};

export default SearchFailed;
