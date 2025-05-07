// ✅ 객체 구조 분해 할당 - 쉽게 배우기

// 1. 객체에서 필요한 값만 꺼내 쓰기
const pants = {
    productName: "배기팬츠",
    color: "검정색",
    price: 30000
};

// 👉 productName만 꺼내서 변수로 만들기
const { productName } = pants;
console.log(productName); // 배기팬츠


// 2. 객체에 없는 값은 기본값을 줄 수 있어요
const shirts = {
    productName: "기본 셔츠"
    // color, price는 없음!
};

// 👉 값이 없으면 "어떤 색상", 0을 기본값으로 사용함
const {
    productName: pn,         // 이름을 pn으로 바꿔서 저장
    color: co = "어떤 색상", // color가 없으니까 기본값 사용
    price: pr = 0            // price가 없으니까 기본값 사용
} = shirts;

console.log(shirts);       // { productName: '기본 셔츠' }
console.log(co);           // 어떤 색상
console.log(pn);           // 기본 셔츠
console.log(pr);           // 0


// 3. 나머지 값을 한번에 모으기 (...rest)
const { productName: pn2, ...rest } = pants;
// 👉 productName은 pn2로 저장하고, 나머지(color, price)는 rest에 모음

console.log(pn2);  // 배기팬츠
console.log(rest); // { color: '검정색', price: 30000 }


// 4. let으로 미리 만든 변수에 값 넣을 땐 괄호를 꼭 써야 함!
let pn3, co3, pr3;

// 👉 중괄호만 쓰면 JS는 { }를 코드블럭으로 착각해서 에러남
// 그래서 괄호로 감싸줘야 구조 분해 할당으로 인식함
({ productName: pn3, color: co3, price: pr3 } = pants);

console.log(pn3); // 배기팬츠
console.log(co3); // 검정색
console.log(pr3); // 30000
