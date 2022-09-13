import React from 'react';
import { Link } from "gatsby";
export default function Foto(props) {
  return (
      <div className="foto">
        <div className="borda-dupla"></div>
        <Link to={props.to}>
          {props.children}
        </Link>
        <h2>{props.h2}</h2>
        <p>{props.p}</p>
      </div>
  );
}