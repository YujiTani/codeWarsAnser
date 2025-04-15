// Complete the solution so that the function will break up camel casing, using a space between words.
function solution(string) {
  return string.replaceAll(/[A-Z]/g, (char) =>  ` ${char.toUpperCase()}`)
}

// no1 crazy
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}
