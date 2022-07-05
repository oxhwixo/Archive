## map() 함수를 이용해서 배열 렌더링 하기

> [배열 렌더링하기](https://react.vlpt.us/basic/11-render-array.html)



동적인 배열을 렌더링 할 때는 자바스크립드 배열의 내장 함수인 map( ) 을 사용한다. map 함수는 파라미터로 변화를 주는 함수를 받아서 배열 각 요소에 함수를 적용시켜서 새로운 배열을 만들어준다. 리액트에서 동적인 배열을 렌더링 해야할 때는 이 함수를 사용해서 **일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로** 변환해주면 된다. 

```javascript
import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'A',
      email: 'A@gmail.com'
    },
    {
      id: 2,
      username: 'B',
      email: 'B@gmail.com'
    },
    {
      id: 3,
      username: 'C',
      email: 'C@gmail.com'
    }
  ];

  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
```

여기서 Key 는 각 원소들마다 가지고 있는 고유 값으로 설정해야한다. 위 예시에서는 Id 가 고유 값이므로 key에 user.id를 넣어주었다. 만약에 배열 안의 원소가 따로 고유한 값을 가지고 있지 않다면, map( ) 함수를 사용할 때 설정하는 콜백 함수의 두번째 파라미터인 index를 key 로 사용하면 된다. 

```html
<div>
  {users.map((user, index) => (
    <User user={user} key={index} />
  ))}
</div>
```



### Key는 왜 있는걸까?

```javascript
const array = ['a', 'b', 'c', 'd'];
```

예를 들어서 위와 같은 배열이 있을 때, 이 배열을 아래와 같이 렌더링 한다고 가정해보자. 

```javascript
array.map(item => <div>{item}</div>);
```



만약에 **key가 없다면**, 위 배열의 b와 c 사이에 z를 삽입하여 리렌더링이 될 때  `<div>b</div>` 와 `<div>c</div>` 사이에  `<div>z</div>`  태그를 삽입을 하게 되는 것이 아니라, **기존의 c 가 z 로바뀌고, d 는 c 로 바뀌고, 맨 마지막에 d 가 새로 삽입된다.**

하지만 객체에 고유한 값인 **Key가 있다면** 수정되지 않은 값은 그대로 두고 **원하는 곳에 내용을 삽입하거나 삭제하는 것이 가능**하다. 

