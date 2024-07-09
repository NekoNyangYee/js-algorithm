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