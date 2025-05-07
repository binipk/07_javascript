// ✅ 구조 분해 할당 (Destructuring Assignment) 예제 모음

// 1. 객체 프로퍼티에서 사용하기
const user = {};
[user.firstName, user.lastName] = "Gwansoon Yu".split(" "); 
// "Gwansoon Yu".split(" ") → ["Gwansoon", "Yu"]
// 배열의 첫 번째 값 → user.firstName
// 배열의 두 번째 값 → user.lastName
console.log(user); // { firstName: 'Gwansoon', lastName: 'Yu' }


// 2. 변수 교환 (Swap) 용도로 사용하기
let student = "학생";
let teacher = "선생님";

// ✨ 구조 분해 할당으로 변수 값 교환
[teacher, student] = [student, teacher];

// 🔍 원리:
// [teacher, student] ← 왼쪽은 "해체해서 넣을 곳"이고,
// [student, teacher] ← 오른쪽은 현재 값들로 새 배열을 만들어주는 "값의 원본"임.
// 순식간에 서로 바뀐 값이 각각에 들어감.
console.log(`student : ${student}, teacher : ${teacher}`); // student : 선생님, teacher : 학생


// 3. 나머지 요소를 배열로 모으기 (...rest)
const [sign1, sign2, ...rest] = ["양자리", "황소자리", "쌍둥이자리", "게자리"];

// ✨ 첫 번째 → sign1, 두 번째 → sign2
// 나머지 전부 → rest 배열로 모임
console.log(sign1); // 양자리
console.log(sign2); // 황소자리
console.log(rest);  // ['쌍둥이자리', '게자리']


// 4. 기본값 설정하고 사용하기
const [firstName = "아무개", lastName = "김"] = ["길동"];

// ✨ 길동 → firstName에 할당
// lastName에 해당되는 값이 없으므로 기본값 "김"이 사용됨
console.log(firstName); // 길동
console.log(lastName);  // 김
