import { useEffect, useMemo, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { MovieDetails, MovieBasic } from '@apptypes/model';
import * as movieAPI from '@services/movie';

import { useDispatch, useSelector } from 'react-redux';

import { Container } from 'react-bootstrap';
import BookmarkToggle from '@components/BookmarkToggle';
import Genre from '@components/Genre';
import CustomLazyLoadImage from '@components/CustomLazyLoadImage';
import Loading from '@components/Loading';
import ImageSkeleton from '@components/skeleton/ImageSkeleton';

import { actions as bookmarkActions, selectors as bookMarkSelectors } from '@reducers/bookmark';

import './index.scss';

function HomePage() {
  const dispatch = useDispatch<any>();

  const params = useParams();
  const { id: movieId } = params;

  const bookmarkMovie = useSelector(state => bookMarkSelectors.bookmarkById(state as any, movieId as string));

  const [movieInfo, setMovieInfo] = useState<MovieDetails>();
  const [loading, setLoading] = useState(true);

  const genres = useMemo(() => {
    return movieInfo ? movieInfo.Genre.split(', ') : [];
  }, [movieInfo]);

  const fetchMovieDetails = async () => {
    try {
      const result = await movieAPI.getMovieByID({ i: movieId });
      setMovieInfo(result);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]);

  const toggle = useCallback(
    (active: boolean, movie: MovieBasic) => {
      if (active) {
        dispatch(bookmarkActions.addOne(movie));
      } else {
        dispatch(bookmarkActions.removeOne(movie.imdbID));
      }
    },
    [movieInfo, bookmarkMovie]
  );

  return loading ? (
    <Loading />
  ) : !movieInfo ? (
    <h2 className="text-center my-3">Movie not found!</h2>
  ) : (
    <Container className="movie-page my-4">
      <div className="d-flex">
        <div className="image-wrap">
          {movieInfo ? (
            <CustomLazyLoadImage urlImage={movieInfo.Poster !== 'N/A' ? movieInfo.Poster : undefined} />
          ) : (
            <ImageSkeleton />
          )}
        </div>

        <div className="details">
          <div className="d-flex gap-2 mr-2">
            {movieInfo && (
              <div>
                <BookmarkToggle
                  active={bookmarkMovie?.imdbID === movieInfo?.imdbID}
                  movie={movieInfo}
                  toggle={toggle}
                />
              </div>
            )}
            <h3 className="title">{movieInfo?.Title}</h3>
          </div>

          <div className="d-flex gap-2 mt-3">
            {genres.map(item => (
              <Genre key={item} title={item} />
            ))}
          </div>
          <p className="plot">{movieInfo?.Plot}</p>
          <p className="release">Release Date: {movieInfo?.Released}</p>
          <button className="btn btn-primary play-trailer-btn">
            {/* <FilmIcon style={{ width: 20, height: 20 }} /> */}
            Play Trailer
          </button>
        </div>
      </div>
    </Container>
  );
}

export default HomePage;
