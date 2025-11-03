// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let allDirectors =  array.map(name => name.director);
  console.log("EXERCICE 1 ->", allDirectors);
  return allDirectors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let allMoviesByDirector = array.filter(movie => movie.director === director).map (movie => movie.title) ;
  console.log("EXERCICE 2 ->", allMoviesByDirector );
  return allMoviesByDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let filmScoreByDirector = array.filter(movie => movie.director === director).map (movie => movie.score);
  let avgFilmScoreByDirector = filmScoreByDirector.reduce ((totalScore, individualScore) => {return totalScore + individualScore}, 0) / filmScoreByDirector.length; 
  console.log("EXERCICE 3 ->", avgFilmScoreByDirector );
  return avgFilmScoreByDirector;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let allMoviesByTitle = array.map (movie => movie.title);
  let twentyFirstMovies = allMoviesByTitle.sort ();
  twentyFirstMovies.length = 20;
  console.log("EXERCICE 4 ->", twentyFirstMovies );
  return twentyFirstMovies;
}


// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let allMovies = array.map (movie => movie.year + ": " + movie.title);
  let moviesPerYear = allMovies.sort();
  console.log("EXERCICE 5 ->", moviesPerYear );
  return moviesPerYear;
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let allMoviesByGenre = array.filter(movie => movie.genre.includes(genre)).map (movie => movie.score);
  let avgFilmScoreByGenre = allMoviesByGenre.reduce ((totalScore, individualScore) => {return totalScore + individualScore}, 0) / allMoviesByGenre.length; 
  console.log("EXERCICE 6 ->", avgFilmScoreByGenre );
  return avgFilmScoreByGenre;
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
