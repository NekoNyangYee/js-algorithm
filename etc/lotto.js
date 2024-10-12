const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getRandom(len) {
    return Math.floor((Math.random() * len) + 1);
}

function inputLotto() {
    const min = 1;
    const max = 45;

    rl.question("(로또)1부터 45번 중 원하시는 숫자 6개를 무작위로 적어주세요. ==>>", num => {
        let splitNum;
        if (num.includes(", ")) {
            splitNum = num.split(", ").map(e => Number(e.trim()));
        } else if (num.includes(",")) {
            splitNum = num.split(",").map(e => Number(e.trim()));
        } else {
            splitNum = num.split(" ").map(e => Number(e.trim()));
        }
        const hasDuplicates = splitNum.filter((e, i, arr) => arr.indexOf(e) !== arr.lastIndexOf(e));

        if (splitNum.length === 6 && splitNum.every(num => num >= min && num <= max) && hasDuplicates.length === 0) {
            resultLotto(splitNum, max);
        } else {
            if (splitNum.length !== 6) {
                console.log(`숫자를 ${6 - splitNum.length}개 더 입력해야해요.`);
            } else if (splitNum.some(num => num <= min || num >= max)) {
                console.log("숫자가 1미만이거나 45초과하는 수가 들어있어요. 다시한번 살펴보세요.")
            } else if (hasDuplicates.length > 0) {
                console.log("중복된 값이 존재합니다:", hasDuplicates);
            }
            inputLotto();
        }
    });
}

function resultLotto(userNum, max) {
    const computerNum = [];
    for (let i = 0; i < 6; i++) {
        const newNum = getRandom(max);
        if (!computerNum.includes(newNum)) {
            computerNum.push(newNum);
        }
    }
    const duplicateNums = userNum.map(e => computerNum.indexOf(e)).filter(e => e !== -1).length;

    console.log(`
    ============================
    본인의 로또 번호: ${userNum}
    컴퓨터 로또 번호: ${computerNum}
    ============================
    
    맞은 로또 번호 갯수는 총 ${duplicateNums}개 입니다!! 
    `);
    retryLotto();
}

function retryLotto() {
    rl.question("다시 돌릴까요? (y/n) 선택", ans => {
        if (ans === 'y') {
            inputLotto();
        } else if (ans === 'n') {
            console.log("로또 게임을 종료합니다.");
            rl.close();
        } else {
            console.log("올바르지 않은 명령어에요.");
            retryLotto();
        }
    });
}

inputLotto();