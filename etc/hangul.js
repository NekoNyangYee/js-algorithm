function hangulSplit(str) {
    let choSeong = [];
    let jungSeong = [];
    let jongSeong = [];

    for (let i = 0; i < str.length; i++) {
        const charAt = str.charCodeAt(i);
        const diff = charAt - 0xAC00;

        if (charAt >= 0xAC00 && charAt <= 0xD7A3) {
            const choSeongUnicode = Math.floor(diff / 588);
            const jungSeongUnicode = Math.floor((diff % 588) / 28);
            const jongSeongUnicode = diff % 28;

            choSeong.push(choSeongUnicode);
            jungSeong.push(jungSeongUnicode);
            jongSeong.push(jongSeongUnicode);
        }
    }
    return {
        choSeong: choSeong.length,
        jungSeong: jungSeong.length,
        jongSeong: jongSeong.filter(e => e !== 0).length
    };
}
console.log(hangulSplit("아반"));