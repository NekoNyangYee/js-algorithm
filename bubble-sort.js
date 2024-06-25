function bubbleSort(list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = 1; j < list.length - i; j++) {
            if (list[j - 1] > list[j]) {
                [list[j - 1], list[j]] = [list[j], list[j - 1]]
            }
        }
    }
    return list;
}

console.log(bubbleSort([1,6,2,7,4,3,8,5]))

// 1. i = 0, j = 1 ===> [1, 6, 2, 7, 4, 3, 8, 5]
// 2. i = 0, j = 2 ===> [1, 2, 6, 7, 4, 3, 8, 5]
// 3. i = 0, j = 3 ===> [1, 2, 6, 7, 4, 3, 8, 5]
// 4. i = 0, j = 4 ===> [1, 2, 6, 4, 7, 3, 8, 5]
// 5. i = 0, j = 5 ===> [1, 2, 6, 4, 3, 7, 8, 5]
// 6. i = 0, j = 6 ===> [1, 2, 6, 4, 3, 7, 8, 5]
// 7. i = 0, j = 7 ===> [1, 2, 6, 4, 3, 7, 5, 8]

// 8. i = 1, j = 1 ===> []