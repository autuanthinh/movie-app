import { FC, useMemo } from 'react';
import { ListMovieBasic } from '@apptypes/model';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageSkeleton from '@components/skeleton/ImageSkeleton';
import MovieCard from '@components/MovieCard';
import BaseMovieCard from '@components/BaseMovieCard';

let breakpoints = {
  0: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  576: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1200: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
};

const CustomSwiper: FC<{
  movies: ListMovieBasic;
  loading?: boolean;
}> = ({ movies, loading = false }) => {
  const loadingSkeletons = useMemo(() => {
    return Array(10).fill(null);
  }, []);

  return (
    <Swiper
      autoplay={loading ? undefined : { delay: 5000 }}
      navigation={!loading}
      modules={loading ? undefined : [Navigation, Autoplay]}
      loop={!loading}
      breakpoints={breakpoints}
      draggable={!loading}
    >
      {loading ? (
        loadingSkeletons.map((i, index) => {
          return (
            <SwiperSlide key={`temp-${index}`}>
              <ImageSkeleton />
            </SwiperSlide>
          );
        })
      ) : movies.length > 0 ? (
        movies.map(movie => (
          <SwiperSlide key={movie.imdbID}>
            <MovieCard movie={movie} showTitle={false}></MovieCard>
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide key={'nodata'}>
          <BaseMovieCard>
            <div className="h-100 d-flex flex-column align-items-center justify-content-center">
              <FontAwesomeIcon icon={['fas', 'video-slash']} style={{ height: 50 }} />
              <h4 className="mt-2 text-center">No movies found</h4>
            </div>
          </BaseMovieCard>
        </SwiperSlide>
      )}
    </Swiper>
  );
};

export default CustomSwiper;
