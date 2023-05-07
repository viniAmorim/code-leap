import React, { BaseHTMLAttributes, ReactNode } from 'react';

import * as Styled from './styles';

export interface CardProps extends BaseHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card = ({ children, ...rest }: CardProps) => {
  return <Styled.Card {...rest}>{children}</Styled.Card>;
};

export default Card;
