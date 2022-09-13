import React from 'react'
export default function Button(props) {
  return (
    <button onClick={props.onClick} className="default-button" type={props.type}>
      {props.children}
    </button>
  )
}