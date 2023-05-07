import { FC } from 'react';
import { motion } from 'framer-motion';
import { Badge } from 'react-bootstrap';
import { item } from '@helpers/framerMotion';

const Genre: FC<{
  title: string;
  active?: boolean;
}> = ({ title, active = false }) => {
  return (
    <motion.h3
      whileTap={{
        scale: 0.8,
      }}
      variants={item}
    >
      <Badge
        id="badge"
        style={{
          cursor: 'pointer',
        }}
        bg={active ? 'primary' : 'dark'}
      >
        {title}
      </Badge>
    </motion.h3>
  );
};

export default Genre;
