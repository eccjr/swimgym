import React from 'react';
import { Link } from 'gatsby';
import Button from "../../common/Button"
import { linkScroll } from '../../common/linkScroll/linkScroll';
function navega(){
  linkScroll("/",2050)
}
export default function Modalidade(props) {
  return (
    <section className="modalidade">
      <div className="modalidade__content">
        <h1>{props.h1}</h1>
        {props.children}
        <p>{props.texto}</p>
        <p></p>
        <h4>HORÁRIOS</h4>
        <Link to="/agenda">
          <Button>CLIQUE AQUI PARA VER TODOS OS HORÁRIOS</Button>
        </Link>
        <h4>AGENDE SUA AULA EXPERIMENTAL</h4>
        <Button onClick={navega}>CLIQUE AQUI PARA AGENDAR SUA AULA EXPERIMENTAL</Button>
      </div>
      <div className="modalidade__widget">
        <h2>AGENDE UM HORÁRIO CONOSCO!</h2>
        <div className="modalidade__widget__phone">
          <p>Fone:&nbsp;</p>
          <p>(17)3223-7372</p>
        </div>
        <div class="modalidade__widget__email">
          <p>Email:&nbsp;</p>
          <a href="mailto:academiaswimgym@hotmail.com.br">academiaswimgym@hotmail.com.br</a>
        </div>
        <Button onClick={navega}>CLIQUE AQUI PARA AGENDAR</Button>
      </div>
    </section>
  )
}