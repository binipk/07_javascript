// ✅ 함수의 매개변수: 값이 많거나 기본값이 필요할 때 구조 분해가 유용해요!

// 1️⃣ 일반 방식: 매개변수 4개를 순서대로 받고 기본값도 지정함
function displayProduct(
    producer = "아무개", 
    width = 0, 
    height = 0, 
    items = []
) {
    console.log(`제조자: ${producer}`);
    console.log(`크기: ${width} x ${height}`);
    console.log(`상품 목록: ${items.join(", ")}`);
}

// ❗ 매개변수 순서가 정해져 있어서 중간을 생략하려면 undefined를 꼭 넣어야 함
displayProduct("신사임당", undefined, undefined, ["Coffee", "Dounet"]);
// 출력:
// 제조자: 신사임당
// 크기: 0 x 0
// 상품 목록: Coffee, Dounet


// 2️⃣ 구조 분해 방식: 매개변수 하나를 객체로 받고 내부에서 필요한 값만 꺼냄
function displayProduct2({
    producer = "Amugae",
    width = 0,
    height = 0,
    items = []
}) {
    console.log(`제조자: ${producer}`);
    console.log(`크기: ${width} x ${height}`);
    console.log(`상품 목록: ${items.join(", ")}`);
}

// ✅ 이 방식은 객체만 넘기면 되고, 순서도 상관없고 필요한 값만 넘겨도 됨
const example = {
    producer: "Hong", 
    items: ["doll", "robot"] // width, height는 생략 → 기본값 사용됨
};

displayProduct2(example);
// 출력:
// 제조자: Hong
// 크기: 0 x 0
// 상품 목록: doll, robot
