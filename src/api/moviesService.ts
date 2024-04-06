import {axiosInstance} from './axiosInstanse';
import translateMovieListItem from './translaters/translateMovieListItem.ts';
import translateMovie from './translaters/translateMovie.ts';
import {MovieListItemType} from './models/MovieListItemType.ts';
import {MoviesResponseType} from './raw/ApiMovieListItem.ts';
import {ApiMovieType} from './raw/ApiMovieType.ts';
import {MovieType} from './models/MovieType.ts';

export const moviesService = {
  /**
   * Get movies
   * @param search
   */
  getMovies: async (search: string): Promise<MovieListItemType[]> => {
    const response = await axiosInstance.get(`/?q=${search}`, {
      transformResponse: data => {
        const parsedData = JSON.parse(data) as MoviesResponseType;
        return parsedData.description.map(translateMovieListItem);
      },
    });
    return response.data;
  },

  /**
   * Get movie by id
   * @param id
   */
  getMovieById: async (id: string): Promise<MovieType> => {
    const response = await axiosInstance.get(`/?tt=${id}`, {
      transformResponse: data => {
        const parsedData = JSON.parse(data) as ApiMovieType;
        return translateMovie(parsedData);
      },
    });
    return response.data;
  },
};
