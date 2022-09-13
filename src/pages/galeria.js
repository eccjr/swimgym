import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import WhatsappIcon from '../common/WhatsappIcon';
import Foto from '../components/Foto';
import Grid from '../common/Grid';
import Layout from '../common/Layout';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Navbar></Navbar>
      <Grid>
        <section className="galeria">
          <h1>galeria de fotos</h1>
          <div className="galeria__fotos">
            {
            data.allDatoCmsAlbum.nodes[0]===undefined ?
            <p>Ainda não foram adicionados albuns.</p>
            :
            data.allDatoCmsAlbum.nodes.map(album => (
              <Foto to={"/album/" + album.slug} h2={album.titulo} p={album.imagens.length === 1 ? album.imagens.length + " foto" : album.imagens.length + " fotos"}>
                <GatsbyImage image={album.imagens[0].gatsbyImageData} className="foto__img" alt=""/>
              </Foto>
            ))}
          </div>
        </section>
      </Grid>
      <WhatsappIcon></WhatsappIcon>
      <Footer></Footer>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query GaleriaQuery{
  allDatoCmsAlbum(sort: { fields: slug, order: ASC }) {
    nodes {
      titulo
      slug
      imagens {
        gatsbyImageData
      }
    }
  }
}
`;
