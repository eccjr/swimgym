import React from 'react';
import { Helmet } from 'react-helmet';

export default function Layout({children}) {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Academia Swim Gym</title>
        <meta name="description" content="Aulas de Personal Training, musculação, treinamento funcional e pilates em São José do Rio Preto." />
        <link rel="canonical" href="https://academiaswimgym.com.br/" />
      </Helmet>
      {children}
    </main>
  )
}
