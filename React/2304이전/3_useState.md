## useState를 이용해서 상태 관리하기

> [출처 : useState 를 통해 컴포넌트에서 바뀌는 값 관리하기](https://react.vlpt.us/basic/07-useState.html)



컴포넌트에서 **동적인 값을 상태(state) 라고 부른다**. 리액트에는 useState라는 함수가 있는데, 이것을 사용해서 컴포너트에서 상태를 관리할 수 있다. 

~~~js
import React, { useState } from "react";

function Counter () {
	const [number, setNumber] = useState(0);

	const onIncrease = () => {
		setNumber(number + 1);
	}
	const onDecrease = () => {
		setNumber(number - 1);
	}
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

위 코드는 버튼을 클릭하면 숫자가 1씩 더해지거나 1씩 빼지는 화면을 만드는 코드이다. 하나하나 살펴보자!



###  1. useState 함수 불러오기

```javascript
import React, { useState } from 'react';
```

 useState를 사용하기 위해서 리액트 패키지에서 useState라는 함수를 불러온다.



### 2. useState 함수 호출하기

```javascript
const [number, setNumber] = useState(0);
```

useState를 사용할 때, 상태의 기본값을 파라미터로 넣어서 호출한다. 이 함수를 호출하면 배열이 반환되는데, 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수이다. 

원래는 아래와 같이 할당해야 하지만 배열 비구조화 할당을 이용해서 위와같이 간소화 할 수 있다. 

```javascript
const numberState = useState(0);
const number = numberState[0];
const setNumber = numberState[1];
```



###  3. Setter 함수 사용하기

Setter 함수는 파라미터로 전달 받은 값을 최신 상태로 설정해준다. 

```javascript
const onIncrease = () => {
  setNumber(number + 1);
}

const onDecrease = () => {
  setNumber(number - 1);
}
```

위 함수들이 실행 될 때 Setter 함수가 실행되며 상태가 업데이트된다.



~~~html
return (
  <div>
  	<h1>{number}</h1>
  	<button onClick={onIncrease}>+1</button>
		<button onClick={onDecrease}>-1</button>
	</div>
);
~~~

이제 함수 실행에 따라서 number 값이 계속 바뀌게 된다. 



### 4. 함수형 업데이트

위 예제에서는 Setter 함수를 사용할 때 업데이트 하고 싶은 새로운 값을 파라미터로 넣어주고 있는데, 그 대신 기존 값을 어떻게 업데이트 할 지에 대한 함수를 등록하는 방식으로도 값을 업데이트할 수 있다. 

```javascript
const onIncrease = () => {
  setNumber(prevNumber => prevNumber + 1);
}

const onDecrease = () => {
  setNumber(prevNumber => prevNumber - 1);
}
```

여기서 prevNumber라는 변수를 따로 선언을 하거나 초기화 하지 않았는데도 그 자리에 자동으로 기존 상태 값이 들어간다. 이것은 setState에 함수를 파라미터로 넣었을 때, 그 함수의 파라미터로 이전 값을 넣어주게끔 개발이 되어있기 때문이다. 콜백함수 개념을 알고있어야 이해가 쉽다고 하는데 내부적인 구현은 나중에 찾아보기로 ...

