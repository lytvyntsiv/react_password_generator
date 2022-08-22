import React, { FC } from 'react';

import './header.scss';

type Props = {
  tittle: string,
};

const Header: FC<Props> = ({ tittle }) => {
  return (
    <header className="header">
      <h1 className="header__title">{tittle}</h1>
    </header>
  )
}

export default Header;