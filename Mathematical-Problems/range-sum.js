// 문제: 배열의 start부터 end지점까지의 합을 구해보시죠.
// arr = [2,6,4,15,7,8,9]

function rangeSum(start, end, arr) {
    let answer = 0;
    for (let i = start; i <= end; i++) {
        answer += arr[i]
    }
    return answer;
}

const list = [2,6,4,15,7,8,9]
console.log(rangeSum(1, 3, list))