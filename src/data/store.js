import { reactive } from "vue";

export const store = reactive({
  apiMovieUrl: 'https://api.themoviedb.org/3/search/movie',
  apiKey: 'e99307154c6dfb0b4750f6603256716d',
  movieToSearch: '',
  moviesList: [],
  moviesSearchList: []
});