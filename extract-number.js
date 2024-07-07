// 문제: 다음 문자열 중에서 숫자만 골라 배열에 담아 반환하시죠.
// str: "abc123def45"

function extractNumber(str) {
    const numbers = str.match(/\d+/g);
    return numbers;
}

console.log(extractNumber("abc123def45"));