import React, { FC, lazy} from "react";
import { useSelector } from "react-redux";

import { RootState } from "../store/store";

const Header = lazy(() => import('../components/header/Header'));
const Modal = lazy(() => import('../components/modal/Modal'));
const NoteList = lazy(() => import('../components/noteList/NoteList'));

const MyPasswordsPage: FC = () => {
  const { showModal } = useSelector((state: RootState) => state.customers);

  return (
    <>
      <Header tittle="My passwords"/>
      <NoteList />
      {showModal ? <Modal /> : null}
    </>

  );
}

export default MyPasswordsPage;