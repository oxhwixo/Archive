## Context API 를 사용한 전역 값 관리

Context API 를 사용하면 프로젝트 안에서 전역적으로 사용할 수 있는 값을 관리할 수 있다. Context 를 만들 땐 다음과 같이 `React.createContext()` 라는 함수를 사용한다. `createContext` 의 파라미터에는 Context 의 기본값을 설정할 수 있다.

```javascript
export const UserDispatch = React.createContext(null);
```

Context 를 만들면, Context 안에 Provider 라는 컴포넌트가 들어있는데 이 컴포넌트를 통하여 Context 의 값을 정할 수 있다. 이 컴포넌트를 사용할 때, `value` 라는 값을 설정해주면 된다.

```javascript
<UserDispatch.Provider value={dispatch}>...</UserDispatch.Provider>
```

이렇게 설정해주고 나면 Provider 에 의하여 감싸진 컴포넌트 중 어디서든지 value에 넣은 값을 다른 곳에서 바로 조회해서 사용 할 수 있다.

다음과 같이 불러와서 사용 가능하다.`useContext` 라는 Hook 을 사용해서 우리가 만든 UserDispatch Context 를 조회해야한다.

```javascript
import { UserDispatch } from './App';

const User = React.memo(function User({ user }) {
  const dispatch = useContext(UserDispatch);
} 
```



