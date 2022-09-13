import React from 'react';
import HoverIcon from '../../common/HoverIcon';
import Button from '../../common/Button';
import { Link } from 'gatsby';
import { StaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
export default function ModalidadesSecao() {
  return (
    <div className="modos-c">
      <div className="modos-c__etiqueta">
        <span>Modalidades</span>
      </div>
        <div className="modalidades">
          <StaticQuery
            query={graphql`
              query ModalidadesSecaoQuery {
                allDatoCmsModalidade(sort: { fields: slug, order: ASC }, limit:3) {
                  nodes {
                    slug
                    titulo
                    imagem {
                      gatsbyImageData
                    }
                  }
                }
              }
            `}
            render={data => (
              data.allDatoCmsModalidade.nodes[0] === undefined ?
              <p>Ainda não foram adicionadas modalidades.</p>
              :
              data.allDatoCmsModalidade.nodes.map(modalidade => (
                <Link to={"/modalidade/" + modalidade.slug}>
                  <GatsbyImage image={modalidade.imagem.gatsbyImageData} className="modalidades__image" alt={modalidade.titulo}/>
                  <h2 className="modalidades__text">{modalidade.titulo}</h2>
                  <HoverIcon viewBox="0 0 32 32">M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z</HoverIcon>
                </Link>
              ))
            )}
          />
        </div>
      <Link to="/modalidades">
        <Button>VEJA TODAS MODALIDADES</Button>
      </Link>
    </div>
  )
}