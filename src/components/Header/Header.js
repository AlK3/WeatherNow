import React from 'react';
import { Button, Container, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { StyledHeader } from './Header.styles';
import { useTranslation } from 'react-i18next';
import '../../i18next';
import { OutlinedButton } from '../Button/Button.styles';
import { Heading } from '../Heading/Heading.styles';

export const Header = () => {
  const {t} = useTranslation();
  
  return (
    <StyledHeader>
      <Container fixed>
        <Toolbar>
          <Heading style={{flexGrow: 1}}>{t('header.title')}</Heading>
          <OutlinedButton component={Link} to="/about">{t('header.button')}</OutlinedButton>
        </Toolbar>
      </Container>
    </StyledHeader>
  );
}