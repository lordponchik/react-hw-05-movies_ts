import { Suspense } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function SharedLayout() {
  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
