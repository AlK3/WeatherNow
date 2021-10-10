import React from 'react';
import { StyledFooter } from './Footer.styles';
import { useTranslation } from 'react-i18next';
import '../../i18next';
import { TextButton } from '../Button/Button.styles';

export const Footer = () => {
  const {i18n} = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <StyledFooter>
      <TextButton onClick={() => changeLang('ru')}>русский</TextButton>
      <TextButton onClick={() => changeLang('en')}>english</TextButton>
    </StyledFooter>
  );
}