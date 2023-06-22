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
import { useNavigate } from 'react-router-dom'
import { Divider } from "@mui/material";
import { Logout } from "@mui/icons-material";

function Header() {
  const navigate = useNavigate()
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const menu = [
    {
      label: "Home",
      link: "/dashboard",
    },
    {
      label: "Profile",
      link: "/profile",
    },
    {
      label: 'Plan a Travel',
      link: '/dashboard/createTravel'
    },
    {
      label: "Wishlist",
      link: "/error",
    },
    {
      label: 'My Travels',
      link: '/profile/myTravels'
    }
  ]

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const logOut = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

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
          <IconButton disabled
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
              sx={{ mt: "70px", height:'100%', width:'100%', backdropFilter: 'blur(2px)' }}
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
              {menu.map((item) => (
                <MenuItem key={item.label}>
                  <Link to={item.link}>
                    <Typography textAlign="center">{item.label}</Typography>
                  </Link>
                </MenuItem>
              ))}
              <Divider variant="middle" />
                <MenuItem>
                  <Typography onClick={() => logOut()} textAlign="center" color='red' sx={{display:'flex', alignItems:'center'}}>Log out &nbsp;<Logout fontSize="small"/> </Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
