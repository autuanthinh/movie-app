import React, { FC, HTMLProps, PropsWithChildren } from 'react';
import { RATIO_HEIGHT_DEFAULT } from '@constants/index';
import classnames from 'classnames';

import './index.scss';

const RatioFrame: FC<
  PropsWithChildren &
    HTMLProps<HTMLDivElement> & {
      ratioHeight?: number;
    }
> = ({ children, ratioHeight = RATIO_HEIGHT_DEFAULT, style, className, ...props }) => {
  const styles = Object.assign({}, style, { paddingTop: `calc(${ratioHeight} * 100%)` });

  return (
    <div className={classnames("ratio-frame", className)} style={styles} {...props} >
      <div className="ratio-frame-content" data-testid="ratio-frame">{children}</div>
    </div>
  );
};

export default RatioFrame;
