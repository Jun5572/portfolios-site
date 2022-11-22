import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const GlobalMenu: FC = () => {
  return (
    <header className="flex items-center h-16 px-16 bg-background-primary">
      <nav>
        <ul className="inline-flex space-x-6 text-white">
          <li className="text-lg"><NavLink className="px-3 py-4" to="/">HOME1</NavLink></li>
          <li className="text-lg"><NavLink className="px-3 py-4" to="/react-router-transition">react-router-transition</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};
