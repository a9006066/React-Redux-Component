var sortArray = [5, 7, 4, 8, 2, 9, 4, 7]; //[2 4 4 5 7 7 8 9]
var temp = [];
var result = [];


//泡沫排序
for (let i = 0; i < sortArray.length; i++) {
    for (var y = 0; y < sortArray.length-1-i; y++) {
        if (sortArray[y] > sortArray[y + 1]) {
            var second = sortArray[y]
            sortArray[y] = sortArray[y + 1]
            sortArray[y + 1] = second
        }
    }
    console.log(sortArray)
}

console.log(sortArray)

