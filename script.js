"use strict";


// const result=confirm('Are you here?');
// console.log(result);

// const answer=+prompt('Are you 18?', '18');
// console.log(typeof(answer));

// let answers=[];
// answers[0]=prompt('Как ваше имя?', '');
// answers[1]=prompt('Как ваша фамилия?', '');
// answers[2]=prompt('Сколько вам лет', '');

// document.write(answers);
// let arr=[];
// arr[0]=prompt('Как ваше имя', '');
// arr[1]=prompt('Как ваша фамилия','');
// arr[2]=prompt('Сколько вам лет?','');
// document.write(typeof(arr));

// const category='toys';

// console.log(`https://sdf.com/${category}`)
// document.write(category);

// const user="Ivan";
// // alert(`Привет, ${user}`);
// const arr=[];
// arr[0]=prompt('Привет, как твоё имя?', '');
// alert(`Привет, ${arr[0]}`);
// arr[1]=prompt('Как твоя фамилия', '');
// alert(`Какое великое имя! ${arr[1]}`);
// confirm(`Могу ли я вас, ${arr[0]} ${arr[1]} называть своим господином`);

// let incr=10,
// 	decr=10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

// ++incr;
// --decr;

// console.log(incr++);
// console.log(decr--  );

// || или   && и   тру и(&&) фалс =фалс оператор и возвращает тру если все тру, но стоит быть одному фалс и итог фалс. или (||)

// const isChecked=true,
// 	  isClose= false;

// console.log(isChecked || isClose);

// console.log(isChecked && isClose);

// const m=true,
// 	  f=false;

// console.log(m&&f);

const  numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB={
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const a=prompt('Один из последних просмотренных фильмов?',''),
	  b=prompt('На сколько оцените его?', ''),
	  c=prompt('Один из последних просмотренных фильмов?',''),
	  d=prompt('На сколько оцените его?', '');


personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;

console.log(personalMovieDB);