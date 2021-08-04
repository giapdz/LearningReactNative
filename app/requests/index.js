import {create} from 'apisauce';

const urlGetMovies = create ({
    baseURL: 'https://60e517955bcbca001749ec50.mockapi.io/api/test'
});
// const urlGetMovies = 'https://60e517955bcbca001749ec50.mockapi.io/api/test/movies';
const urlPostMovies = 'https://60e517955bcbca001749ec50.mockapi.io/api/test/movies';


function* getMoviesFromApi() {
    
    return response =yield urlGetMovies.get('/movies').then(response => {
    const movies = response.status === 200 ? (response.data): []   
    console.log(movies)    
    return movies;
    }).catch(err => {
        console.log(err);
    });
}
function* insertNewMovieFromApi(newMovie) {
    // const response = yield fetch(urlPostMovies, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         name: newMovie.name,
    //         releaseYear: newMovie.releaseYear,
    //     }),
    // });
    // yield console.log(`response = ${JSON.stringify(response)}`); 
    // return yield (response.status === 201);//true or false
    const response = yield urlGetMovies.post('./movies',{name: newMovie.name, releaseYear: newMovie.releaseYear});
    yield console.log(`response = ${JSON.stringify(response)}`); 
    return yield (response.status === 201);//true or false
}
export const Api = {
    getMoviesFromApi,
    insertNewMovieFromApi
}; 