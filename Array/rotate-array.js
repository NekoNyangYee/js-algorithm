function rotateArray(arr, k) {
    let n = arr.length;

    k = k % n; // k가 배열 길이보다 클 경우를 대비한 처리

    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);

    return arr;
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(rotateArray(arr, 3));

/*
1. Reverse 작업 먼저 하기
start = 0, end = 6 ===> [7, 2, 3, 4, 5, 6, 1]
start = 1, end = 5 ===> [7, 6, 3, 4, 5, 2, 1]
start = 2, end = 4 ===> [7, 6, 5, 4, 3, 2, 1]
*/

/*
2. 앞부분 k개 뒤집기
start = 0, end = 2 ===> [5, 6, 7, 4, 3, 2, 1]
*/

/*
3. 나머지 뒤집기 
start = 3, end = 6 ===> [5, 6, 7, 1, 3, 2, 4]
start = 4, end = 5 ===> [5, 6, 7, 1, 2, 3, 4]
*/