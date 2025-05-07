// ✅ 배열 구조 분해 할당 (Destructuring Assignment)

// 1. 기본 구조 분해 할당
const nameArr = ["Gildong", "Hong"];

// 아래 코드와 같은 의미임:
// const firstName = nameArr[0];
// const lastName = nameArr[1];

// 👉 구조 분해로 간단하게 표현
const [firstName, lastName] = nameArr;

console.log(firstName); // Gildong
console.log(lastName);  // Hong


// 2. split() 메서드 활용
const [firstName2, lastName2] = "Saimdang Shin".split(" ");

// "Saimdang Shin".split(" ") → ["Saimdang", "Shin"]
// 구조 분해를 통해 각각에 저장됨
console.log(firstName2); // Saimdang
console.log(lastName2);  // Shin


// 3. 쉼표로 요소 건너뛰기
const arr = ['first', 'middle', 'last'];

// 👉 가운데 요소는 건너뛰고 싶을 때 쉼표로 그냥 비워두면 됨
const [first, , last] = arr;

console.log(first); // first
console.log(last);  last
