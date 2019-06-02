export class Movie {
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
  poster_path: string;

  constructor(a?) {
    const posterPathFrefix = 'https://image.tmdb.org/t/p/w500';
    if (a) {
      this.id = a.id;
      this.original_title = a.original_title;
      this.overview = a.overview;
      this.popularity = a.popularity;
      this.release_date = a.release_date;
      this.title = a.title;
      this.vote_average = a.vote_average;
      this.vote_count = a.vote_count;
      this.poster_path = (a.poster_path) ? (posterPathFrefix + a.poster_path) : null;
      }
    }
}
