import { FC } from 'react';
import { IMAGE_UNAVAILABLE_PLACEHOLDER, RATIO_HEIGHT_DEFAULT } from '@constants/index';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import RatioFrame from '@components/RatioFrame';

import './index.scss';

const CustomLazyLoadImage: FC<{
  urlImage?: string;
  ratioHeight?: number;
}> = ({ urlImage, ratioHeight = RATIO_HEIGHT_DEFAULT }) => {
  return (
    <RatioFrame ratioHeight={ratioHeight} className="custom-lazy-load-image">
      <LazyLoadImage
        src={urlImage ? urlImage : IMAGE_UNAVAILABLE_PLACEHOLDER}
        width={'100%'}
        height={'100%'}
        alt="movie"
        effect="blur"
        style={{ objectFit: 'cover' }}
      />
    </RatioFrame>
  );
};

export default CustomLazyLoadImage;
