function selectSort(list) {
    let indexMin;
    for (let i = 0; i < list.length - 1; i++) {
        indexMin = i;
        for (let j = i + 1; j < list.length; j++) {
            if (list[j] < list[indexMin]) {
                [list[j], list[indexMin]] = [list[indexMin], list[j]];
            }
        }
    }
    return list;
}

console.log(selectSort([3, 2, 1, 5, 4]));

// 1. i = 0, j = 1 ===> [2, 3, 1, 5, 4]
// 2. i = 0, j = 2 ===> [1, 3, 2, 5, 4]
// 3. i = 0, j = 3 ===> [1, 3, 2, 5, 4]
// 4. i = 0, j = 4 ===> [1, 3, 2, 5, 4]

// 5. i = 1, j = 2 ===> [1, 2, 3, 5, 4]
// 6. i = 1, j = 3 ===> [1, 2, 3, 5, 4]
// 7. i = 1, j = 4 ===> [1, 2, 3, 5, 4]

// 8. i = 2, j = 3 ===> [1, 2, 3, 5, 4]
// 9. i = 2, j = 4 ===> [1, 2, 3, 5, 4]

// 10. i = 3, j = 4 ===> [1, 2, 3, 4, 5]