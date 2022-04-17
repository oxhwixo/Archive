# Class



## Class란?

* object를 만드는 설계도, 청사진 (blueprint)
* 클래스 개념 이전에 object를 만드는 기본적인 방법은 function 이었다.
* Javascript 에서 class는 es6 부터 사용 가능하다.
* OOP (객체지향개발) 을 위한 초석
* Typescript 에서는 클래스도 사용자가 만드는 타입의 하나이다.



~~~typescript
class Person {
	name; //Person.name 이라는 프로퍼티가 있음을 선언

	constructor(name: string) {
		this.name = name;
	}
};

const p1 = new Person("Mark");

console.log(p1); // 결과 : Person { name: 'Mark' }
~~~



* class 키워드를 이용하여 클래스를 만들 수 있다.
* class 이름은 보통 대문자를 이용한다.
* new 를 이용하여 class 를 통해 object 를 만들 수 있다.
* constructor 를 이용하여 object 를 생성하면서 값을 전달할 수 있다.
* this를 이용해서 만들어진 object를 가리킬 수 있다.
* JS es5로 컴파일되면 class가 function으로 변경된다.



## Constoructor & initialize

> 생성자와 초기화



#### 1. 생성자가 없는 경우

~~~typescript
class Person {
	name: string = "Mark";
	age!: number;
};
~~~

name은 Mark라는 값이 초기화 되어있지만 age에는 값이 초기화 되어있지 않다. class에 초기 값을 정해놓지 않고 객체 생성시 age를 외부에서 설정할 수 있게 하기 위해서 값을 설정하지 않은 것이다. 이때 age: numebr 이라고만 명시해두면 age에 number 값이 할당되지 않았기 때문에 에러가 발생한다. 그럴 때 변수명 옆에 느낌표를 붙여서 값이 할당되지 않았지만 에러로 표시하지 않도록 할 수 있다. 



#### 2. 생성자에 값을 넣을지 말지 선택

~~~typescript
class Person {
	name: string = "Mark";
	age: number;

	constructor(age?: number) {
		if (age === undefined) {
      this.age = 20;
    	} else {
      this. age = age;
    	}
    }
	};


const p1 = new Person(10);
const p1 = new Person(); 
// 둘 다 가능
~~~

물음표를 사용해서 생성자에 값을 넣을 수도, 안 넣을수도 있는 형태를 만들 수 있다.



#### 3. initialization in constructor parameters 

~~~typescript
class Person {
	public constructor(public name: string, private age: number) {}
};
~~~

생성자의 파라미터를 적으면서 동시에 선언까지 할 수 있다. 따로 선언부를 나누고 생성자 안에서 this 키워드를 이용해서 초기화 하지 않아도 된다. 



#### 3. constructor에는 async 사용 불가

async가 뭔지, 어떤 때에 클래스 생성자에 async를 사용하고 싶을지? 대안이 무엇인지 다시 찾아보기.



## 접근 제어자 (Access Modifiers)

* public : 어디에서나 접근 가능
* private : 클래스 내부에서만 접근 가능. 외부에서 접근 불가능
  * 관습적으로 변수 앞에 언더바를 붙임
* protected : 외부에서 접근 불가능 하지만 상속 관계에 있으면 접근 가능



## Getter & Setter

* getter : 클래스의 특정 값을 가져오는 함수
* setter :  클래스의 특정 값을 변경하는 함수

~~~typescript
class Person {
	public constructor(public _name: string, private age: number) {}
	
  get name() {
    return this._name;
  }
  
  set name(n: string) {
    this._name = n;
  }
};

console.log(p1.name); --> getter 실행
p1.name = "Ably" --> setter 실행
~~~



## 	 Readonly properties

readonly   키워드를 변수 선언할 때 이용하면 읽기 전용으로 변수를 생성한다. 

선언과 동시에 초기화할 때나  constructor 안에서만 초기화가 가능하다. 



