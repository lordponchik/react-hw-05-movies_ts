const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzJjNjgwZTU1OGJkMmM2YjkwMmM4MGIyZDVlMDc3ZCIsIm5iZiI6MTczMDQ3NDM2NC43MzMxNzE1LCJzdWIiOiI2NDgxY2M5Y2UyNzI2MDAwZThiZjRlYjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5dCuWIPkc-FoQqtFcC5mms7ke4vYd9VzbOaT7ZD_h1c',
  },
};

async function fetchMoviesAPI(route: string) {
  const request = await fetch(`https://api.themoviedb.org/3/${route}`, options);
  const results = await request.json();

  return results;
}

export async function fetchTrendingMovies() {
  return await fetchMoviesAPI('trending/all/day?language=en-US');
}

export async function fetchMovies(q: string) {
  return await fetchMoviesAPI(`search/movie?query=${q}&include_adult=false&language=en-US&page=1`);
}
