import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../common/Layout'

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <title>Não encontrada</title>
      <h1>Página não encontrada</h1>
      <p>
        Sentimos muito{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        não conseguimos encontrar o que procura.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Tente criar uma página em <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Ir para a página inicial</Link>.
      </p>
    </Layout>
  )
}

export default NotFoundPage