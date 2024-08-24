// 문제: 다음 주어진 문자열을 압축하여 표현해라. 
// str: "aaabcccddaaa" => "a2b1c3d2a3"

function strCompression(str) {
    let answer = '';
    let count = 1;
    let prevStr = str[0];
    
    for (let i = 1; i < str.length; i++) {
            if (prevStr === str[i]){
                count++;
            } else {
                answer += prevStr + count;
                prevStr = str[i];
                count = 1;
            }
    }
    return answer += prevStr + count;
}

let str = "aaabcccddaaa";
console.log(strCompression(str));