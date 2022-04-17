# TypeScript란?
타입스크립트는 자바스크립트를 기반으로 하는 강력한 typed programming language이다. 자바스크립트에 **type을 추가시킨 확장된 자바스크립트**이다.

* 타입스크립트는 자바스크립트에 추가적인 문법을 더해 편집기와의 긴밀한 통합을 지원한다. 편집기에서 오류를 초기에 파악할 수 있다. 
	* 자바스크립트를 사용할 때와 다르게 편집기에서 다양한 오류를 초기에 알려준다. 
* 타입스크립트 코드는 자바스크립트로 변환되며 브라우저, Node.js등 자바스크립트가 실행되는 모든 곳에서 실행된다.
* 타입스크립트는 자바스크립트를 이해하고 type 추론을 사용하여 추가적인 코드 없이 뛰어난 도구를 제공한다. 
<br>
<br>
# TypeScript for the New Programmer
<br>

## 정적 타입 검사자 (A Static Type Checker)
정적 검사란 프로그램을 실행시키지 않으면서 코드의 오류를 검출하는 것이다. 어떤 것이 오류인지, 어떤 것이 연산 되는 값에 기인하지 않음을 정하는 것이 정적 타입 검사이다. 정적 타입 검사자인 타입스크립트는 프로그램을 실행시키기 전에 값의 종류를 기반으로 프로그램의 오류를 찾는다. 
<br>

## 자바스크립트와 타입스크립트 간의 관계

### 구문
타입스크립트는 JS의 구문이 허용되는 자바스크립트의 상위 집합 언어이다. (구문은 프로그램을 만들기 위해 코드를 작성하는 방법을 의미한다.)
타입스크립트는 독특한 구문 때문에 자바스크립트 코드를 오류로 보지 않는다. 즉, 어떻게 작성되어있는지 모르지만 작동하는 자바스크립트 코드를 타입스크립트 파일에 넣어도 잘 작동한다. 
<br>

### 타입
타입스크립트의 타입 검사자는 일반적인 오류를 최대한 많이 검출하면서 올바른 프로그램을 만들 수 있게 설계되었다. 만약 자바스크립트 파일의 코드를 타입스크립트 코드로 옮기면, 코드를 어떻게 작성했는지에 따라 타입 오류를 볼 수 있다. 이는 코드상의 문제일 수도 있고 타입스크립트에서 너무 지나치게 보수적으로 오류 처리를 하는 것일 수 있다. 이런 오류를 제거하기 위해 다양한 타입스크립트 구문을 추가할 수 있다. 
<br>

### 런타임 특성
타입스크립트는 자바스크립트의 런타임 특성을 가진 프로그래밍 언어이다. 논리적으로 타입스크립트는 자바스크립트 코드의 런타임 특성을 절대 변화시키지 않는다. 이는 프로그램 작동을 중단시킬 수 있는 미묘한 차이를 걱정하지 않고 두 언어간에 쉽게 전환할 수 있도록 하기 위한 타입스크립트의 기본적이 약속이다. 
<br>


### 삭제된 타입
타입스크립트의 컴파일러가 코드 검사를 마치면 타입을 삭제해서 결과적으로 컴파일된 코드를 만든다. 즉 코드가 한 번 컴파일 되면 결과로 나온 일반 JS 코드에는 타입 정보가 없다. 
타입 정보가 없다는 것은 타입스크립트가 추론한 타입에 따라 프로그램의 특성을 변화시키지 않는다는 의미다. 결론적으로 컴파일 도중에는 타입 오류가 표현될 수 있지만, 타입 시스템 자체는 프로그램이 실행될 때 작동하는 방식과 관련이 없다. 
<br>



20220330

# 타입스크립트란?

타입스크립트는 자바스크립트 언어를 사용해 새로운 기능과 장점을 추가하는 언어로, 자바스크립트 코드를 더 쉽고 강력하게 작성할 수 있게 해준다. 그러나 타입스크립트는 브라우저와 같은 자바스크립트 실행 환경에서 실행이 불가능하다. 브라우저는 타입스크립트를 실행할 수 없다. 

타입스크립트는 언어이면서 컴파일러이다. 타입스크립트 코드를 자바스크립트로 컴파일하는 강력한 컴파일러이다.

타입스크립트는 자바스크립트에 "타입"을 추가하여 런타임 에러로 인해 발생하는 에러를 초기 개발 과정에서 발견하고 수정할 수 있도록 추가적인 오류 검사를 제공한다. 


