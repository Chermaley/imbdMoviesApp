import {ApiMovieListItemType} from './ApiMovieListItem.ts';

export type ApiMovieType = {
  fake: ApiMovieListItemType;
  short: {
    description: string;
    genre: string[];
    actor: {name: string}[];
    aggregateRating: {ratingValue: string};
    keywords: string;
  };
};
