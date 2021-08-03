import {create} from 'apisauce';

const urlGetMovies = create ({
    baseURL: 'https://60e517955bcbca001749ec50.mockapi.io/api/test'
});
// const urlGetMovies = 'https://60e517955bcbca001749ec50.mockapi.io/api/test/movies';

function* getMoviesFromApi() {
    // const response = yield fetch(urlGetMovies, {
    //     method: 'GET',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: '',
    // });
    return response = urlGetMovies.get('/movies').then(response => {
    const movies = response.status === 200 ? (response.data): []   
    console.log(movies)    
    return movies;
    }).catch(err => {
        console.log(err);
      });
}
export const Api = {
    getMoviesFromApi
}; 