import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Grid from '../common/Grid';
import Noticia from '../components/Noticia';
import WhatsappIcon from '../common/WhatsappIcon';
import Layout from '../common/Layout';

const IndexPage = ({data}) => {
  const noticias = data.allDatoCmsNews.nodes;
  const quantNoticias = noticias.length;

  return (
    <Layout>
      <Navbar></Navbar>
      <Grid style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <section className="noticia">
        {
        noticias[0]===undefined ?
        <p style={{marginTop: "8rem"}}>Ainda não foram adicionadas notícias.</p>
        :
        noticias.map((noticia,index) =>{
          return(
          <>
          <Noticia h1={noticia.titulo} data={noticia.meta.createdAt} to={`/noticia/${noticia.slug}`}>
            <GatsbyImage image={noticia.imagem.gatsbyImageData} className="noticia__image" alt={noticia.titulo}/>
          </Noticia>
          {index !== quantNoticias-1 ? 
          <div className="separaNoticia"></div>
          : null}
          </>)
        })}
        </section>
      </Grid>
      <WhatsappIcon></WhatsappIcon>
      <Footer></Footer>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query NoticiasQuery {
  allDatoCmsNews(sort: { fields: slug, order: DESC }) {
    nodes {
      slug
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
}
`;