// ✅ 화살표 함수 특징 정리 예제

// 1. 화살표 함수는 this를 가지지 않는다.
const theatre = {
    store: "건대점", 
    titles: ["어벤져스", "겨울왕국", "스파이더맨"], 
    showMovieList() {
        // ❌ 일반 함수는 this가 theatre를 가리키지 않음
        this.titles.forEach(function(title) {
            console.log(this); // 전역 객체(global)
            console.log(`${this.store} : ${title}`); // undefined : title
        });

        // ✅ 화살표 함수는 바깥(this)을 그대로 사용함
        this.titles.forEach((title) => {
            console.log(this); // theatre 객체
            console.log(`${this.store} : ${title}`); // 정상 출력
        });
    }
};

theatre.showMovieList();


// 2. 화살표 함수는 new와 함께 호출할 수 없다.
const arrowFunc = () => {};
// new arrowFunc(); // ❌ TypeError: arrowFunc is not a constructor
console.log(arrowFunc.hasOwnProperty("prototype")); // false


// 3. 화살표 함수는 super를 가지지 않는다.
class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    move(lostWeight) {
        if (this.weight > lostWeight) {
            this.weight -= lostWeight;
            console.log(`${this.name}(은)는 움직임으로 인해 ${lostWeight}kg 감량 되어 ${this.weight}kg이 되었습니다.`);
        }
    }
}

class Tiger extends Animal {
    move(lostWeight) {
        // ✅ super는 바깥스코프에서 쓰이므로 화살표 함수에서만 가능!
        setTimeout(() => {
            super.move(lostWeight);
        }, 3000);

        // ❌ 일반 함수에서는 super를 사용할 수 없음 (오류 발생)
        // setTimeout(function() {
        //     super.move(lostWeight); // 오류!
        // }, 3000);
    }
}

let tiger = new Tiger('백두산 호랭이', 90);
tiger.move(1);


// 4. 화살표 함수는 arguments를 가지지 않는다.
(function() {
    console.log("바깥 함수 arguments:", arguments); // [1, 2]

    // ✅ 화살표 함수는 자신의 arguments가 없고, 바깥 스코프의 것을 그대로 참조함
    const arrowArguments = () => {
        console.log("화살표 함수에서 접근한 arguments:", arguments); // [1, 2]
    };
    arrowArguments();

    // ✅ 일반 함수는 자기 자신의 arguments를 가짐
    const normalFunc = function () {
        console.log("일반 함수의 arguments:", arguments); // [3, 4]
    };
    normalFunc(3, 4);
})(1, 2); // 즉시 실행 함수

// ✅ 정리:
// 화살표 함수는 콜백 함수로 자주 쓰이며,
// this, arguments, super, new 같은 키워드들과 관련된 복잡한 바인딩 문제를 피하기 위해 설계됨.
// 특히 this 바인딩 문제를 깔끔하게 해결해주는 점이 큰 장점!
