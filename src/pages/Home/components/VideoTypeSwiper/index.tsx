import { FC, useEffect, useState } from 'react';
import { ListMovieBasic } from '@apptypes/model';
import * as movieAPI from '@services/movie';

import CustomSwiper from '../CustomSwiper';

import './index.scss';

const VideoTypeSwiper: FC<{
  title: string;
  type: string;
  search: string;
}> = ({ title, type, search }) => {
  const [movies, setMovies] = useState<ListMovieBasic>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const result = await movieAPI.fetchMovies({
          s: search,
          type,
        });
        setMovies(result.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="video-type-swiper my-2">
      <div className="video-type-swiper__title">{title}</div>
      <CustomSwiper movies={movies} loading={loading} />
    </div>
  );
};

export default VideoTypeSwiper;
