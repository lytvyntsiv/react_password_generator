import React, { FC, lazy } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../store/store";

const ComplexityVisual = lazy(() => import('../components/complexityVisual/ComplexityVisual'));
const Password = lazy(() => import('../components/password/Password'));
const CustomizePanel = lazy(() => import('../components/customizePanel/CustomizePanel'));
const Header = lazy(() => import('../components/header/Header'));
const Modal = lazy(() => import('../components/modal/Modal'));


const MainPage: FC = () => {
  const { showModal } = useSelector((state: RootState) => state.customers);
  const { password } = useSelector((state: RootState) => state.password);

  return (
    <>
      <Header tittle="Password Generator"/>
      <main className="page__main">
        <ComplexityVisual/>
        <Password/>
        <CustomizePanel/>
      </main>
      {showModal ? <Modal password={password}/> : null}
    </> 
  );
}

export default MainPage;