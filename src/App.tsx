import React, { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';


export const App: FC = () =>{
  const router = useRoutes(routes);
  return (<>{router}</>);
};