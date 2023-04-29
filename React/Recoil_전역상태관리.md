# Recoil로 전역상태관리하기

## 상태란?

바닐라 자바스크립트를 사용할 때는 selector로 Element를 찾아서 직접 DOM을 조작하며 렌더링을 한다. 하지만 리액트는 DOM에 직접 접근하지않고 내부적으로 가상 DOM을 사용해서 특정 상태값에 따라 컴포넌트를 어떤식으로 렌더링할지 선언하는 방식으로 동작한다. 컴포넌트는 참조하는 상태값이 변화할 때 자동으로 리렌더링 된다. 

"상태"란 컴포넌트 내부에서 관리되며 어플리케이션의 렌더에 영향을 미치는 객체이다. 동시에 "상태"는 사용자와의 인터랙션을 통해 동적으로 계속해서 변화하는 데이터이다. 웹사이트가 커지고 복잡해질수록 이런 상태들은 점점 많아지고, 관리하기 어려워진다. 

상태를 관리하기 어렵다는 의미는 무엇일까?
useState hook을 사용해서 상태를 생성하고 업데이트할 수 있지만 이것은 기본적으로 컴포넌트 내부에서만 사용된다. 다른 컴포넌트와 상태를 공유하기 위해서는 prop으로 전달하는 과정이 필요하다. 예를들어 A컴포넌트안에 B컴포넌트가 있고 그 안에 C컴포넌트가 있다고 가정해보자. A에서 생성한 상태가 C에서 업데이트 되어야 한다면 A에서 만든 setter를  B로 넘기고 또 C로 넘겨야한다. 이런 방식을  **Prop Drilling** 이라고 한다. 만약 A와 C사이에 더 많은 컴포넌트들을 거쳐야한다면 그 코드의 prop들을 추적하기 힘들어질 것이다.

이런 상태들은 일괄적이어야한다. 서로 다른 여러개의 컴포넌트들이 동일한 상태를 다룰 때, 그 데이터의 정확성을 보장하기 위해 데이터의 변경을 제한하고 데이터의 상태를 항상 같게 유지해야한다. 이런 데이터의 무결성을 유지하기 위해  [**Single source of Truth**](https://ko.wikipedia.org/wiki/단일_진실_공급원)라는 방법론이 생기기도 했으며 리액트도 이 방법론을 채택해서 useState를 통해서만 state를 변경시켜야 한다는 룰을 만들었다고 추측할 수 있다. 

## 상태관리가 필요한 이유

서로다른 두 컴포넌트간에 같은 데이터가 필요할 때, 각 컴포넌트가 부모자식 관계가 아닌 이상 직접적인 데이터 전달이 어렵다. 이경우엔 데이터를 부모 컴포넌트로 보내고 또 그 데이터를 다른 부모나 자식 컴포넌트로 보내는등 무수히 많은 **Prop Drilling**이 발생할 수 있다.  **Prop Drilling**이 많아지면 어떤 prop이 어디에서 왔는지 확인하기 매우 어려워진다. 어떤 상태가 어디에서 왔고, 어디를 거쳐서 어디까지가는지 기억하는것도 매우 힘든 일일것이다. 

그래서 prop drilling을 피해 유지보수하는데 어려움을 겪지 않도록 상태를 관리할 수 있게해주는 "상태관리 툴"이 필요한 것이다.



## Recoil

리액트를 만들어낸 페이스북에서 만든 Recoil은 손쉽게 전역 상태관리를 가능하게 해주는 상태관리 툴이다. 어느 컴포넌트라도 전역 상태에 접근하여 상태를 업데이트할 수 있다. 하지만 이런 간편함은 장점이면서도 단점으로 작용한다. 어느 컴포넌트가 언제 전역 상태를 변경하는지 알 수 없기 때문이다. 손쉬운 전역 상태 관리 덕분에 빠르게 개발을 할 수 있지만 Redux에 비해 공식 개발자 도구가 없어서 상태의 변경을 파악하기 어려우며 디버깅하는데 어려움을 겪을 수 있다. 



### 사용방법

#### 설치

먼저 Recoil 패키지를 설치해야한다. 아래의 명령어를 실행해서 설치한다.

~~~bash
npm install recoil
~~~



#### RecoilRoot

recoil 상태를 사용하는 컴포넌트는 부모 트리에 RecoilRoot를 넣어주어야한다. 공식 문서는 RecoilRoot를 루트 컴포넌트에 넣는것을 추천한다.

~~~react
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}
~~~



#### Atom

Recoil에서 하나의 전역 상태는 Atom이라고 부른다. 어떤 컴포넌트에서든 읽고 쓸 수 있으며 atom의 값을 읽은 컴포넌트들은 암묵적으로 atom을 **구독**한다. 그래서 atom에 어떤 변화가 생기면 그 atom을 구독하는 모든 컴포넌트가 재 렌더링 된다.

atom을 생성하기 위해 고유한 key값과 default값을 설정해야한다. 

~~~react
const textState = atom({
  key: 'textState', // unique ID 
  default: '', // default value 
});
~~~

컴포넌트가 atom을 읽고 쓰게 하기 위해서는  `useRecoilState()`를 아래와 같이 `useState`와 동일한 방식으로 사용할 수 있다.

~~~react
function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}
~~~

그외 

* **useRecoilValue ** : setter 함수 없이 atom의 값을 반환만 한다.
* **useSetRecoilState **: setter 함수만 반환한다.



#### selector

selector는 상태에서 파생된 데이터로, 다른 atom에 의존하는 동적인 데이터를 만들 수 있게 해준다. 





#### 참고

* https://recoiljs.org/ko/docs/introduction/getting-started/

* https://findmypiece.tistory.com/26
* https://mingule.tistory.com/74
* https://techblog.yogiyo.co.kr/recoil%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%86%90%EC%89%AC%EC%9A%B4-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-b70b32650582
* https://ui.toast.com/weekly-pick/ko_20200616