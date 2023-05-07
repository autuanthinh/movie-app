import { FC, useMemo } from 'react';
import { ListMovieBasic } from '@apptypes/model';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import ImageSkeleton from '@components/skeleton/ImageSkeleton';
import MovieCard2 from '@components/MovieCard';

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
      navigation={true}
      modules={[Navigation, Autoplay]}
      loop={true}
      className="movie-section-row"
      breakpoints={breakpoints}
    >
      {loading
        ? loadingSkeletons.map((i, index) => {
            return (
              <SwiperSlide key={index}>
                <ImageSkeleton />
              </SwiperSlide>
            );
          })
        : movies.map(movie => (
            <SwiperSlide key={movie.imdbID}>
              <MovieCard2 movie={movie} showTitle={false}></MovieCard2>
            </SwiperSlide>
          ))}
    </Swiper>
  );
};

export default CustomSwiper;
