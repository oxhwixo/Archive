## useRef로 특정 DOM 선택하기

> [useRef로 특정 DOM 선택하기](https://react.vlpt.us/basic/10-useRef.html)



자바스크립트를 사용할 때는, 특정 DOM을 선택해야 하는 상황에서 `querySelector` 같은 DOM Selector함수를 사용한다. 

리액트에서도 가끔 DOM을 직접 선택해야 하는 상황이 발생하는데, 예를 들어 특정 엘리먼트의 크기를 가져온다거나, 스크롤바 위치를 가져오거나 설정할 때, 또는 포커스를 설정해야할 때 등이 있다. 이럴 때 `ref` 를 사용한다.

함수형 컴포넌트에서 `ref` 를 사용 할 때에는 `useRef` 라는 Hook 함수를 사용한다.

4번 문서에서 만든 InputSample.js에서 초기화 버튼을 클릭했을 때, focus가 input 박스에 그대로 남아있도록 만들어 보자.



#### InputSample.js

```javascript
import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });
  
  const nameInput = useRef();

  const { name, nickname } = inputs;

  const onChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value 
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
```



useRef( ) 를 사용하여 Ref 객체를 만들고, 이 객체를 선택하고 싶은 DOM 에 ref 값으로 설정해야한다. 그러면 Ref 객체의 .current 값이 내가 원하는 DOM을 가르키게 된다. 아래는 관련된 코드를 위 코드에서 가져온 것이다. 원래 위치는 위 코드에서 확인할 수 있다.

~~~js
const nameInput = useRef(); <- 이렇게 Ref 객체를 만들고, 

<input
  name="name"
  placeholder="이름"
  onChange={onChange}
  value={name}
  ref={nameInput} <- 이렇게 ref값 설정을 해준다. 
/>
~~~



여담으로, name input 과 nickname input 둘다 focus 되게 만들 수 없을까? 라는 생각에서 useRef객체를 하나 더 만들어서 onReset 함수에 새로운 객체에도 focus 되게끔 만들어준 후에 nickname input에 ref 설정을 해줬는데 name input에는 focus 되지 않고 nickname input에만 focus가 되길래 왜일까 고민해 보았다. 고민할 필요가 없었다. 요소가 입력 상태가 되었을 때 focus되었다고 하는데, 이 입력 상태는 한 번에 한 요소에만 일어날 수 있기 때문이다..! 