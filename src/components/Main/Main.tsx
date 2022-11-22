import React, { FC, ReactNode, useEffect } from 'react';
import { Outlet } from 'react-router-dom';




export const Main: FC = () => {

  return (
    <main>
      <div className='px-32'>
        <Outlet />
      </div>
    </main>
  )
}
