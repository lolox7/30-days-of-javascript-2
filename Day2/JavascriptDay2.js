// Exercise: Level 1
// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days of Javascript';
// Print the string on the browser console using console.log()
console.log(challenge);
// Print the length of the string on the browser console using console.log()
// console.log(challenge.length);
// Change all the string characters to capital letters using toUpperCase() method
// console.log(challenge.toUpperCase());
// Change all the string characters to lowercase letters using toLowerCase() method
// console.log(challenge.toLowerCase());
// Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(3,7));
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring((3)));
// Check if the string contains a word Script using includes() method
console.log(challenge.includes('script'));
// Split the string into an array using split() method
console.log(challenge.split());
// Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '));
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let l22 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(l22.split());
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('Javascript','Python'));
// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(14));
// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt("J"));
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'));
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'));
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let becauseSentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(becauseSentence.indexOf('because'))
// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(becauseSentence.lastIndexOf('because'))
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(becauseSentence.search('because'))
// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let stringEG = ' 30 Days Of JavaScript '
console.log(stringEG.trim(' '))
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('3'));
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('t'));
// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'))
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let string = ""
console.log(string.concat("30 Days of", "Javascript 1"));

// Use repeat() method to print 30 Days Of JavaScript 2 times
string = "30 Days of Javascript"
console.log(string.repeat(2))

// Exercise: Level 2
// Using console.log() print out the following statement:

// The quote 'There is no exercise better for the heart than reaching down and lifting people up.'
// by John Holmes teaches us to help one another.
console.log(" The quote 'There is no exercise better for the heart than reaching down and lifting people up.'by John Holmes teaches us to help one another.")
// Using console.log() print out the following quote by Mother Teresa:

// "Love is not patronizing and charity isn't about pity, it is about love. 
// Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let stringTen = '10'
let ten = 10 ;

console.log(typeof stringTen);
let tenInt = 10;
console.log(typeof (ten) === typeof (parseInt(stringTen)))

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat(Math.round(9.8)) == 10)

// Check if 'on' is found in both python and jargon
let python = "python", jargon = "jargon"
console.log(python.includes("on") && jargon.includes("on"))
// I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentenceJargon ="I hope this course is not full of jargon. "
console.log(sentenceJargon.includes(jargon))
// Generate a random number between 0 and 100 inclusively.
console.log(parseInt(100*Math.random()))
// Generate a random number between 50 and 100 inclusively.
console.log(parseInt(50 +50*Math.random()))

// Generate a random number between 0 and 255 inclusively.
console.log(parseInt(255*Math.random()))

// Access the 'JavaScript' string characters using a random number.
let JavaScript = 'Javascript' 
console.log(JavaScript [parseInt(10 * Math.random())])
// Use console.log() and escape characters to print the following pattern.
console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125\t")
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(becauseSentence)
console.log(becauseSentence.substring(31,55))
// Exercises: Level 3
// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let loveSentence = "'Love is the best thing in this world. Some found their love and some are still looking for their love.'"
let loveCount = loveSentence.match(/love/g) 
console.log(loveCount)
// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let becauseCount = becauseSentence.match(/because/gi) // g for globas -> search the whole text, i for case insensitive
console.log(becauseCount)
// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let sentenceUpgraded
sentenceUpgraded = sentence.replace(/%|&|@|;|\$|#/g,'')
console.log(sentenceUpgraded)

// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let salary, bonus, online
let regEx = /\d+/g
console.log(text.match(regEx))
salary = parseInt(text.match(regEx)[0])
bonus = parseInt(text.match(regEx)[1])
online = parseInt(text.match(regEx)[2])
console.log(salary)
let annualSalary = salary*12 + bonus + online*12
console.log("His annual salary is "+annualSalary +" euros")