// 문제: 다음 주어진 arr의 중복되는 요소를 제거하고 반환하시죠
// arr = [1,1,2,2,2,3,3,3,3]

function removeDuplecate(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}

const arr = [3,2,2,3,3,1,2,2,1,1];
const sortArr = arr.sort((a, b) => a - b);
console.log(sortArr)
console.log(removeDuplecate(sortArr));