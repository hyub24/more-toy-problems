This problem is called maxDownSequences
given an array of numbers, find the number of solutions for decreasing sequences of 3 numbers
where arr[i] > arr[j] > arr[k] and i < j < kl (edited)
e.g given [5, 6, 4, 3, 2] there are 7 possible solutions
[5, 4, 3], [5, 4, 2], [5, 3, 2], [6, 4, 3], [6, 4, 2], [6, 3, 2], [4, 3, 2]

var test = [5, 6, 4, 3, 2] // 7
var test2 = [1, 2, 3, 4, 5]; //0
var test3 = [6, 5, 11, 10, 1];//2
var test4 = [5, 3, 7, 2, 1]; //5
var test5 = [1, 2]; //0