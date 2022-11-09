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

// const  numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB={
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// };

// const a=prompt('Один из последних просмотренных фильмов?',''),
// 	  b=prompt('На сколько оцените его?', ''),
// 	  c=prompt('Один из последних просмотренных фильмов?',''),
// 	  d=prompt('На сколько оцените его?', '');


// personalMovieDB.movies[a]=b;
// personalMovieDB.movies[c]=d;

// console.log(personalMovieDB);

// повтор решения задачи

// const numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB={
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// };

// const a=prompt('Один из последних просмотренных фильмов?', '');
// const b=prompt('На сколько оцените его?', '');
// const c=prompt('Один из последних просмотренных фильмов?', '');
// const d=prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a]=b;
// personalMovieDB.movies[c]=d;

// console.log(personalMovieDB);
// с alert не получается, забыл + в 88 строке и правильное написание prompt

// использование условий урок 13; условие в if должно быть приведено в булиновый тип
// if (4==9){
// 	console.log('ok!');
// } else{
// 	console.log('Error');
// }

// const num=50;

// if (num<49){
// 	console.log('error');
// } else if (num>100) {
// 	console.log('Много');
// } else {
// 	console.log('ok!')
// }

// тернарный оператор позволяет экономить место кода. есть три аргумента , поэтому тернарный оператор.

// (num===50) ? console.log('ok'): console.log('error');

// свитч помогает решать проблему связанную с большим количеством ветвлений. всегда идет на строгое сравнение!!! === можно работать с числами и строками
// const num=51;

// switch(num){
// 	case 49:
// 		console.log('error');
// 		break;
// 	case 100:
// 		console.log ('error');
// 		break;
// 	case 50:
// 		console.log('ok');
// 		break;
// 	default:
// 		console.log('not yet');
// 		break;
// }

// циклы урок 14 для повторения однотипных действий

// let num=50;

// while(num<=55){
// 	console.log(num);
// 	num++;
// }

// заставляем цикл что=то сделать, потом проверит условия и выйти
// do{
// 	console.log(num);
// 	num++;
// }
// while(num<55);

// for (let i=1; i<8; i++){
// 	if(i===6){
// 		// break;
// 		continue;
// 	}
// 	console.log(i);
// }


// практика

const numberOfFilms= +prompt('Сколько фильмов смотрели?', '');

let personalMovieDB={
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres:[],
	privat: false,
};

// const a= prompt('Один из последних просмотренных фильмов?', '');
// const b= prompt('На сколько оцените его?', '');
// const c= prompt('Один из последних просмотренных фильмов?', '');
// const d= prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a]=b;
// personalMovieDB.movies[c]=d;


for (let i=0; i<3; i++){
	let a= prompt('Один из последних просмотренных фильмов?', '');
	let b= prompt('На сколько оцените его?', '');

	if(a!=null && b!=null && a!='' && b!='' && a.length<50){
		personalMovieDB.movies[a]=b;
		console.log("done");
	} else{
		console.log('error');
		i--; 
	}
	
}

if (personalMovieDB.count<10){
	alert('Просмотрено довольно мало фильмов');
} else if(personalMovieDB.count>10 && personalMovieDB.count<30){
	alert('Вы классический зритель');
} else if(personalMovieDB.count>30){
	alert('Вы киноман!');
} else{
	alert('Произошла ошибка');
}

console.log(personalMovieDB);