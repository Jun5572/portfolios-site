import React, { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { GlobalMenu } from '../GlobalMenu/GlobalMenu';
import { Main } from '../Main/Main';


type LayoutProps = {
    displayStyle: "block" | "flex" | "inline-flex";
}

export const Layout: FC<LayoutProps> = ({displayStyle}) => {
  return (
    <div className={`${displayStyle}`}>
      <GlobalMenu/>
      <Main />
      <Footer />
    </div>
  );
};
