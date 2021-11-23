import React from 'react';
import { Spacer } from '../components/Spacer/Spacer';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Main } from '../components/Main/Main';
import { useTranslation } from 'react-i18next';
import '../i18next';

export const Contacts = () => {
  const {t} = useTranslation();

  return (
    <>
      <Header />
      <Main>
        <Spacer margin={5} />
        {t('contacts.address')}<br />
        {t('contacts.management')}<br />
        {t('contacts.phone')}<br />
        {t('contacts.fax')}<br />
        {t('contacts.email')}<br />
        {t('contacts.humanresdepartament')}<br />
        {t('contacts.accountingdepartament')}<br />
        {t('contacts.postgraduatestudies')}<br />
        {t('contacts.pressservice')}<br />
        {t('contacts.office')}<br />
        {t('contacts.webadmin')}<br />
      </Main>
      <Footer />
    </>
  );
}