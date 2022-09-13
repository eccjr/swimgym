import React from 'react';
import Button from '../../common/Button';
import { linkScroll } from '../../common/linkScroll/linkScroll';
import { StaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
function navega() {
  linkScroll("/", 2050)
}
export default function Agenda() {
  return (
    <section className="agenda">
      <h1>agenda e horários</h1>
      <div class="entry-content">
        <div class="scroll-wraper">
          <table className="table">
            <thead>
              <tr class="row-1">
                <th class="column-1"></th>
                <th class="column-2">Segunda-feira</th>
                <th class="column-3">Terça-feira</th>
                <th class="column-4">Quarta-feira</th>
                <th class="column-5">Quinta-feira</th>
                <th class="column-6">Sexta-feira</th>
                <th class="column-7">Sábado</th>
              </tr>
            </thead>
            <tbody>
              <StaticQuery
                query={graphql`
                query AgendaQuery {
                  allDatoCmsAgenda(sort: { fields: horarioInicio, order: ASC }) {
                    nodes {
                      horarioInicio
                      horarioFinal
                      segunda
                      terca
                      quarta
                      quinta
                      sexta
                      sabado
                    }
                  }
                }
              `}
                render={data => (
                  data.allDatoCmsAgenda.nodes[0]===undefined ?
                  <tr>
                    <td>Ainda não foram adicionados horários</td>
                  </tr>
                  :
                  data.allDatoCmsAgenda.nodes.map(agenda => (
                    <tr>
                      <td>{agenda.horarioInicio + " às " + agenda.horarioFinal}</td>
                      <td>{agenda.segunda}</td>
                      <td>{agenda.terca}</td>
                      <td>{agenda.quarta}</td>
                      <td>{agenda.quinta}</td>
                      <td>{agenda.sexta}</td>
                      <td>{agenda.sabado}</td>
                    </tr>
                  ))
                )}
              />
            </tbody>
          </table>
        </div>
        <h4>Agende sua aula experimental</h4>
        <Button onClick={navega}>Clique aqui para agendar</Button>
      </div>
    </section>
  )
}