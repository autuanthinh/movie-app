import React, { render, screen } from '@testing-library/react';
// import renderer from 'react-test-renderer';

// import RatioFrame from '@components/RatioFrame';
import RatioFrame from '../index';

describe('Test component RatioFrame', () => {
  // render
  const renderComponent = (
    <RatioFrame ratioHeight={2} style={{ width: 100 }}>
      I am here
    </RatioFrame>
  );

  // test('snapshot', () => {
  //   const domTree = renderer.create(renderComponent).toJSON();
  //   expect(domTree).toMatchSnapshot();
  // })

  test('renders children', () => {
    render(renderComponent);
    const linkElement = screen.getByText(/I am here/i);
    expect(linkElement).toBeInTheDocument();
  });
});
