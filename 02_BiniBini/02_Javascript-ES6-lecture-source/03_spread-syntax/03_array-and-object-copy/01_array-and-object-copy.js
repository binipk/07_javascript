// 스프래드 문법의 활용 => 배열 또는 객체를 복사할 때 주로 사용한다.

// 깊은 복사 => 주소를 끊는다.
const arr = [10, 20, 30];
const arrCopy = [...arr];
console.log(arr);
console.log(arrCopy); // 주소가 다름
console.log(arr === arrCopy);

const obj = {name: "홍길동", age: 19}; // 객체를 많이 씀 (formtag에 있는 input tag가 10개가 있는데 3개만 넣을려고함, 그때마다 안에 내용을 다 채워줘야 하는데...
                                      // ...obj , name: "유관순" 이러면 name 값을 한번 더 써서 덮어쓰기함) --> 되게 많이 쓴다.
const objCopy = {...obj, name: "유관순"};
console.log(obj);
console.log(objCopy);
console.log(obj === objCopy);

