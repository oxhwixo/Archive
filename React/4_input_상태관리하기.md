## input 상태 관리하기

> [출처 : input 상태 관리하기](https://react.vlpt.us/basic/08-manage-input.html)



`useState` 를 이용함과 동시에 input의 `onChange` 라는 이벤트를 사용해서 input의 상태를 관리할 수 있다. 이벤트에 등록하는 함수에서는 이벤트 객체 `e` 를 파라미터로 받아와서 사용할 수 있는데, 이 객체의 `e.target` 은 이벤트가 발생한 DOM인 input DOM 을 가리킨다. 이 DOM의 value 값인  `e.target.value`를 조회하면 현재 input 에 입력한 값이 무엇인지 알 수 있다. 

이 값을 `useState` 를 통해서 관리를 해주면 된다. 

~~~react
function InputSample() {
	const [text, setText] = useState('');

	const onChange = (e) => {
		setText(e.target.value);
	};

	const onReset = () => {
		setText('');
	};

	return (
		<div>
			<input onChange={onChange} value={text}/>
			<button onClick={onReset}>초기화</button>
			<div>
				<b>값: {text}</b>
			</div>
		</div>
	);
};
~~~



input에서 `value={text}` 를 설정하는 이유는 초기화 버튼을 눌렀을 때, input 안에 쓰여진 글씨도 함께 사라지게 만들기 위함이다. 처음에는 이해가 잘 안갔는데 곰곰히 생각해본 결과 내 생각은 이렇다.. 
사용자 입력이 있을 때 마다 onChange 이벤트가 감지되고, onChange 함수가 실행되며. text의 상태가 업데이트된다. 업데이트된 text 상태는 말그대로 input에 유저가 작성한 최종본이 될 것이고 그 text를 value 값으로 주어서 상태관리가 될 수 있도록 하는 것 같다. 다시 말하면 input을 통해 입력한 글은 onChange 함수를 통해서 text라는 상태관리 되고 있는 변수에 값으로 들어가게 되는데, input 안에 작성된 글은 상태관리되고있지 않아서, onReset을 하더라도 적용되지 않는다. 따라서 이 값도 상태관리 될 수 있게끔 하는 방법이  `value={text}` 를 설정하는 것이다. 

### onChange 

React의 onChange 이벤트 핸들러는 자바스크립트의 잘 알려진 onchange 속성을 기반으로 하지만 몇가지 기능이 더 추가가 되는 등 다르게 동작한다. 

onChange 이벤트는 사용자의 입력이 변경되었을 때 발생한다. 사용자가 추가 텍스트를 입력하거나, 다른 옵션을 선택하거나, 확인란을 선택하거나, 취소하거나 등의 입력이 변경되었을 때를 감지한다. 

onChange 이벤트 핸들러를 통해 실행되는 함수는 이벤트 객체를 파라미터로 넘겨받는다. 예를들어 파라미터 명을 e라고 했을 때, e.target은 이벤트가 발생한 DOM을 가리킨다. 



## 여러개의 input 상태 관리하기

> [여러개의 input 상태 관리하기](https://react.vlpt.us/basic/09-multiple-inputs.html)



input 의 개수가 여러개가 됐을 때, 단순히 useState를 여러번 사용하고 onChange를 여러개 만들어서 구현할 수 있지만, 그 방법이 가장 좋은 방법은 아니다. 더 좋은 방법은 input에 name을 설정하고 이벤트가 발생했을 때 이 값을 참조하는 것이다. 
그리고  useState에서는 **문자열이 아닌 객체 형태**의 상태를 관리해주어야 한다. 

```react
function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    })
  };


  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}
```



리액트 상태에서 객체를 수정해야할 때는, 아래 예시처럼 직접 수정해서는 안된다. 

```javascript
inputs[name] = value;
```

그 대신에, 새로운 객체를 만들고 그 객체에 변화를 주어서 사용해야한다.



```javascript
setInputs({
  ...inputs,
  [name]: value
});
```

이렇게 기존 객체를 복사한 후에 변경사항이 있는 부분만 고쳐준다. 이런 작업을 "불변성을 지킨다." 라고 부른다. 불변성을 지켜야지만 리액트 컴포넌트에서 상태가 업데이트 됐음을 감지할 수 있고 이에 따라 필요한 리렌더링이 진행된다. 기존의 것이 있어야 변경사항이 생긴 새로운 것과 비교할 수 있는 것이다. 만약 기존 상태를 직접 수정하게 되면 값을 변경해도 리렌더링이 일어나지 않는다. 