import React from 'react';
import { Button, Container, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { StyledHeader } from './StyledHeader';

export const Header = () => {
  
  return (
    <StyledHeader>
      <Container fixed>
        <Toolbar>
          <Typography variant='h5' style={{flexGrow: 1}}>Теперича о погоде</Typography>
          <Button color='inherit' style={{marginRight: '.5rem'}} variant='outlined' component={Link} to="/about">И о сайте</Button>
        </Toolbar>
      </Container>
    </StyledHeader>
  );
}