## JS 선행

###  표기법

* Dash-case (kebab-case)

  단어와 단어 사이에 대쉬 사용.

  HTML과 CSS에서 주로 사용

* Snake_case

  단어와 단어 사이에 언더바 사용.

  HTML과 CSS에서 주로 사용

* camelCase

  단어의 첫글자를 대문자로 구분. 맨! 앞은 소문자로!!

  JS에서 주로 사용하는 표현법.

* PascalCase

  단어의 첫글자를 대문자로 구분. 맨! 앞도 대문자로!!

* Zero-based Numbering

  0 기반 번호 매기기.

  특수한 경우를 제외하고 0부터 숫자를 시작한다.



---



### 데이터 종류

변수 선언할 때 앞에  let 선언

* string

  ~~~JS
  let myName = "HWI"
  let hello = `Hello ${myName}!!!`
  ~~~

  기본적으로 따옴표를 사용함.

  ` <- 백틱을 사용했을 때는 보간법을 이용가능. ${변수명}을 넣을 수 있음.

* Number

* Boolean

  true, false 

* Undefined

  값이 할당되지 않은 상태를 나타냄.

  자바스크립트만의 특이한 문법.

* Null

  어떤 값이 의도적으로 비어있음을 의미함

* Object : 객체데이터

  여러 데이터를 Key:Value 형태로 저장함. 

  ~~~JS
  let user = {
  	name: "HWI",
  	age: 85,
  	isValid: true
  }
  ~~~

  구조체 같은 자료형. 사용도 user.name, user.isValid <- 이렇게 씀.

* Array : 배열데이터

  ~~~JS
  let fruits = ['Apple', 'Banana']
  ~~~



---



### 변수

데이터를 저장하고 참조(사용)하는 데이터 이름

* let 
* const
* var <- 현재는 사용을 지양



---



### 예약어

특별한 의미를 가지고 있어, 변수나 함수 이름 등으로 사용할 수 없는 단어



---



### 함수

특정 동작을 수행하는 일부 코드의 집합

~~~JS
이름이 있는 함수. 기명 함수

function helloFunc() {
	console.log(1234);
  return 2;
}

function sum(a, b) {
  return a + b;
}


이름이 없는 함수. 익명 함수. 변수에 할당해서 사용하는 방식?! 나중에 쓰임..!!
let world = function (){
  console.log('World~');
}

let user = {
	name: "HWI",
	age: 85,
	isValid: true,
  getName: function() {  <---- 익명함수를 이용해서 표현. Method!!
    return this.name <--- 자기 자신(객체데이터)을 뜻함
  }
}
~~~



---



### DOM API

Doncumnet Object Model : Document는 HTML을, Object Model은 각종 요소들을 이야기함.

Application Programing Interface : 웹사이트가 동작하기 위한 프로그래밍 명령

---> 자바스크립트에서 HTML을 제어하는 여러가지 명령들



* \<script **defer** src="./main.js">\</script>

  defet : HTML 코드를 다 읽은 상태에서 다시 main.js 를 실행하겠다는 속성! 

* document.querySelector(".box");

  요소 검색. 가장 먼저 선언된 **1개만 검색됨** 

  document.querySelectorAll(".box"); 

  **해당하는 요소 모두 검색!!!**

* ~~~JS
  boxEl.addEventListener('click', function(){
  	console.log('Click!');
  })
  ~~~

  addEventListener(이벤트, 이벤트가 발생했을 때 호출할 핸들러 함수

  { })

* ~~~JS
  let boxEl = document.querySelector(".box");
  boxEl.classList.add('active'); <-- box라는 클래스를 가지고 있는 요소에 active라는 클래스를 추가!!
  boxEl.classList.contains('active'); <-- 액티브가 있는지 없는지 
  boxEl.classList.remove('active');
  ~~~

* ~~~javascript
  let boxEls = document.querySelectorAll(".box");
  여러개가 검색되기 때문에 배열과 비슷한 데이터로 저장됨. 유사배열(Array-like)
  
  boxEls.forEach( function(boxEl, index) {
    boxEl.classList.add('order-${index + 1}');
    console.log(index, boxEl)
  })
  
  ~~~

  boxEls.forEach(function (boxEl, index) {}) <-- 찾은 요소들에 반복해서 함수 실행할 수 있음. 익명 함수를 인수로 추가.
  익명 함수의 첫번째 매개변수는 반복중인 요소. 두번째 매개변수는 반복중인 번호.

* ~~~JS
  console.log(boxEl.textContent) : 값을 얻는 용도
  boxEl.textContent = "ABC" : 값을 넣는 용도 
  ~~~



---



### 메소드 체이닝

~~~JS
const b=a.split('').reverse().join('');
~~~

메소드 여러개를 한번에 연결해서 실행시키는 것. 

