## useRef 로 컴포넌트 안의 변수 만들기

> [useRef 로 컴포넌트 안의 변수 만들기](https://react.vlpt.us/basic/12-variable-with-useRef.html)

useRef 는 DOM 을 선택하는 용도 외에도, 컴포넌트 안에서 조회 및 수정할 수 있는 변수를 관리하는 용도로 쓰인다.

**useRef 로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링 되지 않는다.** 리액트 컴포넌트에서 상태는 상태를 바꾸는 함수를 호출하고 난 후, 다음 ## [](https://seujang.tistory.com/23#%C-%A-)

## [풀이](https://seujang.tistory.com/23#%ED%--%--%EC%-D%B-)

일단 문제를 잘 이해해야한다. "그날 성냥을 넣은 성냥갑과 컵에 들어있는 성냥의 수를 구하는 프로그램"이라고 문제에 명시되어있지만, "그날 넣은 성냥"의 개수를 세는 것으로 착각하기 쉬운 문제이다. 그날 넣은 성냥의 개수를 세는 것으로 착각했다면 아마 출력 예시를 보고 당황했을 것이다.

문제를 잘 읽어보고 헷갈릴 만한 내용들을 정리해보았다.

- **m일간 컵과 성냥갑은 공유된다.** 초기화 되는 것이 아니다.
- 같은 컵 뿐만 아니라 **같은 성냥갑에도 성냥이 한 개 이상 들어갈 수 있다.**(나는 성냥갑에는 성냥이 하나만 들어갈 것이라고 착각했었다.)
- 첫번째 날 부터 m번째 날 까지 각각의 날짜에 **내가 성냥을 넣은 곳에 들어있는 성냥의 총 개수를 세는 것**이다.더링 이후로 업데이트된 상태를 조회할 수 있는 반면에 useRef 로 관리하고 있는 변수는 설정 후 바로 조회할 수 있다.

이 변수를 사용하여 다음과 같은 값을 관리 할 수 있다.

- `setTimeout`, `setInterval` 을 통해서 만들어진 `id`
- 외부 라이브러리를 사용하여 생성된 인스턴스
- scroll 위치

### 함수 내에서 직접 변수를 설정하지 않고 useRef를 사용해야하는 이유

공식 문서에 다음과 같은 설명이 있다.

> 이 기능은 클래스에서 인스턴스 필드를 사용하는 방법과 유사한 [어떤 가변값을 유지하는 데에 편리합니다](https://ko.reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables). 이것은 `useRef()`가 순수 자바스크립트 객체를 생성하기 때문입니다. `useRef()`와 `{current: ...}` 객체 자체를 생성하는 것의 유일한 차이점이라면 `useRef`는 매번 렌더링을 할 때 동일한 ref 객체를 제공한다는 것입니다.

여기서 동일한 ref 객체를 제공한다는 부분이 중요하다. 함수형 컴포넌트는 일반 자바스크립트 함수와 마찬가지로 호출될 때 마다 함수 내부에 정의된 로컬 변수들을 초기화한다. 반면 useRef로 만들어진 객체는 리액트가 만든 전역 저장소에 저장되기 때문에 함수를 재 호출 하더라도 마지막으로 업데이트한 current 값이 유지된다.

이제 7번 문서에서 만들었던 UserList 컴포넌트를 가지고, APP 컴포넌트에서 배열에 새항목을 추가할 때 사용할 고유 Id를 관리할 용도로 useRef를 사용해보자. 7번에서 만들었던 useList 컴포넌트는 내부에서 배열을 직접 선언해서 사용하고 있는데, 이번에는 이 배열을 APP 에서 선언하고 UserList 에게 props로 전달하게끔 수정한다.

#### App.js

```js
import React from "react";
import UserList from "./UserList";

function App() {
  const users = [
    {
      id: 1,
      username: "A",
      email: "A@gmail.com",
    },
    {
      id: 2,
      username: "B",
      email: "B@gmail.com",
    },
    {
      id: 3,
      username: "C",
      email: "C@gmail.com",
    },
  ];
  return <UserList users={users} />;
}

export default App;
```

#### UserList.js

```js
import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
```

이제 APP 에서 useRef( ) 를 사용하여 nextId라는 변수를 만들어준다.

#### App.js

```js
import React from "react";
import UserList from "./UserList";

function App() {
  const users = [
    {
      id: 1,
      username: "A",
      email: "A@gmail.com",
    },
    {
      id: 2,
      username: "B",
      email: "B@gmail.com",
    },
    {
      id: 3,
      username: "C",
      email: "C@gmail.com",
    },
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    // 새로운 배열을 추가하는 부분
    nextId.current += 1;
  };
  return <UserList users={users} />;
}

export default App;
```

useRef 를 사용할 때 파라미터를 넣어주면, 이 값이 .current 값의 기본 값이 된다. 그리고 이 값을 수정할 때는 .current값을 수정하면 되고, 조회할 때는 .current 를 조회하면 된다. 이 예시에서는 onCreate 함수에서 배열 생성을 한 후에 id 값에 1을 더해 새로운 아이디를 만들어 current에 저장한다.

```js
const nextId = useRef(4);

const onCreate = () => {
  // 새로운 배열을 추가하는 부분
  nextId.current += 1;
};
```

배열을 추가하는 부분은 다음 문서에서 다루도록 하겠다.
