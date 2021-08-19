import React, { useState } from 'react';
import { WriteItems } from './WriteItems';
import './Writedown.css';
import { Link } from 'react-router-dom';

function Writedown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'writedown-menu clicked' : 'writedown-menu'}
        
      >
        {WriteItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Writedown;