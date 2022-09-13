import React from 'react';
import Layout from '../common/Layout';
import Navbar from '../common/Navbar';
import Grid from '../common/Grid';
import Success from '../components/Success'

export default function SuccessPage() {
  return (
    <Layout>
      <Navbar></Navbar>
      <Grid style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Success />
      </Grid>
    </Layout>
  );
}
