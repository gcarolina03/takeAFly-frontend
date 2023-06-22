import React from 'react';
import { BottomNavigation, BottomNavigationAction, Divider } from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InfoIcon from '@mui/icons-material/Info';
import PolicyIcon from '@mui/icons-material/Policy';
import { useTheme } from "@emotion/react";

function Footer() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <footer  style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 100 }}>
    <BottomNavigation value={value} onChange={handleChange} sx={{
      backgroundColor: theme.palette.primary.main,
      width: '100%',
      padding:'2px'}} >
            <style>
        {`
          .MuiBottomNavigationAction-label,
          .MuiBottomNavigationAction-icon {
            color: white;
          }
        `}
      </style>
      <BottomNavigationAction showLabel label="Contact Us" icon={<ContactMailIcon style={{ color: 'white' }} />} />
      <Divider />
      <BottomNavigationAction showLabel label="About Us" icon={<InfoIcon style={{ color: 'white' }}  />} />
      <Divider />
      <BottomNavigationAction showLabel label="Legal Warning" icon={<PolicyIcon style={{ color: 'white' }}  />} />
      <Divider />
    </BottomNavigation>
    </footer>
  );
}

export default Footer;
