// template strings

const title = "Modern JavaScript ES6";
const author = "Sam Judd";
const likes = 10;


// concatenation way

let result2 = "The blog called "+title+" by "+author+" has "+likes+" likes.";

console.log(result2);


// template string way
//use "backtick" key, left of 1, with ~

let result3 = `the blog called ${title} by ${author} has ${likes} likes`;



// creating html templates

let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>This blog has ${likes} likes.</span>
`
document.write(html);


