import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import easy from '../../images/complexityHomes/easy.svg';
import medium from '../../images/complexityHomes/medium.svg';
import hard from '../../images/complexityHomes/hard.svg';
import megaHard from '../../images/complexityHomes/megaHard.svg';
import ultraHard from '../../images/complexityHomes/ultraHard.svg';

import { RootState } from '../../store/store';

import './complexityVisual.scss';

const ComplexityVisual: FC = () => {
  const { length } = useSelector((state: RootState) => state.password);
  const [picture, setPicture] = useState('');
  const [showPicture, setShowPicture] = useState(false);

  useEffect(() => {
    onInstalPicture();
  }, [length]);

  useEffect(() => {
    setShowPicture(!showPicture);
  }, [picture]);

  const onInstalPicture = () => {
    if (length < 4) {
      setPicture(easy);
    } else if (length < 8) {
      setPicture(medium);
    } else if (length < 12) {
      setPicture(hard);
    } else if (length < 18) {
      setPicture(megaHard);
    } else {
      setPicture(ultraHard);
    }
  };

  return (
    <SwitchTransition>
      <CSSTransition
        key={showPicture}
        addEndListener={(node: HTMLElement, done: () => void) => {
          node.addEventListener("transitionend", done, false);
        }}
        classNames="picture"
        >
        <div className="complexity-visual">
          <img className="complexity-visual__picture" src={picture} alt='complexitiHome' />
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default ComplexityVisual;