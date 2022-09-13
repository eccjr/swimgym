import React from 'react';
import Card from '../Card';
import { Link } from 'gatsby';
import { StaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function UltimasNoticias(props) {
  return (
    <div className="UltimasNoticias-c">
      <div className="UltimasNoticias-c__etiqueta">
        <span>ÚLTIMAS NOTÍCIAS</span>
      </div>
      <div className="noticias">
        <StaticQuery
          query={graphql`
              query UltimasNoticiasQuery {
                allDatoCmsNews(sort: { fields: slug, order: DESC },limit:1) {
                  nodes {
                    slug
                    titulo
                    conteudo
                    imagem {
                      gatsbyImageData
                    }
                  }
                }
              }
            `}
          render={data => (
            data.allDatoCmsNews.nodes[0]===undefined ?
            <p>Ainda não foram adicionadas notícias.</p>
            :
            data.allDatoCmsNews.nodes.map(noticia => (
              <Card  path={`/noticia/${noticia.slug}`}>
                <Link to={`/noticia/${noticia.slug}`}>
                <GatsbyImage image={noticia.imagem.gatsbyImageData} className="card__image" alt={noticia.titulo}/>
                </Link>
                <h1 className="card__title">{noticia.titulo}</h1>
                <p className="card__texto">{noticia.conteudo}</p>
              </Card>
            ))
          )} />

      </div>
    </div>
  )
}