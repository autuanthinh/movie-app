import React, { FC } from 'react';
import { Badge } from 'react-bootstrap';

const Genre: FC<{
  title: string;
  active?: boolean;
}> = ({ title, active = false }) => {
  return (
    <Badge
      id="badge"
      style={{
        cursor: 'pointer',
      }}
      bg={active ? 'primary' : 'dark'}
    >
      {title}
    </Badge>
  );
};

export default Genre;
