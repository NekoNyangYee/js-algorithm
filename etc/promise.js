function sum(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num2 == 0) {
            reject(new Error("0으로 나눌 수 없답니다"));
        } else {
            resolve(num1 / num2);
        }
    })
}

sum(4, 2)
    .then(s => console.log("성공", s))
    .catch(err => console.log("실패", err))
    .finally(() => console.log("과연 결과는?"));