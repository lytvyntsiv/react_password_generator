import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';

import { Action } from '../../types/enums/Action';

import './customizePanel.scss';

const CustomizePanel: FC = () => {
  const {
    lowercase, 
    uppercase, 
    numbers, 
    symboles,
    easy,
    medium,
    hard,
    controled} = useSelector((state: RootState) => state.customers);
    
  const { length } = useSelector((state: RootState) => state.password);
  const dispatch = useDispatch();

  const onLength = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (+e.target.value <= 50 && +e.target.value >= 0) {
      dispatch({type: Action.TOGGLE_LENGTH, payload: e.target.value})
    }
  }

  const onIncludeChange = (name: string): void => {
    dispatch({type: Action.TOGGLE_CONTROLED, payload: true});

    switch(name) {
      case 'lowercase': 
        dispatch({type: Action.TOGGLE_LOWERCASE, payload: !lowercase});
        break;
      case 'uppercase': 
        dispatch({type: Action.TOGGLE_UPPERCASE, payload: !uppercase});
        break;
      case 'numbers': 
        dispatch({type: Action.TOGGLE_NUMBERS, payload: !numbers});
        break;
      case 'symboles': 
        dispatch({type: Action.TOGGLE_SYMBOLES, payload: !symboles})
        break;
      default: 
        throw new Error();
    }
  }

  const onComplexesChanges = (name: string): void => {
    dispatch({type: Action.TOGGLE_CONTROLED, payload: false});
    
    switch(name) {
      case 'easy': 
      dispatch({type: Action.TOGGLE_EASY});
        break;
      case 'medium': 
        dispatch({type: Action.TOGGLE_MEDIUM});
        break;
      case 'hard': 
      dispatch({type: Action.TOGGLE_HARD});
        break;
      case 'controled': 
        dispatch({type: Action.TOGGLE_CONTROLED, payload: !controled});
          break;
      default: 
        throw new Error();
    }
  }

  return (
    <div className="customize-panel">
      <div className="customize-panel__header">
        <h2 className="customize-panel__tittle">Customize your password</h2>
        <Link to="my-passwords/" className="customize-panel__my-passwords">My passwords</Link>
      </div>
      <div className="customize-panel__main">
        <div className="customize-panel__length-setting">
          <div 
              className='customize-panel__number'
              >{length}</div>
          <input 
            type="range" value={length} 
            min="1" max="25"
            className='customize-panel__range'
            onChange={(e) => onLength(e)}/>
        </div>
        <div className="customize-panel__level-setting">
          <ul className="customize-panel__list">
            <li className="customize-panel__item">
              <input 
                type="radio" 
                name="level" 
                id="easy"
                checked={easy} 
                className="customize-panel__radio"
                onChange={() => onComplexesChanges('easy')}/>
              <label htmlFor="easy" className="customize-panel__radio-label">Easy</label>
            </li>
            <li className="customize-panel__item">
              <input 
                type="radio" 
                name="level" 
                id="medium"
                checked={medium} 
                className="customize-panel__radio"
                onChange={() => onComplexesChanges('medium')}/>
              <label htmlFor="medium" className="customize-panel__radio-label">Medium</label>
            </li>
            <li className="customize-panel__item">
              <input 
                type="radio" 
                name="level" 
                id="hard"
                checked={hard} 
                className="customize-panel__radio"
                onChange={() => onComplexesChanges('hard')}/>
              <label htmlFor="hard" className="customize-panel__radio-label">Hard</label>
            </li>
            <li className="customize-panel__item">
              <input 
                type="radio" 
                name="level" 
                id="controled"
                checked={controled} 
                className="customize-panel__radio"
                onChange={() => onComplexesChanges('controled')}/>
              <label htmlFor="controled" className="customize-panel__radio-label">Controled</label>
            </li>
          </ul>
        </div>
        <div className="customize-panel__includes-setting">
        <ul className="customize-panel__list">
            <li className="customize-panel__item">
              <input 
                type="checkbox" 
                name="lowercase" 
                id="lowercase" 
                checked={lowercase}
                className='customize-panel__input'
                onChange={() => onIncludeChange('lowercase')}/>
              <label htmlFor="lowercase" className='customize-panel__label'>lowercase</label>
            </li>
            <li className="customize-panel__item">
              <input 
                type="checkbox" 
                name="uppercase" 
                id="uppercase" 
                checked={uppercase}
                className='customize-panel__input'
                onChange={() => onIncludeChange('uppercase')}/>
              <label htmlFor="uppercase" className='customize-panel__label'>UPPERCASE</label>
            </li>
            <li className="customize-panel__item">
              <input 
                type="checkbox" 
                name="numbers" 
                id="numbers" 
                checked={numbers}
                className='customize-panel__input'
                onChange={() => onIncludeChange('numbers')}/>
              <label htmlFor="numbers" className='customize-panel__label'>12345</label>
            </li>
            <li className="customize-panel__item">
              <input 
                type="checkbox" 
                name="symbol" 
                id="symbol" 
                checked={symboles}
                className='customize-panel__input'
                onChange={() => onIncludeChange('symboles')}/>
              <label htmlFor="symbol" className='customize-panel__label'>@#$%^&</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CustomizePanel;