import {ApiMovieType} from '../raw/ApiMovieType.ts';
import {MovieType} from '../models/MovieType.ts';

export default (_: ApiMovieType): MovieType => ({
  title: _.fake['#TITLE'],
  imdbId: _.fake['#IMDB_ID'],
  description: _.short.description,
  genres: _.short.genre.join(', '),
  posterImage: _.fake['#IMG_POSTER'],
  actors: _.short.actor.map(actor => actor.name),
  aggregateRating: _.short.aggregateRating.ratingValue,
  keywords: _.short.keywords,
});
