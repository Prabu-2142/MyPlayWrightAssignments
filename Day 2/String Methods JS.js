//String literal:
let fn = "Prabu";
let un = "Prabu";
console.log(fn===un);

//String objects:
let fn1 = new String("Prabu");
let un1 = new String("Prabu");
console.log(fn1===un1);

//Escape Sequence --> '\' 
let use = "It\'s a Regression Testing";
let use1 = "Hello this is a \"double quote\"";

//String Concatenation
let name = "Hello";
let name1 = "JavaScript";
console.log(name.concat(name1));
console.log(name+"-"+name1);
let name2 = 231;
let res1 = name1.toString.concat(name);

//Template Literal
let tc = 200;
let out = `The total test cases are: ${tc}`;

//String length -- String length starts from 1.
let wr = "Playwright";
console.log("The length of the string is :".length(wr));

//String indexOf -- String index starts from 0.
let w1r = "Playwright";
console.log(`The index value of the string is : ${w1r.indexOf('a')}`);

//String charAt -- returns the character present at index.
let w2r = "Playwright";
console.log(`The character of the string is : ${w2r.charAt(2)}`);

//Includes - Check if the given value is present or not. Output --> True or False
let val = "Playwright";
console.log(`The val contains: ${val.includes('Play')}`);

//Slice - It slices the value upto the given index limit -1.
//slice(start index, end index-1). negative values are allowed.(-4,-1)
// you cannot provide end index first and start index (5,2) swapping is not allowed.
let sl = "Playwright";
console.log(`The sliced String is: ${sl.slice(2,5)}`);

//substring
//substring(start index, end index-1).negative values are not allowed.(-4,-1)
//you can provide end index first and start index (5,2) swapping is allowed.
let cname = "playwright";
let res = cname.substring(5,2);

//String Revresal

//Split - Split each character into separate value.
let sp = "Play wright";
console.log(`The split String is: ${sp.split("")}`);

