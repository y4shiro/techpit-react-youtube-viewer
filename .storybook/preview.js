import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { addDecorator } from '@storybook/react';
import GlobalStyle from '../src/style/GlobalStyle';

addDecorator((storyFn) => (
  <MemoryRouter initialEntries={['/', 'posts']}>{storyFn()}</MemoryRouter>
));

addDecorator((storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
));
