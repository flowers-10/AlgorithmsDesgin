import ArrayStack from "./02_ArrayStack";

function isValid(s: string):boolean {
  const stack = new ArrayStack<string>();
  for(let i = 0;i<s.length;i++) {
    if(s[i] === "{") {
      stack.push("}")
    }else if(s[i] === "[") {
      stack.push("]")
    }else if(s[i] === "(") {
      stack.push(")")
    }else {
      if(s[i] !== stack.pop()) {
        return false
      }
    }
  }

  return stack.size() === 0
};

console.log(isValid("()"));
console.log(isValid("(){}[]"));
console.log(isValid("((]({})"));



