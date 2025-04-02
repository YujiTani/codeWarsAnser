
/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/

Object.defineProperty(
  String.prototype,
  'toJadenCase',
  {
    value:
      function toJadenCase() {
        const splitValue = this.split(' ').map(char => {
          return char[0].toUpperCase() + char.substring(1, char.length)
        })
        return splitValue.join(' ')
      }
  }
);

String.prototype.toJadenCase = function() {
  return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};

// best Crazy
Object.defineProperty(
  String.prototype,
  'toJadenCase',
  {
    value:
      function toJadenCase() {
        return this.replace(/(^|\s)[a-z]/g, (x) => x.toUpperCase())
      }
  }
);
