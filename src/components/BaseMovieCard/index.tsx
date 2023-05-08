import { FC, ComponentProps } from 'react';
import RatioFrame from '@components/RatioFrame';
import classnames from 'classnames';
import { Card } from 'react-bootstrap';

import './index.scss';

const BaseMovieCard: FC<ComponentProps<typeof Card>> = ({ children, className, ...props }) => {
  return (
    <Card className={classnames('base-moveie-card', className)} {...props}>
      <Card.Body>
        <RatioFrame>
          <div style={{ height: '100%', width: '100%' }}>{children}</div>
        </RatioFrame>
      </Card.Body>
    </Card>
  );
};

export default BaseMovieCard;
