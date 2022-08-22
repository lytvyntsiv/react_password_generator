import React, { FC, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { useInput } from '../../hooks/useInput';

import { Action } from '../../types/enums/Action';
import { INote } from '../../types/INote';

import './modal.scss';

type Props = {
  password?: string
}

const Modal: FC<Props> = ({ password }) => {
  const dispatch = useDispatch();

  const [
    title,
    hasTitleError,
    setHasTitleError,
    handleTitleChange,
    clearTitle,
  ] = useInput('');

  const [
    userPassword,
    hasUserPasswordError,
    setHasUserPasswordError,
    handleUserPasswordChange,
    clearUserPassword,
  ] = useInput('');
  
  const validateName = (): number | undefined => {
    const trimmedValue = title.trim();
    
    if (!trimmedValue) return;
    
    setHasTitleError(!trimmedValue);
    
    return trimmedValue.length;
  };
  
  const validatePassword = (): number | undefined => {
    const trimmedValue = userPassword.trim();
    
    setHasUserPasswordError(!trimmedValue);
    
    return trimmedValue.length;
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const closeModal = (): void => { 
    dispatch({type: Action.TOGGLE_SHOWMODAL, payload: false});
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const newNote: INote = {
      id: Date.now(),
      name: title.trim(),
      password: password || userPassword,
      showPassword: false
    }

    if (!newNote.password) return;
    if (!newNote.name) return;

    if (password) {
      validateName() && dispatch({type: Action.ADD_NOTE, payload: newNote});
    } else {
      (validateName() && validatePassword()) && dispatch({type: Action.ADD_NOTE, payload: newNote});
    }

    closeModal();
    clearTitle();
    clearUserPassword();
  }

  return (
    <>
      <div 
        className="modal--background"
        onClick={() => closeModal()}>
      </div>
      <div className="modal">
        <div className="modal__content">
          <h2 className='modal__title'>Add password</h2>
          <button 
            className='modal__close-icon'
            onClick={() => closeModal()}>
          </button> 
          <form 
            className='modal__form' 
            onSubmit={(e) => handleSubmit(e)}>
            <label 
              htmlFor="name"
              className='modal__label'>Name:</label>
            <input 
              type="text"
              name="name"
              id="name"
              ref={inputRef}
              value={title}
              onChange={handleTitleChange}
              style={hasTitleError ? {border: '1px solid red'} : undefined}
              className='modal__input' />
            <label 
              htmlFor="password"
              className='modal__label'>Password:</label>
            <input 
              type="text"
              name="password"
              id="password"
              value={password || userPassword}
              className='modal__input'
              style={hasUserPasswordError ? {border: '1px solid red'} : undefined}
              onChange={handleUserPasswordChange}/>
            <button 
              type="submit"
              className='modal__button'>ADD</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Modal;