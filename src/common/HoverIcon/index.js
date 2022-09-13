import React from 'react';
export default function HoverIcon(props) {
  let viewbox = "0 0 576 512";

  if (props.viewBox !== undefined) {
    viewbox = props.viewBox;
  }

  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <svg onClick={props.onClick}aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox={viewbox}><path d={props.children}></path></svg>
    </a>
  );
}