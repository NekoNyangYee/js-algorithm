function insertionSort(arr) {
    let currentElement;
    for (let i = 1; i < arr.length; i++) {
        currentElement = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = currentElement;
    }
    return arr;
}

console.log(insertionSort([5, 2, 3, 1, 9, 8, 7]));

// 1. i = 1, j = 0 ==> [5, 5, 3, 1, 9, 8, 7]
//           j = -1 ==> [2, 5, 3, 1, 9, 8, 7]

// 2. i = 2, j = 1 ==> [2, 5, 5, 1, 9, 8, 7]
//           j = 0 ==> [2, 3, 5, 1, 9, 8, 7]

// 3. i = 3, j = 2 ==> [2, 3, 5, 5, 9, 8, 7]
//           j = 1 ==> [2, 3, 3, 5, 9, 8, 7]
//           j = 0 ==> [2, 2, 3, 5, 9, 8, 7]
//           j = -1 ==> [1, 2, 3, 5, 9, 8, 7]

// 4. i = 4, j = 3 ==> [1, 2, 3, 5, 9, 8, 7]

// 5. i = 5, j = 4 ==> [1, 2, 3, 5, 9, 9, 7]
//           j = 3 ==> [1, 2, 3, 5, 8, 9, 7]

// 6. i = 6, j = 5 ==> [1, 2, 3, 5, 8, 9, 9]
//           j = 4 ==> [1, 2, 3, 5, 8, 8, 9]
//           j = 3 ==> [1, 2, 3, 5, 7, 8, 9]