"use strict";
let numberOfFilms;

function start(){
    numberOfFilms = prompt('Сколько фильмов вы уже смотрели','');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = prompt('Сколько фильмов вы уже смотрели','');
    }
}
start();
let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms(){
    for ( let i = 0; i < 2; i++){
        const a = prompt("Один из последних фильмов", "");
        const b = prompt("на сколько оцените его","1");
    
        if( a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
        }else{
            i--;
        }
        
    }
}
rememberMyFilms();



function detectPersonalevel(){
    if (personalMovieDB.count < 10){
        console.log('мало');
    }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('вы обычный зритель');
    }else if(personalMovieDB.count >= 30){
        console.log('вы киноман');
    }else{
        console.log('Error');
    }
}
detectPersonalevel();



function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for (let i = 1; i <= 3; i++){        
        personalMovieDB.genres[i -1] = prompt(`Ваш любимый жанр под номером ${i}`,'');
    }
}
writeYourGenres();