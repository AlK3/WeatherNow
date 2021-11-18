import React, { useState } from 'react';
import { Container, Divider, IconButton, List, ListItem, SwipeableDrawer, Toolbar } from '@material-ui/core';
import { StyledHeader } from './Header.styles';
import { useTranslation } from 'react-i18next';
import '../../i18next';
import { Heading } from '../Heading/Heading.styles';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from '../Link/Link';

export const Header = () => {
  const {t} = useTranslation();
  const [open, setOpen] = useState(false);
  const routes = [
    { route: '/about', title: t('header.about') },
    { route: '/ocean', title: t('header.ocean') },
    { route: '/weather', title: t('header.weather') },
    { route: '/contacts', title: t('header.contacts') },
    { route: '/articles', title: t('header.articles') },
    { route: '/news', title: t('header.news') },
  ];
  
  return (
    <StyledHeader>
      <Container fixed>
        <Toolbar>
          <Heading style={{flexGrow: 1}}>{t('header.title')}</Heading>
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <SwipeableDrawer anchor={'right'} open={open} onClose={() => {}} onOpen={() => {}}>
        <div style={{width: '200px'}}>
          <IconButton onClick={() => setOpen(false)}>
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {routes.map(route => {
            return (
              <ListItem>
                <Link to={route.route}>
                  {route.title}
                </Link>
              </ListItem>
            );
          })}
        </List>
      </SwipeableDrawer>
    </StyledHeader>
  );
}