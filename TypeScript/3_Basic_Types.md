# Basic Types 

<br>

## Static VS Dynamic

Typescript는 Static Type이며 Javascript는 Dynamic Type이다. 이 둘은 어떻게 다를까?

<br>

### Static Type

개발 하는 중간에 타입을 체크할 수 있다.

### Dynamic Type

개발 하는 중에는 타입을 알 수가 없다. 

<br>

## 기본 자료형

<br>

### ECMAScript 표준에 따른 6가지 자료형

* boolean
* number
* string 
* null
* undefined
* symbol
* array  :  object형

<br>

### 추가 제공되는 타입

* any
* void
* never
* unknown
* enum
* Tuple : object형

<br>

## Primitive Type : 원시 타입

<br>

오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형이다. 
`( ex: 1, true, "ABC" 등 )`

Primitive type은 literal 값으로 primitive 타입의 서브 타입을 나타낼 수 있다. 
`( ex: true = boolean, 123 = number, "ABC" = string )`

래퍼 객체는 object형 이며 primitive type이 아니다. 
`( ex: new Boolean(false); )`

<br>

타입스크립트의 핵심 primitive type은 모두 소문자이다.

