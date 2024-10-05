const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getRandom(length) {
    return Math.floor(Math.random() * length);
}

function choiceRsp() {
    rl.question("가위바위보 도전하시는걸 환영합니다. 가위, 바위, 보 중 하나를 적어주세요", (rsp) => {
        if (rsp === "가위" || rsp === "바위" || rsp === "보") {
            const randomIdx = getRandom(3);
            getRsp(rsp, randomIdx);
        } else {
            console.log("존재하지 않는 문자열이에요. 가위, 바위, 보 중 하나를 입력하세요.");
            choiceRsp();
        }
    })
}

const RSP_TEXT = ['가위', '바위', '보'];
const RSP_ICON = ['✌️', '✊', '🖐️'];

function getRsp(rsp, randomIdx) {
    const computerChoice = RSP_TEXT[randomIdx];
    const computerIcon = RSP_ICON[randomIdx];

    const userChoiceIdx = RSP_TEXT.indexOf(rsp);
    const userChoice = RSP_TEXT[userChoiceIdx];
    const userIcon = RSP_ICON[userChoiceIdx];
    if (userChoice === computerChoice) {
        console.log(`나: ${userChoice} ${userIcon} vs 컴퓨터: ${computerChoice} ${computerIcon} 이런 비겼어요... 다음엔 제가 이길거에요.`);

    } else if (
        (userChoice === "가위" && computerChoice === "보") ||
        (userChoice === "보" && computerChoice === "바위") ||
        (userChoice === "바위" && computerChoice === "가위")
    ) {
        console.log(`나: ${userChoice} ${userIcon} vs 컴퓨터: ${computerChoice} ${computerIcon} 이겼어요! 축하드려요!`);

    } else {
        console.log(`나: ${userChoice} ${userIcon} vs 컴퓨터: ${computerChoice} ${computerIcon} .후훗! 이번엔 제가 이겼어요! 다시 도전하시죠?`);
    }
    choiceRsp();
}

choiceRsp();
