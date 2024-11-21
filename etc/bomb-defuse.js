const { getRandomQuestion } = require("./bomb-problem");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let MY_CREDIT = 0;
let GAME_STAGE = 1;
let DIFFICULTY_ICON = '⭐';
let BOMB_CABLE = 4;
let LIMIT_TIME = 15;

let CABLE_COLOR = ['🟥', '🟩', '🟦', '🟪', '⬜'];
let CABLE_COLOR_NAME = ['red', 'green', 'blue', 'purple', 'white'];

let timer;

let randomQuestion;
let bombCableRandomIndex; // 폭탄 케이블의 인덱스를 전역 변수로 선언
let isBombCable; // 폭탄 케이블 (아이콘)
let isBombCableName; // 폭탄 케이블 (이름)

function getRandom(num) {
    return Math.floor(Math.random() * num);
}

function initGame() {
    rl.question(`
        폭탄 해체 게임에 오신 걸 환영합니다.💣💣💣
        문제를 맞추면서 폭탄에 있는 5개중 4개의 케이블을 모두 제거하여 폭탄을 해체하세요!!
        5개의 케이블 중 1개는 자르면 폭탄이 터져버려요😬😬 조심조심해서 잘라주세요.
        케이블을 모두 제거하여 폭탄을 해체하면 어마 무시한 크레딧 보상이 당신을 기다리고 있을 거에요!
        문제 당 제한 시간은 15초 입니다. 기억해두세요!!
        게임을 시작하려면 "시작" 혹은 "start"를 입력해주세요.
        ` , str => {
        if (str.trim() === "시작" || str.toLowerCase().trim() === "start") {
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
    if (GAME_STAGE === 1) {
        bombCableRandomIndex = getRandom(CABLE_COLOR.length);
        isBombCable = CABLE_COLOR[bombCableRandomIndex];
        isBombCableName = CABLE_COLOR_NAME[bombCableRandomIndex];
    }
    let showCable = CABLE_COLOR.map((ele, idx) => `${ele}: ${CABLE_COLOR_NAME[idx]}`).join(', ');

    rl.question(`
        나의 답: ${ans}
        문제의 정답: ${randomQuestion.answer}
    
        축하해요!! 정답을 맞췄어요 🎉🎉
        다음 케이블 자를 케이블을 선택해주세요! 잘 못 자를 경우 폭탄이 터집니다😕
        ===================================================
        ${showCable}
        ===================================================
        `, (cableAns) => {
        if (
            !CABLE_COLOR_NAME.includes(cableAns.trim().toLowerCase()) &&
            !CABLE_COLOR.includes(cableAns.trim())
        ) {
            console.log(`
                ===================================================
                입력한 값이 유효하지 않습니다. 올바른 케이블 이름이나 아이콘을 입력해주세요.
                예: red, green, 🟥, 🟩 등
                ===================================================
                `);
            return correctAnswer();
        }
        if (cableAns.trim() === isBombCable || cableAns.trim().toLowerCase() === isBombCableName.toLowerCase()) {
            console.log(`
            ===================================================
            💣💣💣BOMB!!!💣💣💣
            이런.. 케이블을 잘못 잘라서 폭탄이 터지고 말았어요...
            폭탄이 터져서 게임을 종료해요   
            ===================================================
        `);
            rl.close();
        } else {
            BOMB_CABLE--;
            const updatedCables = CABLE_COLOR_NAME.map((name, idx) => {
                return name === cableAns ? null : { color: CABLE_COLOR[idx], name };
            }).filter(Boolean);

            CABLE_COLOR = updatedCables.map(item => item.color);
            CABLE_COLOR_NAME = updatedCables.map(item => item.name);
            console.log(`
            ===================================================
            오 다행히 정상적인 케이블을 잘랐어요. 앞으로 ${BOMB_CABLE}개 남았어요!
            ${GAME_STAGE !== 5 && BOMB_CABLE !== 0 ? "3초 뒤 다음 문제로 넘어가요!" : null}
            ===================================================
            `);
            if (GAME_STAGE === 4 && BOMB_CABLE === 0) {
                MY_CREDIT += 50_000;
                console.log(`
                와! 축하드려요 🎉🎉 5문제를 풀고 올라오신 당신이 진정한 폭발물 처리반이에요!
                해체하신 보상으로 ${MY_CREDIT} 크레딧을 보상으로 드릴게요!! 고생했어요 😀😀
                        
                게임이 끝났기 때문에 프로그램을 종료합니다. 다시 플레이를 원하시면 콘솔창에 "node ./bomb-defuse.js"를 입력해주세요!
                `);
                process.exit();
            } else {
                setTimeout(() => {
                    GAME_STAGE++;
                    startGame();
                }, 3000);
            }
        }
    });
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