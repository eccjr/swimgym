import React from 'react';
import Button from '../../common/Button';
import { Link } from 'gatsby';

export default function Card(props){
  return(
    <div className="card">
        {props.children}
        <Link to={props.path}>
          <Button>VEJA MAIS DETALHES</Button>
        </Link>
    </div>
  )
}