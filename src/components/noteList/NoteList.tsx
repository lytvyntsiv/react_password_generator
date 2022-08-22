import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Link } from "react-router-dom";

import view from '../../images/icons/view.svg';
import notView from '../../images/icons/not-view.svg';

import { RootState } from '../../store/store';
import { INote } from '../../types/INote';
import { Action } from '../../types/enums/Action';

import './noteList.scss';

const NoteList: FC = () => {
  const { notes } = useSelector((state: RootState) => state.notes);
  const dispatch = useDispatch();

  const onDeleteNote = (id: number): void => {
    dispatch({type: Action.DELETE_NOTE, payload: id});
  }

  const showModal = (): void => {
    dispatch({type: Action.TOGGLE_SHOWMODAL, payload: true});
  }

  const onToggleViewPassword = (id: number): void => {
    dispatch({type: Action.SHOW_PASSWORD, payload: id});
  }

  const noteList = notes.map((note: INote) => {
    const {id, name, password, showPassword} = note;

    return (
      <CSSTransition
            key={id}
            timeout={500}
            classNames="item">
        <li key={id} className="notes__item">
          <h2 className="notes__tittle">{name}</h2>
          <h3 className="notes__password">{showPassword ? password : '***********'}</h3>
          <img
            src={showPassword ? view : notView}
            alt='View password'
            className="notes__show-password"
            onClick={() => onToggleViewPassword(id)} />
          <span className="notes__data">{new Date().toISOString().slice(0, 10)}</span>
          <button 
            className="notes__delete"
            onClick={() => onDeleteNote(id)}></button>
        </li>
      </CSSTransition>
    );
  })

  return (
    <>
      <main className="notes">
        <Link to="/" className='notes__become-to-generator'>Back to generator</Link>
        {!notes.length ? <div className='notes__default-message'>Your passwords will be stored here</div> : null}
        <TransitionGroup className="notes__list">
          {noteList}
        </TransitionGroup>
        <button 
          className="notes__add-button"
          onClick={() => showModal()}>+
        </button>
      </main>
    </>
  )
}

export default NoteList;