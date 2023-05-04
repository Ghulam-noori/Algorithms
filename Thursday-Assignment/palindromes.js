//A:Palindromes
//Question: Declare a function isPalindrome(str) that takes a string as an input.
//Return true if the given string is a palindrome. Otherwise, return false.

// B: Pseudocode:
    //1. Create a function with parameters: str.
    //2. Change the target string to an string array(strArr) by using split method.
    //3. Create a loop function that iterates through the string array(strArray).
    //4. Check if the string array(strArr) is a palindrome or not with if condition.
    //5. If the string array(strArr) is a palindrome, return true.
    //6. If the string array(strArr) is not a palindrome, return false.
    //7. print the result by giving a value to the parameter of the function "isPalindrome".

//C: Code:

function palindrome(str) {
    let strArr = str.split('');
    for (let i = 0; i < strArr.length / 2; i++) {
        if (strArr[i]=== strArr[strArr.length - 1 - i]) {
            return ("this is a palindrome");
        }
        return ("not a palindrome");
    }
}
console.log(palindrome('madam'));

//Diagram

////            ----------------------------     _________________
//             | Function                   |   |   Create       |
//            | function name: palindrome  |...|  string array  |
//           |Parameters: str = undefined |    | ______________|
//            ----------------------------         |
//             |                     |      ______|_________          
//             |                     |    |    loop         |
//             |                     |    |through strArray | ---- variable i ----- condition () .....increment i
//       Take  |                     |   |________________|
//       the   |                     |               |
//       value |                     |              |______________                           
//       for   |                     |             | if condition |                          |------if the string is palindrome
//   parameter |                     |            |              |------ check the string array
//           |                     |            |______________|          |                |
//          ------------------------                                     |                  ----------if the string is not a palindrome 
//       | Parameter value ="madam" |                                    |
//       | print the result in     |-----------------------------------|
//      |console log              /                                   
//      -------------------------- ---------if the condition was true then print string "true", if the condition was false prints string "false"