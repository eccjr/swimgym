import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Grid from '../common/Grid';
import WhatsappIcon from '../common/WhatsappIcon';
import Card from '../components/Card';
import Layout from '../common/Layout';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Navbar></Navbar>
      <Grid>
        <div class="modalidadesCards">
          {
            data.allDatoCmsModalidade.nodes[0] === undefined ?
              <p style={{marginBottom: "2rem"}} >Ainda não foram adicionadas modalidades.</p>
            :
              data.allDatoCmsModalidade.nodes.map(modalidade => (
                <Card path={"/modalidade/" + modalidade.slug}>
                  <Link to={"/modalidade/" + modalidade.slug}>
                    <GatsbyImage image={modalidade.imagem.gatsbyImageData} className="card__image" alt={modalidade.titulo}/>
                  </Link>
                  <h1 className="card__title">{modalidade.titulo}</h1>
                  <p className="card__texto">{modalidade.descricao}</p>
                </Card>
          ))}
        </div>
      </Grid>
      <WhatsappIcon></WhatsappIcon>
      <Footer></Footer>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query MyQuery {
  allDatoCmsModalidade(sort: { fields: slug, order: ASC }) {
    nodes {
      slug
      titulo
      descricao
      imagem {
        gatsbyImageData
      }
    }
  }
}
`;
