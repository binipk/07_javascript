// ✅ 객체 구조 분해 할당 (Object Destructuring)

// 객체 선언
const pants = {
    productName: "배기팬츠", 
    color: "검정색", 
    price: 30000,
};

console.log(pants); // 전체 객체 출력

// 1. 일반 구조 분해 (순서 상관 없이 key 이름 기준으로 매칭됨)
const { productName, color, price } = pants;

console.log(productName); // 배기팬츠
console.log(color);       // 검정색
console.log(price);       // 30000

// 2. 오타난 변수명 사용 시 (key 이름이 정확히 일치하지 않으면 undefined)
const { productName: name1, color: col1, pric } = pants; 

console.log(name1); // 배기팬츠
console.log(col1);  // 검정색
console.log(pric);  // ❌ undefined (오타: price가 아니라 pric임)

// 3. 구조 분해 + 변수 이름 변경
// 👉 구조 분해하면서 변수 이름을 내가 원하는 걸로 바꿔줄 수 있음
const { productName: pn, price: pr, color: co } = pants;

console.log(pn); // 배기팬츠
console.log(pr); // 30000
console.log(co); // 검정색
