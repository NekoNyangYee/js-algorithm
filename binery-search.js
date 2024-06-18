function solution(list, target, left, right) {
    let mid = 0;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (list[mid] < target) {
            left = mid + 1;
        } else if (list[mid] > target) {
            right = mid - 1;
        }

        if (list[mid] === target) {
            return mid;
        }
    }

    return -1;
}

const list = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const sort = list.sort((a, b) => a - b);
const result = solution(sort, 12, 0, list.length - 1)
console.log(result);