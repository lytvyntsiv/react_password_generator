import React, { useEffect, useState, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import notCopied from '../../images/icons/copy-svgrepo-com.svg'
import succesCopied from '../../images/icons/success.svg'

import { RootState } from '../../store/store';
import { Action } from '../../types/enums/Action';

import './password.scss';

const Password: FC = () => {
  const {
    lowercase, 
    uppercase, 
    numbers, 
    symboles,
    controled} = useSelector((state: RootState) => state.customers);

  const { length, password, copied } = useSelector((state: RootState) => state.password);
  
  const dispatch = useDispatch();
  const [lineWidth, setLineWidth] = useState('');
  const [lineColor, setLineColor] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  useEffect(() => {
    setShowPassword(!showPassword);
  }, [password])

  const generatePassword = (): string => {
    let charset: string = '';

    if (lowercase) {
      charset+= 'abcdefghijklmnopqrstuvwxyz';
    }
    if (uppercase) {
      charset+= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (numbers) {
      charset+= '0123456789';
    }
    if (symboles) {
      charset+= '!@#$%^&*';
    }

    let password = "";

    for (let i = 0, n = charset.length; i < length; ++i) {
      password += charset[Math.floor(Math.random() * n)];
    }

    return password;
  }

  const regeneratePassword = (): void => {
    dispatch({type: Action.UPDATE_PASSWORD, payload: generatePassword()})
  }

  useEffect(() => {
    regeneratePassword();
    dispatch({type: Action.COPY_PASSWORD, payload: false});
  }, [length, lowercase, uppercase, numbers, symboles, controled]);

  const updateDifficultyLine = (length: number) => {
    if (length <= 18) {
      setLineWidth(`${Math.round(100 / 18 * length)}%`);
    } else {
      setLineWidth('100%');
    }
    
    if (length <= 5) {
      setLineColor('red');
    } else if (length < 12) {
      setLineColor('#FF7F00');
    } else {
      setLineColor('green');
    }
  }

  useEffect(() => updateDifficultyLine(length), [length]);

  const addPaswordToStorage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    if (password.includes('undefined')) return;

    dispatch({type: Action.TOGGLE_SHOWMODAL, payload: true});
  }

  const onCopyToClipboard = (password: string): void => {
    navigator.clipboard.writeText(password)
      .then(() => {
        dispatch({type: Action.COPY_PASSWORD, payload: true})
      })

      .catch(err => {
        dispatch({type: Action.COPY_PASSWORD, payload: false})
        console.log('Something went wrong', err);
      });
  }

  return (
    <div className="password">
      <SwitchTransition>
        <CSSTransition
          key={showPassword}
          addEndListener={(node: HTMLElement, done: () => void) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames="password-animation"
          >
            <input 
              type="text"
              value={!password.includes('undefined') ? password : 'Select at least one filter'}
              readOnly
              placeholder='text'
              className='password__screen' />
        </CSSTransition>
      </SwitchTransition>
      <div className="password__button-wrap">
        <img
          src={copied ? succesCopied : notCopied} 
          alt="copy"
          className="password__button"
          onClick={() => onCopyToClipboard(password)}/>
        <button 
          onClick={() => regeneratePassword()}
          className="password__button password__button--generate">
        </button>
        <button
          onClick={(e) => addPaswordToStorage(e)}
          className="password__button password__button--adding">
          Add to my
        </button>
      </div>
      <div 
      className="password__line"
      style={{'width': `${lineWidth}`, 'backgroundColor': `${lineColor}`}}></div>
    </div>
  )
}

export default Password;