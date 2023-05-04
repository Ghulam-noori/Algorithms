//A:Palindromes

function palindrome(str) {
    let strArr = str.split('');
    for (let i = 0; i < strArr.length / 2; i++) {
        if (strArr[i]=== strArr[strArr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(palindrome('A man, a plan, a canal: Panama'));