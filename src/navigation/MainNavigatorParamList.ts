import {HOME, MOVIES_DETAIL} from './routes.ts';
import {MovieType} from '../api/models/Movie.ts';

export type MainNavigatorParamList = {
  [HOME]: undefined;
  [MOVIES_DETAIL]: {movie: MovieType};
};
