//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1) + language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language.charAt(language.indexOf('J')) + language.charAt(language.indexOf('S')));

let abbrev = language.charAt(language.indexOf('J')) + language.charAt(language.indexOf('S'));

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for '${language}' is '${abbrev}'.`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(language.replace(language.slice(language.indexOf('c'),language.indexOf('c')+1),"g"));

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let titleCase = notTitleCase.replace("title","Title").replace("case","Case");
console.log(titleCase);
