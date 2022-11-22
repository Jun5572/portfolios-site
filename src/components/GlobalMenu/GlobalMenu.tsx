import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const GlobalMenu: FC = () => {
  return (
    <header className="flex items-center h-16 px-16 bg-sky-500">
      <nav>
        <ul className="flex space-x-8 text-white h-full">
          <li className="text-lg"><NavLink to="/">HOME1</NavLink></li>
          <li className="text-lg"><NavLink to="/react-router-transition">react-router-transition</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};
