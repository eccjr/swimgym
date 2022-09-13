import React, { useState } from 'react';
export default function DropDown(props) {

  let [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div onClick={handleClick} role="button" tabIndex={0} onKeyDown={handleClick} className={click ? 'dropdown-clicked' : 'dropdown'}>
      <button className="dropbtn" style={{ backgroundColor: props.backgroundColor }}>
          <p>MENU</p>
      </button>
      <div className="dropdown-content">
        {props.children}
      </div>
    </div>
  )
}