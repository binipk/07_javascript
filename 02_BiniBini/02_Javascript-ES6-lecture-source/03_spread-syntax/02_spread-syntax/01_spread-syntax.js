// 스프레드 문법 (전개 문법)
const arr = [10, 20, 30];
console.log(`가장 큰 값: ${Math.max(10, 20, 30)}`);
console.log(`가장 큰 값: ${Math.max(arr)}`);

// 스프레드 문법을 사용하면 arr이 인수목록으로 확장됨
console.log(`가장 큰 값: ${Math.max(...arr)}`);

const arr1 = [10, 30, 20];
const arr2 = [100, 300, 200];
console.log(`가장 큰 값: ${Math.max(...arr1, ...arr2)}`);
console.log(`가장 큰 값: ${Math.max(0, ...arr1, 5, ...arr2)}`);

const merged = [0, ...arr1, ...arr2] // 손쉽게 두개 배열 합치기~
console.log(merged);

const str = "JavaStript"; // 배열이나 객체를 만들고 기존 것과 연결을 끊고 뭔가 만들고 싶을 때 ?엥?
console.log([...str]);