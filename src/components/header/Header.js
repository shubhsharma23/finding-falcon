import React from 'react';
import { Box, Typography, Button, Link } from '@mui/material';

const Header = () => {
  const handleHomeLinkClick = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link
        component="h1"
        variant="h4"
        underline="none"
        sx={{ marginLeft: '15px', cursor: 'pointer' }}
        onClick={handleHomeLinkClick}
      >
        Finding Falcone
      </Link>
      <Box>
        <Button
          variant="text"
          sx={{ color: 'green', fontSize: '20px' }}
          href="https://www.geektrust.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GeekTrust 
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
