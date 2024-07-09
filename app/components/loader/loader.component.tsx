import { FC } from 'react';
import { LoaderContainer, Loader as LoaderStyled } from './loader.styles';

type LoaderProps = {
  text?: string;
};

export const Loader: FC<LoaderProps> = ({ text = 'Loading...' }) => (
  <LoaderContainer>
    <LoaderStyled content={text} />
  </LoaderContainer>
);
