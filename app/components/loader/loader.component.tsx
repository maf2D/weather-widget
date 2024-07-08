import { FC } from 'react';
import { LoaderContainer, Loader as L } from './loader.styles';

type LoaderProps = {
  text?: string;
};

export const Loader: FC<LoaderProps> = ({ text = 'Loading...' }) => (
  <LoaderContainer>
    <L content={text} />
  </LoaderContainer>
);
