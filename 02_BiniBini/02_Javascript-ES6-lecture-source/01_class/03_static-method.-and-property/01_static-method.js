// ✅ 정적 메서드(static method)란?
// 객체(인스턴스)가 아니라 '클래스 전체'에서 직접 호출하는 메서드임!
// - 보통 도우미 기능(helper), 비교, 생성 등을 처리할 때 사용함

// ✅ 예제 1: 키 순서대로 학생 정렬
class Student {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

    // ❌ 이렇게 하면 인스턴스용 메서드라서 Student.compare처럼 호출할 수 없음
    // compare(studentA, studentB) {
    //     return studentA.height - studentB.height;
    // }

    // ✅ 정적 메서드로 만들기 (클래스 자체에서 호출 가능)
    static compare(studentA, studentB) {
        return studentA.height - studentB.height;
    }
}

// 학생 리스트 생성
let students = [
    new Student('유관순', 165.5),
    new Student('홍길동', 180.6),
    new Student('선덕여왕', 159.5),
];

// 정렬할 때 Student 클래스에 있는 compare 정적 메서드를 써서 정렬
students.sort(Student.compare); // 키 오름차순 정렬
console.log("정렬된 students:", students);


// ✅ 정적 메서드는 이렇게 직접 붙이는 것도 가능함
Student.staticMethod = function () {
    console.log(`✔️ staticMethod는 클래스에 함수(메서드)를 직접 붙이는 거랑 똑같아`);
}
Student.staticMethod();


// ✅ 예제 2: 팩토리 메서드(정적 메서드로 객체를 만들어주는 기능)
class User {
    constructor(id, registDate) {
        this.id = id;
        this.registDate = registDate;
    }

    // 정적 메서드를 사용하면 객체를 만들 때 날짜까지 자동으로 넣을 수 있음
    static registUser(id) {
        return new this(id, new Date()); // 현재 날짜 자동 등록
    }
}

// 정적 메서드를 이용해 객체 생성
let user01 = User.registUser("user01");
console.log("생성된 user01 객체:", user01);
