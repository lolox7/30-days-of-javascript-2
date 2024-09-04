
// 💻 Exercises
// Exercises: Level 1
// Get user input using prompt(“Enter your age:”). 
//If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// let driverAge = prompt('Enter your age, you, who wants to drive')
// if (parseInt >= 18) {
//     alert('you are old enough to drive');
// }   else {
//     alert('you must wait '+ (18 - parseInt(driverAge)) + ' years before passing your driving licence')
// }
// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.
// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// let myAge = prompt('enter my age') , yourAge = prompt('enter your age')

// if (myAge === yourAge) {
//     alert("we share the same age")
// }   else if (myAge < yourAge) {
//     alert('you are' + (yourAge - myAge) + 'years older than me');
// }   else {
//     alert('you are ' + (myAge - yourAge) +' years younger than me')
// }

// Enter your age: 30
// You are 5 years older than me.
// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// let a = prompt("enter a number a"), b = prompt("enter a number b")
// a = parseInt(a), b = parseInt(b)
// using if else
// if (a === b ) {
//     alert('a and b are the same number')
// }   else if (a > b) {
//     alert('a is superior to b')
// }   else {
//     alert('b is superior to a')
// }
// ternary operator.
// a === b
//     ? alert('a and b are the same')
//     : a < b
//         ? alert('a is under b')
//         : alert('b is under a')
//   let a = 4
//   let b = 3
//   4 is greater than 3
// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// let numberA = prompt('enter number a ')
// numberA = parseInt(numberA)
// numberA%2 === 0
//     ? alert('your number is even')
//     : alert(' your number is odd')
// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.
// Exercises: Level 2
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// let grade = prompt('enter your grade')
// grade = parseInt(grade)

//     switch (true){
//     case 80 <= grade && grade <= 100:
//         alert('a')
//         break

//     case 70 <= grade && grade < 80:
//         alert('b')
//         break
    
//     case 60 <= grade && grade <= 70:
//         alert('C')
//         break

//     case 50 <= grade && grade <= 60:
//         alert('d')
//         break

//     case 0 <= grade && grade <= 50:
//         alert('e')
//         break
    
//     case grade < 0 || grade > 100:
//         alert('you can\'t score over 100 and under 0')
//         break
    
//     default : 
//         alert('enter a grade with numbers')
//         break
//     } 

// let month = prompt('enter a month')

// switch (month.toLowerCase()){
//     case 'december' :
//     case 'january':
//     case 'february':
//         alert('the season of your month is winter')
//         break
        
//     case 'march':
//     case 'april':
//     case 'may':
//         alert('the season of your month is spring')
//         break
        
//     case 'june':
//     case 'july':
//     case 'august':
//         alert('the season of your month is summer')
//         break
        
//     case 'september':
//     case 'october':
//     case 'november':
//     alert('the season of your month is autumn')
//     break
//     default : 
//     alert('it\'s not a month written in english')

// }

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.

// let day = prompt('enter a day')
// day = day.toLowerCase()
//     switch (day) {
//         case 'monday':
//         case 'tuesday':
//         case 'wednesday':
//         case 'thursday':
//         case 'friday' : 
//         alert('its a work day')
//         break

//         case 'saturday':
//         case 'sunday':
//         alert("it's a week end day")
//         break    

//         default : 
//         alert('fuckin errora')
//     }
// Exercises: Level 3
// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.
// let month = prompt('enter the month where you want to know the number of days within')
// if (month == 'february') {
//     let februaryYear = prompt('of wich year?')
//     if (februaryYear == parseInt(februaryYear) && (februaryYear % 4) == 0 ) {
//         alert('there is 29 days in february in the year ' + februaryYear)
//     } else {
//         alert('there is 28 days in february in the year ' + februaryYear)
//     }

// }
// let februaryYear
//     switch (month) {
//         case 'january' :
//         case 'march' :
//         case 'may' :
//         case 'july' :
//         case 'august' :
//         case 'october' :
//         case 'december':
//             alert('there is 31 days in ' + month ) 
//             break
//         case 'april':
//         case 'june':
//         case 'september':
//         case 'november':
//             alert('there is 30 days in ' + month)
//             break
//     }
// Write a program which tells the number of days in a month, now consider leap year.
// 🎉 CONGRATULATIONS ! 🎉