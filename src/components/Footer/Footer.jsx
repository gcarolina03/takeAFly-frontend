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
    <BottomNavigation value={value} onChange={handleChange} sx={{backgroundColor: theme.palette.primary.main, color:'white', width: '100%',}} >
      <BottomNavigationAction label="Contact Us" icon={<ContactMailIcon />} />
      <Divider />
      <BottomNavigationAction label="About Us" icon={<InfoIcon />} />
      <Divider />
      <BottomNavigationAction label="Legal Warning" icon={<PolicyIcon />} />
      <Divider />
    </BottomNavigation>
  );
}

export default Footer;
