export async function fetchMovies({ search, year, type }: { search: string; year: number; type: string }) {
  // const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

  // const response = await fetch(url);
  // const responseJson = await response.json();
  // return responseJson.Search;

  return [
    {
      Title: 'Star Wars: Episode IV - A New Hope',
      Year: '1977',
      imdbID: 'tt0076759',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Star Wars: Episode V - The Empire Strikes Back',
      Year: '1980',
      imdbID: 'tt0080684',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'Star Wars: Episode VI - Return of the Jedi',
      Year: '1983',
      imdbID: 'tt0086190',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
  ];
}

export async function getMovieByID(id: string) {
  // const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

  // const response = await fetch(url);
  // const responseJson = await response.json();
  // return responseJson.Search;

  return {
    Title: 'Star Wars: Episode IV - A New Hope',
    Year: '1977',
    Rated: 'PG',
    Released: '25 May 1977',
    Runtime: '121 min',
    Genre: 'Action, Adventure, Fantasy',
    Director: 'George Lucas',
    Writer: 'George Lucas',
    Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher',
    Plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ...",
    Language: 'English',
    Country: 'United States',
    Awards: 'Won 6 Oscars. 65 wins & 31 nominations total',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg',
    Ratings: [
      {
        Source: 'Internet Movie Database',
        Value: '8.6/10',
      },
      {
        Source: 'Rotten Tomatoes',
        Value: '93%',
      },
      {
        Source: 'Metacritic',
        Value: '90/100',
      },
    ],
    Metascore: '90',
    imdbRating: '8.6',
    imdbVotes: '1,388,289',
    imdbID: 'tt0076759',
    Type: 'movie',
    DVD: '06 Dec 2005',
    BoxOffice: '$460,998,507',
    Production: 'N/A',
    Website: 'N/A',
    Response: 'True',
  };
}
