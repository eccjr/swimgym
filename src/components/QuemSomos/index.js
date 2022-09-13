import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
export default function QuemSomos(){
  return(
    <section className="quem-somos">
      <h1>QUEM SOMOS</h1>
      <StaticImage
            src="../../images/fachada.png"
            alt="Nossa Fachada"
            placeholder="blurred"
          />
      <p>Fundada em janeiro de 2001, seus proprietários, <strong>Walter e Mônica</strong>, e também seu filho <strong>Erick</strong>, sempre foram ligados à área esportiva.
        <strong> Walter Rodrigues Marques</strong>, Educador Físico, nadador com destaque estadual, brasileiro e mundial (natação Master), dedicou sua vida à pratica da atividade
        física, seja como atleta, seja como profissional da área, visando a melhora da qualidade de vida e performance de seus alunos e clientes. <strong>Monica Reusch Marques
        </strong>, heptatleta, da modalidade de Atletismo, defendeu vários clubes e prefeituras, no Rio Grande do Sul e em São Paulo. Participou de várias competições nacionais
        e internacionais, defendendo a Seleção Brasileira, e atua como Personal Trainer há mais de 25 anos.&nbsp;<strong>Erick Reush Marques</strong>, Educador Físico e nadador
        , atleta de clubes em Santos e São José do Rio Preto, com treinamento e competições fora do Brasil, ministra aulas de Personal Training e Treinamento Funcional.</p>
      <p>A  Academia SwimGym teve,  por 14 anos, modalidades aquáticas, e no momento o carro-chefe são as aulas de Personal Training, com professores muito bem qualificados.
          O Treinamento Funcional e o Pilates fazem parte da filosofia de um trabalho de resultado saudável, bem como a presença de uma nutricionista. Ambiente familiar, em que 
          é respeitado o limite e características de cada um, inclusive com espaço para crianças, que podem esperar pelos pais enquanto treinam.</p>
      <p>Tudo isso faz da Academia Swim um lugar para começar, passar ou terminar muito bem o dia, com disciplina e diversão, tendo como objetivo principal,
         a melhora na qualidade de vida dos seus clientes!</p>
    </section>
  )
}