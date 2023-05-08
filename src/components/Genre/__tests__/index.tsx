import React, { render, screen } from '@testing-library/react';

import Genre from '@components/Genre';

describe('Test component RatioFrame', () => {
  // render
  const renderComponent = (
    <Genre title='drama' />
  );

  test('renders children', () => {
    render(renderComponent);
    const linkElement = screen.getByText(/drama/i);
    expect(linkElement).toBeInTheDocument();
  });
});
