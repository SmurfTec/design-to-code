import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Logo } from '../Logo';
import { Dialog, Divider, Drawer, Link, List, ListItem } from '@mui/material';
import { NavbarList, NavBarRoot, NavDrawerList, NavLink } from './styled';
import { MHidden } from '../custom/MHidden';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

// const navItems = ['Portfolio', 'About Us', 'Blog', 'Contact Us'];

const navItems = [
  {
    label: 'Portfolio',
    url: '/#portfolio',
  },
  {
    label: 'About Us',
    url: '/about-us',
  },
  {
    label: 'Blog',
    url: '/',
  },
  {
    label: 'Contact Us',
    url: '/#contact-us',
  },
];

function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleSideBar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <AppBar
        position='sticky'
        color='inherit'
        sx={{
          boxShadow: '0 0 3px 1px #0003',
        }}
      >
        <Container maxWidth='lg'>
          <Toolbar disableGutters>
            <NavBarRoot>
              <Logo sx={{ maxWidth: 175 }} />
              <MHidden type='up' value='sm'>
                <IconButton
                  size='small'
                  aria-label='drawer-menu'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={toggleSideBar}
                  color='inherit'
                >
                  <MenuIcon />
                </IconButton>
              </MHidden>
              <MHidden type='down' value='sm'>
                <NavbarList>
                  {navItems.map((navItem) => (
                    <NavLink href={navItem.url} key={navItem.label}>
                      {navItem.label}
                    </NavLink>
                  ))}
                </NavbarList>
              </MHidden>
            </NavBarRoot>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor='left'
        onClose={toggleSideBar}
        open={open}
        sx={{
          width: 230,
          flexShrink: 0,
        }}
      >
        <Box
          p={2}
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          gap={3}
        >
          <Logo sx={{ maxWidth: 150 }} />
          <IconButton onClick={toggleSideBar} size='small'>
            <ArrowBackIosNewIcon fontSize='small' />
          </IconButton>
        </Box>
        <Box sx={{ backgroundColor: '#fff' }}>
          <Divider />
        </Box>

        <Box mt={4} />

        <NavDrawerList>
          {navItems.map((navItem) => (
            <NavLink
              href={navItem.url}
              key={navItem.label}
              onClick={toggleSideBar}
            >
              <ListItem button>
                <Typography variant='subtitle1'>{navItem.label}</Typography>
              </ListItem>
            </NavLink>
          ))}
        </NavDrawerList>
      </Drawer>
    </React.Fragment>
  );
}
export default NavBar;
