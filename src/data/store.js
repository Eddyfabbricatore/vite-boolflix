import { reactive } from "vue";

export const store = reactive({
  apiMovieUrl: 'https://api.themoviedb.org/3/search/movie',
  apiSeriesUrl: 'https://api.themoviedb.org/3/search/tv',
  apiKey: 'e99307154c6dfb0b4750f6603256716d',
  nameToSearch: '',
  moviesList: [],
  seriesList: [],
  isSearch: false
});