import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';
import Grid from '../../common/Grid';
import Modalidade from '../../components/Modalidade';
import WhatsappIcon from '../../common/WhatsappIcon';
import Layout from '../../common/Layout';

const IndexPage = ({data}) => {
  return (
    <Layout>
      <Navbar></Navbar>
      <Grid>
        <Modalidade h1={data.datoCmsModalidade.titulo} texto={data.datoCmsModalidade.descricaocompleta}>
          <GatsbyImage image={data.datoCmsModalidade.imagem.gatsbyImageData} className="modalidade__content__image" alt={data.datoCmsModalidade.titulo}/>
        </Modalidade>
      </Grid>
      <WhatsappIcon></WhatsappIcon>
      <Footer></Footer>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query ModalidadeBySlug($id: String) {
  datoCmsModalidade(id: { eq: $id }) {
    titulo
    descricaocompleta
    imagem {
      gatsbyImageData
    }
  }
}
`;