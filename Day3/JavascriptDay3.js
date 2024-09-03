// Exercises: Level 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

// Check if type of '10' is equal to 10
console.log(typeof('10') == typeof(10))
// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == typeof(10))
// Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
console.log(0 < 5)
console.log('1' !== 1 )
console.log(1 === 1)
// Write three JavaScript statement which provide falsy value.
console.log(0 > 5)
console.log('1' != 1 )
console.log(1 === 10)
console.log('tes')
// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

 console.log(4 > 3) //true
 console.log(4 >= 3) //true
 console.log(4 < 3) //fals
 console.log(4 <= 3) //false
 console.log(4 == 4 )//true
 console.log(4 === 4 )//true
 console.log(4 != 4) //false
 console.log(4 !== 4) //false
 console.log(4 != '4') //false
 console.log(4 == '4' )//true
 console.log(4 === '4' )//false

// Find the length of python and jargon and make a falsy comparison statement.
let jargon = 'jargon', python='python';
console.log(jargon.length)
console.log(python.length)
console.log(jargon.length < python.length)

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12) // TRUE
console.log(4 > 3 && 10 > 12) // FALSE
console.log(4 > 3 || 10 < 12) // TRUE
console.log(4 > 3 || 10 > 12) // TRUE
console.log(!(4 > 3)) // FALSE
console.log(!(4 < 3)) // TRUE
console.log(!(false)) // TRUE
console.log(!(4 > 3 && 10 < 12)) // FALSE
console.log(!(4 > 3 && 10 > 12)) // TRUE
console.log(!(4 === '4')) // TRUE

let dragon= 'dragon'
console.log(!(python.includes('on') && dragon.includes('on')))
console.log(dragon)
// There is no 'on' in both dragon and python False

// Use the Date object to do the following activities
const now = new Date
// What is the year today?
console.log(now.getFullYear())
// What is the month today as a number?
console.log(now.getMonth())
// What is the date today?
console.log(now.getDate())
// What is the day today as a number?
console.log(now.getDay())
// What is the hours now?
console.log(now.getHours())
// What is the minutes now?
console.log(now.getMinutes())
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime())
// Exercises: Level 2
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// let base = prompt('enter the base of a triangle')
// let height = prompt('enter the base of a triangle')
// let areaTriangle = base * height * 0.5
// alert(areaTriangle)
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// let sideA = prompt('enter the length of the side A')
// let sideB = prompt('enter the length of the side B')
// let sideC = prompt('enter the length of the side C')
// let perimeter= parseInt(sideA) + parseInt(sideB) + parseInt(sideC)
// alert((perimeter))
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// let lengthRectangle = prompt('enter the length of your rectangle')
// let heightRectangle = prompt('enter the height of your rectangle')
// let areaRectangle = lengthRectangle * heightRectangle , perimeterRectangle = lengthRectangle * 2 + heightRectangle * 2
// alert('your Area is ' +areaRectangle+ 'and your perimeter is ' + perimeterRectangle)
// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let circleRadius = prompt('give me the radius')
// let circleArea = Math.PI * circleRadius*circleRadius , circleCircumference = 2 * Math.PI * circleRadius
// alert('your perimeter is' + Math.round(circleCircumference) +' and your area is ' + Math.round(circleArea))
// Calculate the slope, x-intercept and y-intercept of y = 2x -2

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// Compare the slope of above two questions.

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// let numberHoursWorked = prompt ('how many hours worked?')
// let hoursRate = prompt('at wich rate?')
// let totalPay = numberHoursWorked*hoursRate
// alert('you will be payed ' + totalPay)


// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
// If the length of your name is greater than 7 say, your name is long else say your name is short.

// Compare your first name length and your family name length and you should get this output.
// let firstName = prompt('enter your firstname') 
// let lastName = prompt('enter your last name')

// firstName.length === lastName.length 
//     ? alert('your last and firstname have the same lenght')
//     : firstName.length < lastName.length
//         ? alert('your last name is longer than your last name')
//         : alert('your first name is longer than your last name')
 // let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.


// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive
// let driverAge = prompt('enter your age, biker')

// parseInt(driverAge) < 18 
//     ? alert('you can drive in ' + (18 - parseInt(driverAge))+'years)
//     : alert ('you can drive boss')
// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// let lifeTime = prompt('how many spring have you seen ?')
// alert('you lived' + lifeTime * 31536000)
// Enter number of years you live: 100
// You lived 3153600000 seconds.
// Create a human readable time format using the Date time object
// alert("It's now " +now.getFullYear() + " - " + now.getMonth() +  " - " + now.getDay()  +  "   " + now.getHours() + ":"+ now.getMinutes() ) 
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
// Exercises: Level 3

// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
// let upgradeHour,upgradeMinutes
// upgradeHour < 10 
//     ?upgradeHour = '0'+ now.getHours()
//     : upgradeHour = now.getHours()
// upgradeMinutes < 10 
//     ?  upgradeMinutes = '0'+ now.getMinutes()
//     : upgradeMinutes= now.getMinutes()
// alert("It's now " +now.getFullYear() + "-" + now.getMonth() +  "-" + now.getDay()  +  "   " + now.getHours() + ":"+ now.getMinutes() ) 