import React from 'react';
import { Link } from 'gatsby';
import Button from '../../common/Button';

export default function Success() {
  return (
    <section className="success">
      <p className="thanks-message">Obrigado pelo contato. Em breve retornaremos pelo email informado.</p>
      <Link to="/">
        <Button>Voltar para a home</Button>
      </Link>
    </section>
  )
}
