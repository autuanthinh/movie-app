import { screen, queries } from '@testing-library/react';

import { customRender } from '@utils/test-app-all-provider';
import CustomSwiper from '@components/CustomSwiper';
import multiMovies from '@datas/multiMovie.json';

describe('Test component RatioFrame', () => {
  test('renders list', () => {
    customRender(<CustomSwiper movies={multiMovies as any} />);
    const linkElement = screen.getAllByRole('img');
    expect(linkElement.length > 0).toBeTruthy();
  });

  test('renders loading', () => {
    customRender(<CustomSwiper movies={[]} loading={true} />, {
      queries: {
        ...queries
      }
    });
    const linkElement = document.querySelectorAll('.react-loading-skeleton');
    expect(linkElement.length > 0).toBeTruthy();
  });

  test('renders no data', () => {
    customRender(<CustomSwiper movies={[]} loading={false} />);
    const linkElement = document.querySelector('.fa-video-slash');
    expect(linkElement).toBeDefined();
  });
});
