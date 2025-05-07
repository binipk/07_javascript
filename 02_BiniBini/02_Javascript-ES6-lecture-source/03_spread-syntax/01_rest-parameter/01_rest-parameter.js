// ✅ arguments vs 나머지 매개변수 (...) 비교 예제

// 1. arguments 사용 예시
function merge(msg1, msg2) {
    console.log("👉 arguments 객체:", arguments); // 유사 배열 (Array 아님)
    return msg1 + msg2;
}

console.log(merge("안녕하세요.", "반갑습니다."));
console.log(merge("안녕하세요.", "반갑습니다.", "제 이름은 홍길동 입니다."));
// 👉 세 번째 인자는 arguments에 담기긴 하지만 msg3 매개변수가 없으니 무시됨


// 2. 나머지 매개변수(...) 사용 예시
function mergeAll(...args) {
    console.log("👉 ...args 배열:", args); // 진짜 배열로 전달됨
    let msg = "";
    for (let arg of args) {
        msg += arg;
    }
    return msg;
}

console.log(mergeAll("안녕하세요."));
console.log(mergeAll("안녕하세요.", "반갑습니다."));
console.log(mergeAll("안녕하세요.", "반갑습니다.", "제 이름은 홍길동 입니다."));


// 💡 화살표 함수는 arguments 사용 ❌ 불가
const arrowFunc = () => {
    // console.log(arguments); // ❌ ReferenceError: arguments is not defined
    console.log("화살표 함수는 arguments를 사용할 수 없습니다.");
};
arrowFunc();

// ✅ 하지만 화살표 함수에서도 나머지 매개변수(...)는 사용 가능
const arrowMerge = (...args) => {
    return args.join(" "); // 배열 메서드 사용 가능!
};

console.log(arrowMerge("화살표", "함수도", "나머지", "매개변수", "사용 가능!"));
