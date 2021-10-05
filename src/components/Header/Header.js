import React from 'react';
import { Button, Container, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { StyledHeader } from './StyledHeader';
import { useTranslation } from 'react-i18next';
import '../../i18next';

export const Header = () => {
  const {t} = useTranslation();
  
  return (
    <StyledHeader>
      <Container fixed>
        <Toolbar>
          <Typography variant='h5' style={{flexGrow: 1}}>{t('header.title')}</Typography>
          <Button color='inherit' style={{marginRight: '.5rem'}} variant='outlined' component={Link} to="/about">{t('header.button')}</Button>
        </Toolbar>
      </Container>
    </StyledHeader>
  );
}