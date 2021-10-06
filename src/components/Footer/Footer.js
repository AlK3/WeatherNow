import { Button } from '@material-ui/core';
import React from 'react';
import { StyledFooter } from './StyledFooter';
import { useTranslation } from 'react-i18next';
import '../../i18next';

export const Footer = () => {
  const {i18n} = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <StyledFooter>
      <Button onClick={() => changeLang('ru')}>русский</Button>
      <Button onClick={() => changeLang('en')}>english</Button>
    </StyledFooter>
  );
}