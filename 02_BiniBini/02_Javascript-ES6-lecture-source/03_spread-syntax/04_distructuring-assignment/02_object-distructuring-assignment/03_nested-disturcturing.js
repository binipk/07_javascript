// ✅ 중첩 구조 분해 할당 (객체 안 객체, 배열 안 배열에서 값 꺼내기)

// 🎁 product라는 큰 객체가 있음
const product = {
    size: {
        width: 10,
        height: 30
    }, // ← ✅ 객체 안에 여러 항목이 있을 때 각 항목 뒤에는 ,(콤마)를 붙여도 됨 (마지막에 있어도 에러 X)
    items: ["doll", "robot"], // ← ✅ 배열도 마찬가지로 콤마로 구분해주는 거야
    // producer는 없음!
};

// 🎯 구조 분해 할당 시작!
// 👉 product 안에 있는 size 객체에서 width, height 꺼냄
// 👉 items 배열에서 첫 번째, 두 번째 값을 item1, item2에 꺼냄
// 👉 producer는 아예 없지만, 기본값을 'Hong'으로 설정함
const {
    size: { width, height },     // 중첩 객체 구조 분해
    items: [item1, item2],       // 배열 구조 분해
    producer = "Hong"            // 기본값 설정 (없으면 "Hong")
} = product;

console.log(width);    // 10
console.log(height);   // 30
console.log(item1);    // doll
console.log(item2);    // robot
console.log(producer); // Hong (기본값 사용)
