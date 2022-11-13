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

// const numberOfFilms= +prompt('Сколько фильмов смотрели?', '');

// let personalMovieDB={
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres:[],
// 	privat: false,
// };

// const a= prompt('Один из последних просмотренных фильмов?', '');
// const b= prompt('На сколько оцените его?', '');
// const c= prompt('Один из последних просмотренных фильмов?', '');
// const d= prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a]=b;
// personalMovieDB.movies[c]=d;


// for (let i=0; i<3; i++){
// 	let a= prompt('Один из последних просмотренных фильмов?', '');
// 	let b= prompt('На сколько оцените его?', '');

// 	if(a!=null && b!=null && a!='' && b!='' && a.length<50){
// 		personalMovieDB.movies[a]=b;
// 		console.log("done");
// 	} else{
// 		console.log('error');
// 		i--; 
// 	}
	
// }

// if (personalMovieDB.count<10){
// 	alert('Просмотрено довольно мало фильмов');
// } else if(personalMovieDB.count>=10 && personalMovieDB.count<30){
// 	alert('Вы классический зритель');
// } else if(personalMovieDB.count>=30){
// 	alert('Вы киноман!');
// } else{
// 	alert('Произошла ошибка');
// }

// console.log(personalMovieDB);




// отработка решений первой и второй задач

// let numberOfFilms=+prompt('Сколько фильмов вы уже посмотрели?', '');

// let personalMovieDB={
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,

// }

// const a=prompt('Один из последних просмотренных фильмов?', ''),
// 	  b=prompt('На сколько оцените его?', ''),
// 	  c=prompt('Один из последних просмотренных фильмов?', ''),
// 	  d=prompt('На сколько оцените его?', '');

// for(let i=0; i<2; i++){
// 	let a=prompt('Один из последних просмотренных фильмов?', '');
// 	let	b=prompt('На сколько оцените его?', '');
// 	if (a!=null&&b!=null&&a!=''&&b!=''&&a!=a.length<50){
// 		personalMovieDB.movies[a]=b;
// 		console.log('done');
// 	} else{
// 		i--;
// 		console.log('error');
// 	}

	
	
// }

// if(personalMovieDB.count<10){
// 	alert('Просмотрено довольно мало фильмов');

// }else if(personalMovieDB.count>=10&&personalMovieDB.count<30){
// 	alert('Вы классический киноман');
// }else if(personalMovieDB.count>=30){
// 	alert('Вы киноман!');
// }




// console.log(personalMovieDB);

// функции

// let num=20;
// console.log(calc(4,3));
// console.log(calc(5,6));
// console.log(calc(10,6));

// function showFirstMessage(text){
// 	console.log(text);
// 	num=10;
// }

// showFirstMessage('hello word');
// console.log(num);

// function calc(a,b){
// 	return(a+b);
// }


// function ret(){
// 	let num=50;
// 	return num;
// }

// const anotherNum=ret();
// console.log(anotherNum);


// const logger=function(){
// 	console.log('hello');
// };
// logger();

// const calc=(a,b)=>a+b;


// методы и свойства строк и чисел

// const str="teSt";
// console.log(str.length);
// const arr=[1,2,3,4,5];
// console.log(arr.length);
// console.log(str[2]);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let fruit="Some fruit";
// console.log(fruit.indexOf("fruit"));

// const logg="hello world";
// console.log(logg.slice(6,11));
// const a=logg.indexOf("hello");
// console.log(a);
// const b=a+5;
// console.log(logg.slice(a,b));
// console.log(logg.slice(a,b)+logg.slice(7,8));

// console.log(logg.substring(6,11));

// console.log(logg.substr(6,5));

// работа с числами методы и свойства

// const num=12.2;
// console.log(Math.round(num));

// const test="12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

let numberOfFilms;

function start(){
	numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели? ', '');

	while(numberOfFilms==''||numberOfFilms==null||isNaN(numberOfFilms)){
		numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели? ', '');
	}
}

start();



let personalMovieDB={
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	secret:[],

};


function rememberMyFilms(){
	for (let i=0; i<2; i++){
		const a=prompt('Один из последних просмотренных фильмов? ', ''),
		  b=prompt('На сколько оцените его? ', '');
		if (a!=null&&b!=null&&a!=''&&b!=''&&a!=a.length<50){
			personalMovieDB.movies[a]=b;			
		}else{
			i--;
		}
	}
}

rememberMyFilms();



function detectPersonalMovie(){
	if (personalMovieDB.count<10){
		console.log("Просмотрено довольно мало фильмов");
	} else if(personalMovieDB.count>=10&&personalMovieDB.count<30){
		console.log("Вы классический зритель");
	}else if(personalMovieDB.count>=30){
		console.log("Вы киноман");
	}else{
		console.log('Произошла ошибка');
	}
}

detectPersonalMovie();


function writeYourGenres(){
	for(let i=1; i<=3; i++){
		let genre=prompt(`Ваш любимый жанр под номером ${i}`);
		
		personalMovieDB.genres[i-1]=genre;
	}
}

writeYourGenres();


function privatDataBase(){
	let privat=confirm('Сделать список приватным');
	if (privat===true){
		personalMovieDB.privat=true;
	}else{
		personalMovieDB.privat=false;
	}
}

privatDataBase();



function showMyDB(){
	if (personalMovieDB.privat===false){
		console.log(personalMovieDB);
	}else{
		console.log('Список приватный!');
	}
}

showMyDB();

// function showMyDB(hidden){
// 	if (!hidden){
// 		console.log(personalMovieDB);
// 	}
// }

// showMyDB(personalMovieDB.privat);

function secretCase(){
	let a= +prompt('Количество записей в секретный массив');
	for(let i=1;i<= +a; i++){
		let secretPut=prompt(`Сделай запись ${i}`)
		personalMovieDB.secret[i-1]=secretPut;
	}
	console.log(personalMovieDB.secret);
}

secretCase();