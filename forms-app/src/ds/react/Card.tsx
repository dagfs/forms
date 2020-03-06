import React, { ReactChild } from 'react';
import { card } from '../compositions/card';

export const Card = ({ children }: { children: ReactChild }) => (
  <div className={card}>{children}</div>
);