## index signatures in class

~~~typescript
class Students {
  [index: string]: "male" | "female"; //인덱스시그니처
	mark : "male" = "male";
}
~~~



## Static Properties & Methods

~~~typescript
class Person {
  public static CITY = "Seoul";
	public static hello() {
		console.log("안녕.");
	}
};

const p1 = new Person();

//p1.hello();   --> 실행 불가능

Person.hello();
~~~



* 객체들이 공유하는 데이터, 메소드를 static 키워드를 통해 만들 수 있다. 
* 같은 클래스에서 파생된 객체들이 동일한 데이터를 공유할 수 있게 한다. 
  ( A 객체의 static 변수 값을 바꿨더니 B 객체의 static 변수의 값도 변한다.)



## Singletons



### 싱글톤 패턴이란?

어플리케이션이 실행되는 동안 클래스로부터 단 하나의 객체만 생성하는 패턴. 클래스 외부에서 new 키워드를 통해서 객체 생성하는 것을 막아야한다. ( 단 하나의 객체만 생성되어야 하기 때문에 ) constructor를 private 으로 만들어주어야 한다. 

그러면 어떻게 최초로 객체 생성이 되는 것일까? 아래 코드의. getInstance() 함수를 통해 가능하다.



~~~typescript
class ClassName {
  
  private static instance: ClassName | null = null;
  
  public static getInstance(): ClassName {
    //ClassName 으로부터 만든 객체가 있으면 그것을 리턴, 없으면 만들어서 리턴
    if (ClassName.instance === null) {
      ClassName.instatnce = new ClassName();
    }
    return ClassName.instance;
  }
  
  private constructor() {
    
  }
}

~~~



## 상속 (Inheritance)



### 상속이란?

클래스가 다른 클래스를 가져다가 그 기능을 이용하면서 자신만의 기능을 추가하는 것을 말한다.



~~~typescript
class Parent {
  constructor(protexted _name: string, private _age: number) {}
  
  pubilc print(): void {
    console.log('이름은 ${this._name} 이고 나이는 ${this._age} 입니다.');
  }
}

class Child extends Parent {
 // public _name = "Mark Jr" // 변수 오버라이드 가능
 // public gender = "male";
  
  constructor(age: number) { //자식만의 생성자 생성. 단, 부모 생성자 호출 해야함
    super("Mark Jr", age); // 부모 생성자 호출
  }
}
~~~



## 추상 클래스 (Abstract Classes)



### 추상 클래스란?

abstract 키워드를 통해 완전하지 않은 클래스를 표현할 수 있고 이것은 new를 통해 객체 생성이 불가능하다. 이 클래스를 추상 클래스라고 부르는데 상속을 통해 완전한 형태의 클래스를 만들고 난 후에 객체를 생성할 수 있다. 

완전하지 않은 클래스란 일부 메소드가 구현되지 않고 선언만 되어있는 클래스를 의미한다. 이 클래스를 상속받은 자식 클래스는 이것을 반드시 구현해야한다. 

~~~typescript
abstract class AbstractPerson {
  protected _name: string = "mark";
  abstract setName(name: string): void;
}

class Person extends AbstractPerson {
  setName(name: string): void {
    //여기서 함수를 완성시킨다.
  }
}
~~~

추상 클래스를 사용하는 이유는 무엇일까?

* "구체적인 행동 내용은 부모 입장에서 정의할 수 없는것"을 묘사하기 위해 이용된다. 
  즉 부모의 시점에선 행동을 특정할 수 없지만 모든 자식 클래스에서는 반드시 구현해야할 행동을 구현 가능하게 한다. 
  * https://ryan-han.com/post/java/abstract_class/ 댓글 참조  



\+ https://myjamong.tistory.com/150 : 여기서 필요한 건 아니지만(자바) 서치하다가 찾은 인터페이스와 추상클래스의 차이인데 예제 설명이 좋음. 한번 공부해보기!