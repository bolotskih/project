"use strict";
let numberOfFilms = +prompt("Сколько фильмов вы уже смотрели", "1");

let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB.count);

let a = prompt("Один из последних фильмов", "");
let b = +prompt("на сколько оцените его","1");

personalMovieDB.movies[a] = b;
console.log(personalMovieDB.movies);