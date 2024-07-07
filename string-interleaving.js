function stringInterLeaving(s1, s2) {
    let answer = [];
    for (let i = 0; i < s1.length; i++) {
        answer.push(s1[i], s2[i])
    }
    return answer.join('');
}

console.log(stringInterLeaving('abc', 'def'));