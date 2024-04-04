import {axiosInstance} from './axiosInstanse.ts';
import translateMovie from './translaters/translateMovie.ts';
import {MovieType} from './models/Movie.ts';
import {MoviesResponseType} from './raw/ApiMovie.ts';

export const moviesService = {
  /**
   * Get movies
   * @param search
   */
  getMovies: async (search: string): Promise<MovieType[]> => {
    const response = await axiosInstance.get(`/?q=${search}`, {
      transformResponse: data => {
        const parsedData = JSON.parse(data) as MoviesResponseType;
        return parsedData.description.map(translateMovie);
      },
    });
    return response.data;
  },
};
