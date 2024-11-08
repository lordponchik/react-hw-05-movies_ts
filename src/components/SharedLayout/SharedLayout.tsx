import { Suspense } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <>
      <Header />

      <Suspense fallback={<h1>Загрузка</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}
