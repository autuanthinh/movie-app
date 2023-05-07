import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IMAGE_UNAVAILABLE_PLACEHOLDER, RATIO_HEIGHT_DEFAULT } from '@constants/index';

import './index.scss';

const CustomLazyLoadImage: FC<{
  urlImage?: string;
  ratioHeight?: number;
}> = ({ urlImage, ratioHeight = RATIO_HEIGHT_DEFAULT }) => {
  return (
    <div className="custom-lazy-load-image" style={{ paddingTop: `calc(${ratioHeight} * 100%)` }}>
      <LazyLoadImage
        src={urlImage ? urlImage : IMAGE_UNAVAILABLE_PLACEHOLDER}
        width={'100%'}
        height={'100%'}
        alt="movie"
        effect="blur"
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

export default CustomLazyLoadImage;
