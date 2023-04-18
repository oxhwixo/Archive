## React.memo 를 사용한 컴포넌트 리렌더링 방지

props 가 바뀌지 않았다면, 리렌더링을 방지하여 컴포넌트의 리렌더링 성능 최적화를 해줄 수 있는 React.memo 라는 함수에 대해서 알아보자.

이 함수를 사용하면 컴포넌트에서 리렌더링이 필요한 상황에서만 리렌더링을 하도록 설정할 수 있다. 

사용하는 방법은 컴포넌트를 감싸주기만 하면 된다. Export 되는 단일 컴포넌트는 아래처럼,

~~~js
export default React.memo(CreateUser);
~~~

컴포넌트 내부에서만 사용되는 함수형 컴포넌트에는 아래와 같이 감싸준다.

~~~js
const User = React.memo(function User({ user, onRemove, onToggle }) {
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});
~~~



뒤에 이어지는 함수형 업데이트 사용해서 최적화 마무리 하는 부분은 아직 이해가 안가서 다음에 다시 공부해보는걸로.. 노트에 이해한 만큼 적어보긴 했는데 맞는지 검증이 필요함

https://react.vlpt.us/basic/19-React.memo.html

