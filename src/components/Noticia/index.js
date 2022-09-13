import React from 'react';
import { Link } from 'gatsby';
import Button from '../../common/Button';

export default function Noticia(props) {
  
  const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  let dataEscrita;
  if(props.data !== undefined){
    const dataArray = props.data.split('-')
    dataEscrita = `POSTADO EM ${dataArray[0]} de ${meses[Number(dataArray[1]) - 1]} de ${dataArray[2]}`
  } 
  
  let show={display: "block"},notShow={display: "none"};
  if (props.desc !== undefined){
    show={display: "none"}
    notShow={display: "block"}
  }
  return (
    <>
      <Link to={props.to}>
        <h1>{props.h1}</h1>
      </Link>
      <h4>{dataEscrita}</h4>

      {props.children}
      <Link style={show} to={props.to}>
        <Button>ver mais</Button>
      </Link>
      <p style={notShow}>{props.desc}</p>
    </>
  )
}