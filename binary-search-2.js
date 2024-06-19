function binarySearchMin(list, left, right) {
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (list[mid] > list[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return list[left];
}

function binarySearchMax(list) {
    let left = 0;
    let right = list.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (list[mid] > list[right]) {
            left = mid;
        } else {
            right = mid - 1;
        }

    }
    return list[left];
}

const list = [3,4,5,6,0,1,2];
const minResult = binarySearchMin(list, 0, list.length - 1);
const maxResult = binarySearchMax(list);
console.log('최솟값:', minResult);
console.log('최댓값:', maxResult);
