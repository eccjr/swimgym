import * as React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Grid from '../common/Grid';
import QuemSomos from '../components/QuemSomos';
import WhatsappIcon from '../common/WhatsappIcon';
import Layout from '../common/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <Navbar></Navbar>
      <Grid>
        <QuemSomos></QuemSomos>
      </Grid>
      <WhatsappIcon></WhatsappIcon>
      <Footer></Footer>
    </Layout>
  )
}

export default IndexPage
