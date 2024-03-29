import React, { useState } from 'react';
import { UserItems } from './UserItems';
import './Userdown.css';
import { Link } from 'react-router-dom';

function Userdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'userdown-menu clicked' : 'userdown-menu'}
        
      >
        {UserItems.map((item, index) => {
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

export default Userdown;