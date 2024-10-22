const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let MY_CREDIT = 0;
const YOUR_RESULT = ['실패', '보류', '성공'];

function getRandom(length) {
    return Math.floor(Math.random() * length);  // Proper random number generation
}

function askMiningInput() {
    const resultRandom = YOUR_RESULT[getRandom(YOUR_RESULT.length)];
    const resultMyCredit = getRandom(1001);
    const resultLoseMyCredit = getRandom(200);

    rl.question("!채굴 명령어를 입력하여 크레딧 채굴을 진행하세요.", str => {
        if (str === '!채굴') {
            resultMining(resultMyCredit, resultLoseMyCredit, resultRandom);
        } else {
            askMiningInput();
        }
    });
}

function resultMining(resultMyCredit, resultLoseMyCredit, resultRandom) {

    if (resultRandom === '성공') {
        MY_CREDIT += resultMyCredit;
        console.log(`오 당신은 채굴에 성공했어요. 채굴한 크레딧은 ${resultMyCredit} 크레딧 이에요.
        현재 나의 크레딧 : ${MY_CREDIT}`);
    } else if (resultRandom === '보류') {
        console.log(`아 아쉬워요. 그래도 다치지 않아서 크레딧을 잃지 않았어요.`);
    } else {
        if (MY_CREDIT === 0) {
            MY_CREDIT;
            console.log(`이런!.. 현재 그레딧이 ${MY_CREDIT} 크레딧이라 더 잃을게 없어요..
                현재 나의 크레딧 : ${MY_CREDIT}`);
        } else {
            MY_CREDIT -= resultLoseMyCredit;
            console.log(`이런! 채굴하다가 다쳐서 ${resultLoseMyCredit} 크레딧을 잃었어요....
            현재 나의 크레딧 : ${MY_CREDIT}`);
        }
    }

    askMiningInput();  // Continue asking for more mining attempts
}

askMiningInput();
