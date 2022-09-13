import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
export default function MainImage() {
  return (
    <StaticImage
      src="../../images/promo.png"
      alt="Academia Swim Gym"
      placeholder="blurred"
      quality="100"
      className="main-image"
    />
  )
}