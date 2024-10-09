const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const MACHINE_ICON = ['🍒', '🍋', '🍇', '💎', '🔔', '⭐'];
let MY_CREDIT = 2_000_000;
let MACHINE_CREDIT = 0;
let MACHINE_COUNT = 0;

function askSlotInput() {
    rl.question("슬롯머신을 돌리고 싶으면 '돌려' 명령어를 입력하세요: ", cmd => {
        if (cmd === "돌려") {
            resultSlotMachine();
            askSlotInput();
        } else {
            console.log("올바르지 않은 명령이에요. 다시 시도해주세요.");
            askSlotInput();
        }
    });
}

function getRandom(num) {
    return Math.floor(Math.random() * num);
}

function getSymbol() {
    return [
        MACHINE_ICON[getRandom(MACHINE_ICON.length)],
        MACHINE_ICON[getRandom(MACHINE_ICON.length)],
        MACHINE_ICON[getRandom(MACHINE_ICON.length)]
    ];
}

function resultSlotMachine() {
    const slots = getSymbol();
    const win = slots[0] === slots[1] && slots[1] === slots[2];

    if (win) {
        console.log(`
        🎰 슬롯머신 결과는?
        =============
        ${slots.join(' ')}
        =============
        축하해요! 슬롯머신 잭팟이 터졌어요!
        
        당신은 ${MACHINE_CREDIT} 크레딧을 획득했어요!
        슬롯머신 돌린 횟수: ${MACHINE_COUNT}

        슬롯에 누적된 크데릿은 0으로 초기화되고 프로그램을 자동 종료합니다.
        `);
        MACHINE_CREDIT = 0;
        rl.close();
    } else {
        MACHINE_CREDIT += 500;
        MY_CREDIT -= 500;
        MACHINE_COUNT += 1;
        console.log(`
        🎰 슬롯머신 결과는?
        =============
        ${slots.join(' ')}
        =============
        이런 꽝이에요...😭 당신의 크레딧은 슬롯머신에 누적돼요.

        현재 누적된 크레딧: ${MACHINE_CREDIT}
        당신의 남은 크레딧: ${MY_CREDIT}
        슬롯머신 돌린 횟수: ${MACHINE_COUNT}
        `);
        askRetry();
    }
}

function askRetry() {
    rl.question("이어서 진행할까요? (y/n 중 선택): ", ans => {
        if (ans === "y") {
            if (MY_CREDIT >= 500) {
                resultSlotMachine();
            } else {
                console.log(`
                    ===============================================
                    현재 보유한 크래딧이 베팅할 크레딧 금액보다 적어요!
                    현재 보유 크레딧: ${MY_CREDIT}
                    ===============================================
                    `);
                askRetry();
            }
        } else if (ans === "n") {
            rl.close();
        } else {
            console.log("올바르지 않은 명령어에요. 다시 시도해주세요.");
            askRetry();
        }
    });
}


askSlotInput();
