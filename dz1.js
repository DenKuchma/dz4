// let numbers = prompt('Number: ')
// numbers = Number(numbers)
// let result0 = 0;
// let x = 0
// while (x <= numbers){
//     result0 += x ** 2
//     x += 1
// }
// console.log(result0)


// let arr = [3, 5, 12, 9, 23, 93, 17];
// let result1 = [];
// for(let item of arr){
//     if(item < 2 || item > 20)
//         continue;
//     else{
//         result1.push(item);
//     }   
// }
// let result2 = result1.reduce(function(sum, elem){
//         return sum + elem;
//     }, 0);
// console.log(result2);



// var arr1 = [[1, 6, 3, '6'], [10, 15, 13, '10']]
// var arr2 = arr1.flat(Infinity);
// var arr3 = [];
// for(var item of arr2){
//      if(typeof item === 'string' || item % 2 !== 0)
//         continue;
//     else{
//         arr3.push(item);
//     }
// }
// let arr4 = arr3.reduce(function(sum, elem){
//     return sum + elem;
// }, 0);
// console.log(arr4);


// const object = {
//     name: "Igor",  
// };

// function NewOb(Obj){
//     key = prompt('New key: ')
//     if (key in Obj){
//         console.log('Already used')
//     } else{
//         value = prompt('New value: ')
//         Obj[key] = value
//     }  
// }
// NewOb(object)
// console.log(object)


// func1 = {
//     c: 4,
//     func2(a, b) {
//         console.log(this.c + a + b)
//     }
// }
// function bindFunc(func, context, ...args) {
//     return ()=>{
//       func.apply(context, args)
//    }
// }
// var resultt = bindFunc(func1.func2, func1, 5,7)
// resultt()


// function sum(){
//     return [].reduce.call(arguments, function(sum, elem){
//          return sum + elem;
//     }, 0);
// }
// const result1 = sum.call(sum, 1,2,3,4,5)
// console.log(result1) 

// valObject0 = {
//     values: [1, '2', 4, 8, '8',  3, 10, null, false],
// }
// function getNewArray() {
//     if (this.values.length!=0) {
//         return this.values.filter(i=>typeof i == 'number' && i<10 && i>2)
//     }else {
//         return 'Values не найден'
//     }
// };
// getNewArray.call(valObject0)
// console.log(getNewArray.call(valObject0))



// const citiesAndCountries = {
// 	'Киев': 'Украина',
// 	'Нью-Йорк': 'США',
// 	'Амстердам': 'Нидерланды',
// 	'Берлин': 'Германия',
// 	'Париж': 'Франция',
// 	'Лиссабон': 'Португалия',
// 	'Вена': 'Австрия',
// };
// function getCity(newObj){
//     resultCity = []
//     for([key, value] of Object.entries(newObj)){
//         resultCity.push(`${key} - это ${value}`)
//     }
//     return resultCity
// }
// console.log(getCity(citiesAndCountries))


// const namesOfDays = {
//     ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
// }

// function getNameOfDay(language, data) {
//     return namesOfDays[language][data-1]
// }
// console.log(getNameOfDay('en', 1))




// const person = {
//     name: 'Vlad'
// };
// const person1 = {
//     age: 1
// };
// function setProto (currentObj, protoObj) {
//     currentObj.__proto__ = protoObj
// }
// setProto(person1, person);
// console.log(person1)


// const person0 = {
//     name: 'Vlad',
//     sex: 'male',

//     ageValidation (Age) {
//         if (Age < 18) {
//             return false
//         } else {
//             return true
//         }
//     },
//     setName (Name) {
//         this.name = Name
//     },
//     setAge (Age) {
//         if (this.ageValidation(Age)){
//             this.age = Age
//         } else {
//             this.age = 'Validation Error'
//         }
//     },
//     getName() {
//         return this.name
//     },
//     getAge() {
//         return this.age
//     }
// };
// const person01 = {
//     age: 18
// };
// person01.__proto__ = person0;


// person01.setName('Igor'); // установили новое имя
// person01.getName(); // имя
// console.log(person01)
// person01.setAge(20); // установили возраст
// person01.getAge();// получили возраст
// console.log(person01)
// person01.setAge(1); // передать возраст можно как угодно
// person01.getAge(); // 'Validation Error'
// console.log(person01)
// person01.setAge(22); // передать возраст можно как угодно
// person01.getAge(); // Новое значение - 20
// console.log(person01)