import {ApiMovieListItemType} from '../raw/ApiMovieListItem.ts';
import {MovieListItemType} from '../models/MovieListItemType.ts';

export default (_: ApiMovieListItemType): MovieListItemType => ({
  aka: _['#AKA'],
  actors: _['#ACTORS'],
  imdbId: _['#IMDB_ID'],
  imdbIv: _['#IMDB_IV'],
  imdbUrl: _['#IMDB_URL'],
  imgPoster: _['#IMG_POSTER'],
  rank: _['#RANK'],
  title: _['#TITLE'],
  year: _['#YEAR'],
  photoWidth: _.photo_width,
  photoHeight: _.photo_height,
});
