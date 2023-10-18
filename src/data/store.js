import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/',
  apiParams: {
    api_key: '77f94026fe684e175225180aaa0b7696',
    language: 'it-IT',
    query: ''
  },
  movie: [],
  tv: []
});