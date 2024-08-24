// 다음 배열의 세수의 합이 12인 경우의 수를 구하죠?
// arr = [4, 2, 7, 1, 3, 8, 6, 9], sum = 12

function twoNumSum(arr, sum) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === sum) {
                    console.log(`Found combination: ${arr[i]}, ${arr[j]}, ${arr[k]}`); // 디버그용 출력
                    result++;
                }
            }
        }
    }
    return result;
}

let arr = [4, 2, 7, 1, 3, 8, 6, 9];
console.log(twoNumSum(arr, 12));

/*
// 해시와 정렬을 이용한 예시 답
function threeNumSum(arr, sum) {
    let result = 0;
    const n = arr.length;

    for (let i = 0; i < n - 2; i++) {
        const currentSum = sum - arr[i];
        const seen = new Set();
        
        for (let j = i + 1; j < n; j++) {
            if (seen.has(currentSum - arr[j])) {
                result++;
            }
            seen.add(arr[j]);
        }
    }

    return result;
}

let arr = [4, 2, 7, 1, 3, 8, 6, 9];
console.log(threeNumSum(arr, 12)); // 예상 출력: 5
*/