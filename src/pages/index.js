import * as React from 'react';
import Navbar from '../common/Navbar';
import MainImage from '../components/MainImage';
import Grid from '../common/Grid';
import ContactBox from '../components/ContactBox';
import Footer from '../common/Footer';
import ModalidadesSecao from '../components/ModalidadesSecao';
import AcademiaFamilia from '../components/AcademiaFamilia';
import UltimasNoticias from '../components/UltimasNoticias';
import Cadastrese from '../components/Cadastrese';
import WhatsappIcon from '../common/WhatsappIcon';
import Layout from '../common/Layout';
import './main.scss';

// markup
export default function Index() {
  return (
    <Layout>
      <Navbar></Navbar>
      <MainImage></MainImage>
      <ContactBox></ContactBox>
      <Grid>
      <ModalidadesSecao></ModalidadesSecao>
      <AcademiaFamilia></AcademiaFamilia>
      <UltimasNoticias></UltimasNoticias>
      <Cadastrese></Cadastrese>
      </Grid>
      <WhatsappIcon></WhatsappIcon> 
      <Footer></Footer>
    </Layout>
  );
}