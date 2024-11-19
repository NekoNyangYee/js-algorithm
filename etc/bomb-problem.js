const questions = {
    1: {
        korean: [
            { problem: "다음 중 맞춤법이 맞는 단어는? (1) 삐치다 (2) 삐지다", answer: "1", difficulty: 1 },
            { problem: "'낙화'의 뜻은? (1) 꽃이 지다 (2) 꽃이 피다", answer: "1", difficulty: 1 },
        ],
        math: [
            { problem: "x + 7 = 15. x의 값은?", answer: "8", difficulty: 1 },
            { problem: "5x = 25. x의 값은?", answer: "5", difficulty: 1 },
        ],
        english: [
            { problem: "Which is correct? (1) He go to school. (2) He goes to school.", answer: "2", difficulty: 1 },
            { problem: "What is the plural of 'child'? (1) childs (2) children", answer: "2", difficulty: 1 },
        ],
    },
    2: {
        korean: [
            { problem: "'청출어람'의 뜻은? (1) 제자가 스승보다 낫다 (2) 청색은 바다에서 온다", answer: "1", difficulty: 2 },
            { problem: "'금강산도 식후경'의 의미는? (1) 배가 고프면 좋은 경치도 즐기기 어렵다 (2) 산은 식사 후가 좋다", answer: "1", difficulty: 2 },
        ],
        math: [
            { problem: "2x + 5 = 17. x의 값은?", answer: "6", difficulty: 2 },
            { problem: "4x - 10 = 14. x의 값은?", answer: "6", difficulty: 2 },
        ],
        english: [
            { problem: "Fill in the blank: I ___ a book yesterday. (1) read (2) reads", answer: "1", difficulty: 2 },
            { problem: "Which is correct? (1) She don’t like apples. (2) She doesn’t like apples.", answer: "2", difficulty: 2 },
        ],
    },
    3: {
        korean: [
            { problem: "'대기만성'의 뜻은? (1) 큰 인물은 늦게 이룬다 (2) 빠르게 성공한다", answer: "1", difficulty: 3 },
            { problem: "'풍전등화'의 뜻은? (1) 매우 위태로운 상황 (2) 밝은 등불", answer: "1", difficulty: 3 },
        ],
        math: [
            { problem: "6x - 18 = 0. x의 값은?", answer: "3", difficulty: 3 },
            { problem: "8x - 24 = 8. x의 값은?", answer: "4", difficulty: 3 },
        ],
        english: [
            { problem: "What is the past tense of 'go'? (1) goed (2) went", answer: "2", difficulty: 3 },
            { problem: "Choose the correct sentence: (1) He don’t know her. (2) He doesn’t know her.", answer: "2", difficulty: 3 },
        ],
    },
    4: {
        korean: [
            { problem: "'낭중지추'의 뜻은? (1) 주머니 속 송곳 (2) 낭떠러지 송곳", answer: "1", difficulty: 4 },
            { problem: "'천진난만'의 뜻은? (1) 아이처럼 순수하다 (2) 복잡하다", answer: "1", difficulty: 4 },
        ],
        math: [
            { problem: "9x + 5 = 32. x의 값은?", answer: "3", difficulty: 4 },
            { problem: "12x - 8 = 40. x의 값은?", answer: "4", difficulty: 4 },
        ],
        english: [
            { problem: "Which is correct? (1) They was late. (2) They were late.", answer: "2", difficulty: 4 },
            { problem: "Fill in the blank: We ___ going to the park. (1) are (2) is", answer: "1", difficulty: 4 },
        ],
    },
    5: {
        korean: [
            { problem: "'사필귀정'의 뜻은? (1) 모든 일은 반드시 옳은 방향으로 돌아간다 (2) 반드시 성공한다", answer: "1", difficulty: 5 },
            { problem: "'고진감래'의 뜻은? (1) 쓴 끝에 단 것이 온다 (2) 좋은 끝은 없다", answer: "1", difficulty: 5 },
        ],
        math: [
            { problem: "4x^2 - 16 = 0. x의 값은?", answer: "2", difficulty: 5 },
            { problem: "x^2 - 9 = 0. x의 값은?", answer: "3", difficulty: 5 },
        ],
        english: [
            { problem: "What is the plural of 'mouse'? (1) mouses (2) mice", answer: "2", difficulty: 5 },
            { problem: "What is the superlative form of 'fast'? (1) faster (2) fastest", answer: "2", difficulty: 5 },
        ],
    },
};

const allQuestion = [
    ...questions[1].korean,
    ...questions[1].math,
    ...questions[1].english,
    ...questions[2].korean,
    ...questions[2].math,
    ...questions[2].english,
    ...questions[3].korean,
    ...questions[3].math,
    ...questions[3].english,
    ...questions[4].korean,
    ...questions[4].math,
    ...questions[4].english,
    ...questions[5].korean,
    ...questions[5].math,
    ...questions[5].english
];

const getRandomQuestion = () => {
    return allQuestion[Math.floor(Math.random() * allQuestion.length)];
};

module.exports = { getRandomQuestion };