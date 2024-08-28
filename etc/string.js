const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askForInput() {
    rl.question("✨숫자 매크로 세상에 오신걸 환영합니다!!✨\n원하시는 문자열을 넣어주세요(프로그램 종료를 원하시면 '종료' 또는 'exit' 눌러주세요.)👉👉 ", (string) => {
        if (!string) {
            console.log("입력된 문장이 없습니다. 다시 입력해주새요");
            askForInput();
            return;
        } else if (string === '종료' || string === 'exit') {
            console.log('프로그램이 정상적으로 종료되었습니다.');
            rl.close();
            return;
        }

        rl.question("원하시는 숫자 스타일을 고르세요: '꽉찬원', '빈원', '괄호', '점'\n", (style) => {
            enumString(string, style);
        });
    });
}

function enumString(input, style) {
    const sentences = input.match(/[^.?!]+[.?!]/g).map(sentence => sentence.trim());
    const circleFillNumbers = ['❶', '❷', '❸', '❹', '❺', '❻', '❼', '❽', '❾', '❿'];
    const circleNumbers = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩'];

    console.log('==================문장 분리 중=====================');
    console.log(sentences);
    console.log('==================================================');

    setTimeout(() => {
        console.log('=====================출력 결과====================');
        for (let i = 0; i < sentences.length; i++) {
            if (style === '꽉찬원') {
                console.log(`${circleFillNumbers[i]} ${sentences[i]}`);
            } else if (style === '빈원') {
                console.log(`${circleNumbers[i]} ${sentences[i]}`);
            } else if (style === '괄호') {
                console.log(`(${i + 1}) ${sentences[i]}`);
            } else if (style === '점') {
                console.log(`${i + 1}. ${sentences[i]}`);
            } else {
                console.log(`잘못된 선택입니다. 기본 스타일인 꽉찬원으로 사용합니다.`);
                console.log(`${circleFillNumbers[i]} ${sentences[i]}`);
            }
        }
        console.log('==================================================');
        console.log('위에 출력된 문장들을 복사해가세요!!');

        if (style === '꽉찬원' || style === '빈원') {
            console.log(`🔱 현재 선택하신 ${style}은 현재 10번까지밖에 지원하지 않아요😭 10번이 넘어갈 경우 숫자가 표시되지 않으니 원하시면 배열을 수정해주세요❗❗`);
        }

        askForInput();
    }, 2000);
}

askForInput();