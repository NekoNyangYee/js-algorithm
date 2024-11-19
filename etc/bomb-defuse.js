const { getRandomQuestion } = require("./bomb-problem");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let MY_CREDIT = 0;
let GAME_STAGE = 1;
let DIFFICULTY_ICON = '⭐';
let BOMB_CABLE = 5;
let LIMIT_TIME = 15;
let timer;
let gameEnded = false;

let randomQuestion;

function initGame() {
    rl.question(`
        폭탄 해체 게임에 오신 걸 환영합니다.💣💣💣
        문제를 맞추면서 폭탄에 있는 5개의 케이블을 모두 제거하여 폭탄을 해체하세요!!
        5개의 케이블은 잘라도 폭탄이 터지지 않는 안전한 케이블이에요.(추후 패치 예정^-^)
        케이블을 모두 제거하여 폭탄을 해체하면 어마 무시한 크레딧 보상이 당신을 기다리고 있을 거에요!
        문제 당 제한 시간은 15초 입니다. 기억해두세요!!
        게임을 시작하려면 "시작" 혹은 "start"를 입력해주세요.
        ` , str => {
        if (str.trim() === "시작" || str.toLocaleLowerCase().trim() === "start") {
            console.log("그럼 게임을 시작하겠습니다");
            startGame();
        } else {
            console.log("올바르지 않은 명령어에요. 😕😕");
            initGame();
        }
    }
    );
}

function startGame() {
    LIMIT_TIME = 15;
    randomQuestion = getRandomQuestion();

    timer = setInterval(() => {
        process.stdout.write(`\r남은 시간: ${LIMIT_TIME}초 정답은?? =>`);
        LIMIT_TIME -= 1;

        if (LIMIT_TIME < 0) {
            clearInterval(timer);
            console.log("\n시간 초과! 폭탄이 터졌습니다! 💣💣💣");
            rl.close();
        }
    }, 1000);

    console.log(`\n\n${GAME_STAGE} 스테이지`);
    console.log(`난이도: ${DIFFICULTY_ICON.repeat(randomQuestion.difficulty)}`);
    console.log(`문제: ${randomQuestion.problem}\n`);

    postProblem();
}

function postProblem() {
    rl.question("정답은?? => ", (ans) => {
        if (ans.trim() === randomQuestion.answer) {
            clearInterval(timer);
            correctAnswer(ans);
        } else if (ans.trim() !== randomQuestion.answer) {
            clearInterval(timer);
            wrongAnswer(ans);
        } else {
            console.log("올바른 정답을 입력 해주세요.");
            postProblem();
        }
    });
}

function correctAnswer(ans) {
    BOMB_CABLE--;

    console.log(`
    나의 답: ${ans}
    문제의 정답: ${randomQuestion.answer}

    축하해요!! 정답을 맞췄어요 🎉🎉
    문제를 맞춰서 폭탄의 케이블 중 하나를 잘랐어요! 이제 남은 케이블의 갯수는 ${BOMB_CABLE}개 예요!
    다음 문제는 3초 뒤에 넘어갑니다.
    `);

    if (GAME_STAGE === 5 && BOMB_CABLE === 0) {
        MY_CREDIT += 50_000;
        console.log(`
        와! 축하드려요 🎉🎉 5문제를 풀고 올라오신 당신이 진정한 폭발물 처리반이에요!
        해체하신 보상으로 ${MY_CREDIT} 크레딧을 보상으로 드릴게요!! 고생했어요 😀😀
        
        게임이 끝났기 떄문에 프로그램을 종료합니다. 다시 플레이를 원하시면 콘솔창에 "node ./etc/bomb-defuse.js"를 입력해주세요!
        `);
        process.exit();
    } else {
        setTimeout(() => {
            GAME_STAGE++;
            startGame();
        }, 3000);
    }
}

function wrongAnswer(ans, interval) {
    clearInterval(interval);
    console.log(`
    나의 답: ${ans}
    문제의 정답: ${randomQuestion.answer}

    💣💣💣BOMB!!!💣💣💣
    이런.. 문제를 틀려서 폭탄이 터지고 말았어요 
    폭탄이 터져서 프로그램을 종료해요. 다시 플레이를 원하시면 콘솔창에 "node ./etc/bomb-defuse.js"를 입력해주세요!
    `);
    rl.close();
}

initGame();