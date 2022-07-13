## useReducer

상태를 관리하게 될 때 `useState` 를 사용하는 것 말고도 `useReducer` 를 사용할 수 있다. 이 Hook 함수를 사용하면 컴포넌트의 **상태 업데이트 로직을 컴포넌트에서 분리**시킬 수 있다. 상태 업데이트 로직을 컴포넌트 바깥에 작성 할 수도 있고, 심지어 다른 파일에 작성 후 불러와서 사용 할 수도 있다.

reducer 란 현재 상태와 액션객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수이다. 

~~~js
function reducer(state, action) {
  // 새로운 상태를 만드는 로직
  // const nextState = ...
  return nextState;
}
~~~

Reducer 에서 반환하는 상태는 곧 컴포넌트가 지닐 새로운 상태가 된다. 여기서 action 은 업데이트를 위한 정보를 가지고있다. 주로 type 값을 지닌 객체 형태로 사용하지만, 꼭 따라야할 규칙은 따로 없다.

액션의 예시는 아래와 같다. Type 값을 대문자와 _ 로 구성하는 관습이 있지만 꼭 따라야할 필요는 없다. 

~~~js
// 카운터에 1을 더하는 액션
{
  type: 'INCREMENT'
}
// 카운터에 1을 빼는 액션
{
  type: 'DECREMENT'
}
// input 값을 바꾸는 액션
{
  type: 'CHANGE_INPUT',
  key: 'email',
  value: 'tester@react.com'
}
// 새 할 일을 등록하는 액션
{
  type: 'ADD_TODO',
  todo: {
    id: 1,
    text: 'useReducer 배우기',
    done: false,
  }
~~~



useReducer은 아래와 같이 사용한다.

~~~js
const [state, dispatch] = useReducer(reducer, initialState);
~~~

여기서 state 는 앞으로 컴포넌트에서 사용할 수 있는 상태를 가르키게 되고, dispatch 는 액션을 발생시키는 함수이다. 이 함수는 dispatch({ type: 'INCREMENT' }) 이런식으로 사용한다. 그리고 useReducer에 넣는 첫번째 파라미터는 reducer 함수이고, 두번째 파라미터는 초기 상태이다. 

아래는 useReducer 의 사용 예시이다. 

~~~js
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const onDecrease = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
~~~





