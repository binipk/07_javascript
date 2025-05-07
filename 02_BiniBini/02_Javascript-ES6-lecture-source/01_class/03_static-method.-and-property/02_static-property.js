// ✅ 정적 프로퍼티(static property)란?
// 객체(인스턴스)가 아니라 '클래스 자체에 저장되는 값'이야!
// - 모든 객체가 공유할 수 있는 정보 (예: 공통된 설정값 등)를 저장할 때 사용함
// - ES2022(최신 문법)부터 class 내부에서 직접 정의 가능함

// ✅ 예제: 동물(Animal) 클래스 정의
class Animal {

    // 정적 프로퍼티 선언 (클래스 전체에서 공유되는 값)
    static planet = "지구";

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    eat(foodWeight){
        this.weight += foodWeight;
        console.log(`${this.name}(은)는 ${foodWeight}kg의 식사를 하고 ${this.weight}kg이 되었습니다.`);
    }

    move(lostWeight){
        if(this.weight > lostWeight) {
            this.weight -= lostWeight;
            console.log(`${this.name}(은)는 움직임으로 인해 ${lostWeight}kg 감량 되어 ${this.weight}kg이 되었습니다.`);
        }
    }
}

// ✅ 클래스 이름으로 직접 접근 (인스턴스가 아니라!)
console.log(Animal.planet); // "지구"

// ✅ 이렇게 클래스에 직접 프로퍼티를 추가하는 것도 가능해
Animal.staticProperty = "static을 사용한 선언은 기술적으로 클래스 자체에 직접 할당하는 것과 동일하다.";
console.log(Animal.staticProperty); 


// ✅ Animal 클래스를 상속받은 Human 클래스
class Human extends Animal {
    develop(language) {
        console.log(`${this.name}은 ${language}로 개발을 합니다. 존잼입니다.`);
    }
}

// 🔥 정적 프로퍼티는 상속도 됨!
console.log(Human.planet);         // "지구"
console.log(Human.staticProperty); // 직접 추가한 프로퍼티도 상속됨
