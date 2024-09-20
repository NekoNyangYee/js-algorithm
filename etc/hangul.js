function hangulSplit(str) {
    let choSeong = [];
    let jungSeong = [];
    let jongSeong = [];

    const choSeongList = [
        "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ",
        "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"
    ];

    const jungSeongList = [
        "ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ",
        "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"
    ];

    const jongSeongList = [
        "", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ",
        "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ",
        "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"
    ];

    for (let i = 0; i < str.length; i++) {
        const charAt = str.charCodeAt(i);
        const diff = charAt - 0xAC00;

        if (charAt >= 0xAC00 && charAt <= 0xD7A3) {
            const choSeongUnicode = Math.floor(diff / 588);
            const jungSeongUnicode = Math.floor((diff % 588) / 28);
            const jongSeongUnicode = diff % 28;

            choSeong.push(choSeongList[choSeongUnicode]);
            jungSeong.push(jungSeongList[jungSeongUnicode]);
            jongSeong.push(jongSeongList[jongSeongUnicode]);
        }
    }
    return {
        choSeong,
        jungSeong,
        jongSeong: jongSeong.filter(e => e !== '')
    };
}
console.log(hangulSplit("꽭뚫아"));