export type MovieType = {
  title: string;
  imdbId: string;
  description?: string;
  genres?: string;
  posterImage?: string;
  actors?: string[];
  aggregateRating?: string;
  keywords?: string;
  review?: ReviewType;
};

export type ReviewType = {
  author: string;
  dateCreated: string;
  reviewBody: string;
  reviewRating?: number;
};
