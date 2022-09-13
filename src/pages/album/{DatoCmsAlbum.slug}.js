import * as React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';
import Grid from '../../common/Grid';
import WhatsappIcon from '../../common/WhatsappIcon';
import Layout from '../../common/Layout';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Navbar></Navbar>
      <Grid>
        <section className="album">
          <h1>galeria de fotos</h1>
          <Link to="/galeria">Galeria</Link> » {data.datoCmsAlbum.titulo}
          {data.datoCmsAlbum.imagens.map(imagem => (
            <div className="album__image">
              <GatsbyImage image={imagem.gatsbyImageData} className="album__image__img" alt=""/>
            </div>
          ))}
        </section>
      </Grid>
      <WhatsappIcon></WhatsappIcon>
      <Footer></Footer>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query AlbumQuery($id: String) {
  datoCmsAlbum(id: { eq: $id }) {
    titulo
    slug
    imagens {
      gatsbyImageData(
        width:10000
      )
    }
  }
}
`;
