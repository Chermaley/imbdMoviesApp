import {ApiMovieType} from '../raw/ApiMovie.ts';
import {MovieType} from '../models/Movie';

export default (_: ApiMovieType): MovieType => ({
  aka: _['#AKA'],
  actors: _['#ACTORS'],
  imdbId: _['#IMDB_ID'],
  imdbIv: _['#IMDB_IV'],
  imdbUrl: _['#IMDB_URL'],
  imgPoster: _['#IMG_POSTER'],
  photoHeight: _.photo_height,
  rank: _['#RANK'],
  photoWidth: _.photo_width,
  title: _['#TITLE'],
  year: _['#YEAR'],
});
