import React, { ReactNode } from 'react';
import './card.scss';

interface CardProps {
  children: ReactNode;
  id?: string;
}

const Card: React.FC<CardProps> = ({ children, id }) => {
  return <div id={id} className="card">{children}</div>;
};

export default Card;
