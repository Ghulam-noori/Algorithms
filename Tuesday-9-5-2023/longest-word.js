//A: Question
//Return the length of the longest word in the provided sentence.
//Your response should be a number. For these algorithms you are allowed to use the split() method.
//findLongestWord("May the force be with you") should return 5.



//B: Pseudocode:


//Code
function findLongestWord(str) {

    var arr = str.split(' ');
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        var valStr = arr[i].length;
        if (valStr > max) {
            max = valStr;
        }
    }
    return max;}
findLongestWord("The quick brown fox jumped over the lazy dog");