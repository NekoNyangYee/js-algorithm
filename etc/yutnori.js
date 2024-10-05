const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const YUT_ICONS = {
    front: '⬛', // 윷의 평평한 면
    back: '⬜'  // 윷의 볼록한 면
};

const YUT_NAME = {
    do: "도",
    gae: "개",
    geol: "걸",
    yut: "윷",
    mo: "모",
    baekdo: "백도"
};

function askYutInput() {
    rl.question("윷놀이 세계에 오신걸 환영합니다.\n 윷을 던지려면 \"던져\"를 입력해주세요: ", str => {
        if (str === "던져") {
            throwYut();
        } else {
            console.log("유효하지 않은 단어가 입력되었어요. 다시 입력해주세요.");
            askYutInput();
        }
    });
}

function throwYut() {
    let result = ''; // 윷의 면을 저장할 문자열
    let yutResult = ''; // 윷의 결과를 저장할 문자열
    let countFront = 0; // 평평한 면의 개수를 셀 변수

    // 윷 4개 던지기
    for (let i = 0; i < 4; i++) {
        if (Math.random() < 0.5) {
            result += YUT_ICONS.front; // 평평한 면
            countFront++;
        } else {
            result += YUT_ICONS.back; // 볼록한 면
        }
    }

    // 윷 결과 설정: 평평한 면의 개수로 결과를 결정
    switch (countFront) {
        case 1:
            yutResult = YUT_NAME.do;
            break;
        case 2:
            yutResult = YUT_NAME.gae;
            break;
        case 3:
            yutResult = YUT_NAME.geol;
            break;
        case 4:
            yutResult = YUT_NAME.yut;
            break;
        case 0:
            yutResult = YUT_NAME.mo;
            break;
    }

    resultYut(result, yutResult);
}

function resultYut(result, yutResult) {
    // 윷의 면과 결과를 각각 출력
    console.log(`윷의 면: ${result}`);
    console.log(`윷 결과: ${yutResult}`);
    askYutInput(); // 다시 입력을 받음
}

askYutInput();
