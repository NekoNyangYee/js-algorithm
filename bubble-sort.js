function bubbleSort(list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = 1; j < list.length - i; j++) {
            if (list[j - 1] > list[j]) {
                [list[j - 1], list[j]] = [list[j], list[j - 1]]
            }
        }
    }
    return list
}

console.log(bubbleSort([1,6,2,7,4,3,8,5]))