import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { SkeletonTheme } from 'react-loading-skeleton';
import { BrowserRouter } from 'react-router-dom';

import configFontAwesome from '@config/configFontAwesome';

configFontAwesome();

export const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <SkeletonTheme>
        <BrowserRouter>{children}</BrowserRouter>
      </SkeletonTheme>
    </ThemeProvider>
  );
};

export const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });