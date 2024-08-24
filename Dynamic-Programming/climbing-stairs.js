function climbingStairs(n) {
    if (n <= 1) return 1;

    let start = 1;
    let end = 1;
    let result = 0;

    for (let i = 1; i < n; i++) {
        result = start + end;
        start = end;
        end = result;
    }

    return result;
}

console.log(climbingStairs(4));