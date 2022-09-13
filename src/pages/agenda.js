import * as React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import WhatsappIcon from '../common/WhatsappIcon';
import Agenda from '../components/Agenda';
import Grid from '../common/Grid';
import Layout from '../common/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <Navbar></Navbar>
      <Grid>
        <Agenda></Agenda>
      </Grid>
      <WhatsappIcon></WhatsappIcon>
      <Footer></Footer>
      </Layout>
  )
}

export default IndexPage
