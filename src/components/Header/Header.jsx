import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../assets/logo/white.png";
import { Link } from "react-router-dom";



function Header() {
 
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const settings = [
    {
      label: 'Home',
      link: '/dashboard'
    },
    {
      label: 'Profile',
      link: '/profile'
    },
    {
      label: 'Plan a Travel',
      link: '/createTravel'
    },
    {
      label: 'Wishlist',
      link: '/wishlist'
    },
    {
      label: 'My Travels',
      link: '/myTravels'
    }
  ]

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" elevation={15} sx={{width: '100%', maxHeight: "9%", diplay:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
      <Toolbar
        disableGutters
        sx={{height: '100%' , padding: '8px', width: '100%'}}
      >
        
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          textAlign={{ xs: "center", width: '100%', }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <Avatar src={Logo}></Avatar>
          </IconButton>
          <Typography
            variant="h5"
            Wrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: "flex",
              justifyContent:'center',
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "calc(4px + 0.8vw)",
            }}
          >
            Join the Travel Revolution
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "70px", height:'80%', width:'455px', backdropFilter: 'blur(2px)' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.label}>
                  <Link to={setting.link}>
                    <Typography textAlign="center">{setting.label}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
