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


// Properties of an object received from api
// id: 4960
// original_title: "Synecdoche, New York"
// overview: "A theater director struggles with his work, and the women in his life, as he attempts to create a life-size replica of New York inside a warehouse as part of his new play."
// popularity: 7.898
// poster_path: "/l3r5MgeN0UUySPbf6aWeUyKGdb2.jpg"
// release_date: "2008-10-24"
// title: "Synecdoche, New York"
// vote_average: 7.6
// vote_count: 538

// poster path: https://image.tmdb.org/t/p/w500 + poster_path
