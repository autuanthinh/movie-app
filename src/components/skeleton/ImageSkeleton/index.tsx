import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import './index.scss';

const ImageSkeleton: FC = () => {
  return (
    <div className="image-skeleton">
      <Skeleton />
    </div>
  );
};

export default ImageSkeleton;
