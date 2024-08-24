function getPermutations(str) {
    if (str.length === 0) return []; // 빈 문자열에 대한 처리
    if (str.length === 1) return [str];

    let answer = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        let remainingChars = str.slice(0, i) + str.slice(i + 1);
        let remainingPermutations = getPermutations(remainingChars);

        for (let perm of remainingPermutations) {
            answer.push(char + perm);
        }

    }
    return answer;
}

console.log(getPermutations("abc"));
// ["abc", "acb", "bac", "bca", "cab", "cba"]

//여기서 핵심포인트는 재귀함수의 호출과 백트레킹
