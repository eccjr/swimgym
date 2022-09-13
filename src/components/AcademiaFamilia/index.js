import React from 'react';
import Button from '../../common/Button';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
export default function AcademiaFamilia() {
  return (
    <div className="Academia-padding">
      <StaticImage
          src="../../images/sjrp.png"
          alt="Rio Preto"
          placeholder="blurred"
          quality="100"
          className="background-img"
        />
      <div className="AcademiaFamilia-c">
        <h2>A ACADEMIA DA SUA FAMILIA</h2>
        <Link to="/modalidades">
          <Button>VER TODAS AS MODALIDADES</Button>
        </Link>
      </div>
    </div>
  )
}