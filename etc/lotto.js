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
            } else if (splitNum.some(num => num < min || num > max)) {
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
    let lottoRank;
    let bonusNum = getRandom(max);

    while (computerNum.length < 6) {
        const newNum = getRandom(max);
        if (!computerNum.includes(newNum)) {
            computerNum.push(newNum);
        }
    }

    while (computerNum.includes(bonusNum)) {
        bonusNum = getRandom(max);
    }

    const duplicateNums = userNum.filter(e => computerNum.includes(e)).length;

    if (duplicateNums === 6) {
        lottoRank = "와!! 정말 축하드려요!! 당신은 1 / 8,145,060의 확률을 가진 1등에 당첨되었어요!!";
    } else if (duplicateNums === 6 && userNum.includes(bonusNum)) {
        lottoRank = "와우!! 축하드려요!!! 보너스 번호까지 맞춘 당신은 행운의 신 2등에 당첨되었어요!!";
    } else if (duplicateNums === 5) {
        lottoRank = "오! 축하드려요!! 번호 5개를 맞춘 당신은 3등에 당첨되었어요!!";
    } else if (duplicateNums === 4) {
        lottoRank = "와우! 축하드려요!! 그래도 뚫기 쉽지 않은 4등에 당청되었어요!!";
    } else if (duplicateNums === 3) {
        lottoRank = "축하해요! 5등에 당첨되었어요!!";
    } else {
        lottoRank = "이런... 좀 더 맞췄으면 5등 노려보는건데... 나중에 다시 도전해봐요!";
    }

    console.log(`
    ============================
    본인의 로또 번호: ${userNum}
    컴퓨터 로또 번호: ${computerNum} + ${bonusNum}
    ============================
    
    맞은 로또 번호 갯수는 총 ${duplicateNums}개 입니다!! 
    ${lottoRank}
    `);

    retryLotto();
}

function retryLotto() {
    rl.question("다시 돌릴까요? (y/n) 선택", ans => {
        if (ans.toLowerCase() === 'y') {
            inputLotto();
        } else if (ans.toLowerCase() === 'n') {
            console.log("로또 게임을 종료합니다.");
            rl.close();
        } else {
            console.log("올바르지 않은 명령어에요.");
            retryLotto();
        }
    });
}

inputLotto();