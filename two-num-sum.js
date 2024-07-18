// 다음 배열의 두 수의 합이 10인 경우의 수를 구하죠?
// arr = [4, 2, 7, 1, 3, 8, 6], sum = 10

function twoNumSum(arr, sum) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                result++;
            }
        }
    }
    return result;
}

let arr = [4, 2, 7, 1, 3, 8, 6, 9];
console.log(twoNumSum(arr, 10));