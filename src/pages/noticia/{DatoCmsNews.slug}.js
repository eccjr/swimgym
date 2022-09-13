import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';
import Grid from '../../common/Grid';
import Noticia from '../../components/Noticia';
import WhatsappIcon from '../../common/WhatsappIcon';
import Layout from '../../common/Layout';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Navbar></Navbar>
      <Grid style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="noticia">
          <Noticia h1={data.datoCmsNews.titulo} data={data.datoCmsNews.meta.createdAt} desc={data.datoCmsNews.conteudo}>
            <GatsbyImage image={data.datoCmsNews.imagem.gatsbyImageData} className="noticia__image" alt="" />
          </Noticia>
        </div>
      </Grid>
      <WhatsappIcon></WhatsappIcon>
      <Footer></Footer>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query NoticiaBySlug($id: String) {
  datoCmsNews(id: { eq: $id }) {
    titulo
    conteudo
    meta {
      createdAt(formatString: "D-M-Y")
    }
    imagem {
      gatsbyImageData
    }
  }
}
`;