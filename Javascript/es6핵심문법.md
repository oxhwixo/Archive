## 변수선언

블록스코프인 let과 const가 추가되었다. 이전까지는 함수 스코프인 var이 사용되었다. 

### var

var의 범위는 전력범위 혹은 함수 범위로 지정된다. var는 함수 외부에서 선언되었을 때 전역범위를 가진다. var 키워드를 사용해서 만든 변수는 호이스팅되어 undefined로 초기화 된다. 호이스팅이란 변수와 함수 선언이 맨 위로 이동되는 자바스크립트의 매커니즘이다. 코드의 중간 어딘가에서 var 키워드로 변수를 선언, 초기화 하고 그 코드 위에서 같은 변수를 호출하면 undefined 값을 가진 변수가 호출된다. 또한 여러번 재선언이 가능하다. 

이런 특징들 때문에 많은 버그를 일으킬 가능성이 있는 키워드이다. 이때문에 최근에는 let과 const를 사용한다.

### let

블록범위를 가지며 값을 업데이트 할 수 있지만 재선언이 불가능하다. 그러나 블록범위이기 때문에 다른 범위 내에서 재선언 되는것은 문제가 없다. let 키워드로 만든 변수는 var처럼 호이스팅 되어 선언부가 맨 위로 끌어 올려지지만 undefined로 초기화되지 않는다. 따라서 내가 작성한 선언 이전에 let 변수를 사용하려고 시도하면 참조오류가 발생한다. 

### const

블록범위를 가지며 값을 업데이트하거나 같은 이름의 변수를 재선언할 수 없다. 따라서 const 변수는 선언과 동시에 초기화 되어야 한다. 그러나 주의해야하는 것이 const 키워드로 만든 객체의 '속성'은 업데이트할 수 있다. 



## 화살표 함수

함수 표현식보다 단순하고 간결한 문법으로 함수를 만드는 방법이다. 

~~~js
let sum = (a, b) => a + b;
let minus = (a, b) => {
  a = a * a;
  return a - b;
}
let number = (num < 10) ?
  () => alert('10미만') :
  () => alert("10이상");
~~~



## export, import

외부 라이브러리를 불러오거나 내보내기 위해 사용되는 키워드이다. es6 모듈시스템은 import, from, export, default 같은 모듈 관리 전용 키워드를 사용한다. 또한 비동기 방식으로 작동하고 모듈에서 실제로 쓰이는 부분만 가져올 수 있기 때문에 성능과 메모리 부분에서 유리한 측면이 있다. 

* export : 다른 파일에서 접근하여 사용할 수 있도록 메소드, 변수등을 내보내는 키워드로 함수나 변수 선언시 앞에 적어주거나 `export { myModule };` 와 같이 선언 이후에 별도로 내보낼 수 있다.

  단일 객체를 내보낼 때는 export default 키워드를 사용한다. 하나의 모듈에서 하나의 객체만 내보내기 때문에 이것을 Default Export라고 말한다.

  ~~~js
  export default {
    one() {
      return 1;
    },
  
    two: function () {
      return 2;
    },
  };
  ~~~

  

* import : 모듈을 불러올 때, 필요한 객체만 선택적으로 불러오거나 모든 객체를 가져올 수 있으며 따로 별명을 붙일 수도 있다.

  ~~~js
  import { myModule } from "./my-modules";
  import * as something from "./my-modules";
  ~~~

  하나의 객체(Default Export)를 불러올 때는 간단하게 `import` 키워드를 사용해서 아무 이름이나 원하는 이름을 주고 해당 객체를 통해 속성에 접근하면 된다.

## 비구조화 할당(구조 분해 할당)

배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식이다. 함수의 파라미터에서도 비구조화 할당을 할 수 있다. 

~~~js
const object = { a: 1, b: 2 };
const { a, b } = object;

function print({ a, b }) {
  console.log(a);
  console.log(b);
}


const obj2 = { a : 1 }
// 비구조 할당시 값이 없을 수도 있는 변수에 대해 기본값을 설정할 수 있다.
function print2({ a, b = 2 }) {
  console.log(a);
  console.log(b);
}

// 가져온 속성 이름을 바꿀 수 있다.
function print3({ a: num1, b: num2}) {
  console.log(a);
  console.log(b);
}

// 배열에서의 사용 예시
const array = [1, 2];
const [one, two] = array;
const [one, two, three = 3] = array;
~~~

깊숙히 안에 들어있는 값을 추출하는 방법은 다음과 같다.

~~~js
const deepObject = {
  state: {
    information: {
      name: 'velopert',
      languages: ['korean', 'english', 'chinese']
    }
  },
  value: 5
};

// 위의 객체에서 name, language, value를 추출할 때
const {
  state: {
    information: { name, languages }
  },
  value
} = deepObject;

// object-shorthand 문법을 이용해서 새로운 객체 생성 (name: name, value: value...)
const extracted = {
  name,
  languages,
  value
};

console.log(extracted);
~~~

> 참고 https://learnjs.vlpt.us/useful/06-destructuring.html



### Nullish 병합연산자

자바스크립트에서 `??` 물음표 두개는 null 병합연산자로 왼쪽 피연산자가 null이거나 undefined인 경우 오른쪽의 피연산자를 반환하고 그렇지 않으면 왼쪽 피연산자를 반환하는 논리연산자이다. 주의할 점으로는, 왼쪽 피연산자에 and나 or 연산자를 사용하고 싶다면 소괄호로 연산자 순서를 명시해야한다. 



### 옵셔널체이닝

객체의 속성에 접근할 때, 아직 만들어지지 않은 속성에 접근하면 타입에러가 발생한다. 이때 옵셔널 체이닝을 이용하면 에러를 발생시키지 않을 수 있다. 아래 예시처럼 `?.` 을 통해 속성에 접근하면 된다. 

~~~js
console.log(user.gender?.length);
~~~

