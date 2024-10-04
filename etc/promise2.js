function promise2() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            if (!res.ok) {
                throw new Error("데이터 없음");
            }
            return res.json(); // 데이터를 JSON으로 변환하여 반환
        })
        .then(data => {
            console.log("데이터가 존재함", data);
            return data; // 데이터를 resolve하여 외부로 전달
        })
        .catch(err => {
            console.log("에러 발생", err.message);
            throw err; // 에러를 외부로 전달하여 상위 catch에서 처리
        });
}

promise2()
    .then(data => console.log("성공적으로 가져왔음", data))
    .catch(err => console.log("데이터 패칭 실패", err.message));
