import React from 'react';
export default function Grid(props){
  return(
    <div className="grid" style={props.style}>
      {props.children}
    </div>
  )
}