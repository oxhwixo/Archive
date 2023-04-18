## Immer 를 사용한 더 쉬운 불변성 관리

리액트에서 배열이나 객체를 업데이트 해야할 때, 직접 수정하면 안되고 불변성을 지켜주어야 하는데, 데이터 구조가 조금 까다로워지면 불변성을 지키면서 새로운 데이터를 생성하는 것이 복잡해질 수 있다. 

예를 들어서, 아래의 객체에 posts 배열 안의 아이디가 1인 post 객체를 찾아서 comments 에 새로운 댓글 객체를 추가한다고 가정했을 때, 

```javascript
const state = {
  posts: [
    {
      id: 1,
      title: '제목입니다.',
      body: '내용입니다.',
      comments: [
        {
          id: 1,
          text: '와 정말 잘 읽었습니다.'
        }
      ]
    },
    {
      id: 2,
      title: '제목입니다.',
      body: '내용입니다.',
      comments: [
        {
          id: 2,
          text: '또 다른 댓글 어쩌고 저쩌고'
        }
      ]
    }
  ],
  selectedId: 1
};
```

아래와 같이 추가를 해줘야 하는데, 한 눈에 알아보기가 쉽지 않다.

```javascript
const nextState = {
  ...state,
  posts: state.posts.map(post =>
    post.id === 1
      ? {
          ...post,
          comments: post.comments.concat({
            id: 3,
            text: '새로운 댓글'
          })
        }
      : post
  )
};
```

이럴 때, immer 라는 라이브러리를 사용하면 다음과 같이 구현을 할 수 있다.

```javascript
const nextState = produce(state, draft => {
  const post = draft.posts.find(post => post.id === 1);
  post.comments.push({
    id: 3,
    text: '와 정말 쉽다!'
  });
});
```

 Immer 를 사용하면 우리가 상태를 업데이트 할 때, 불변성을 신경쓰지 않으면서 업데이트를 해주면 Immer 가 불변성 관리를 대신해준다.



우선 프로젝트에서 다음 명령어를 실행하여 Immer 를 설치한다.

```bash
$ yarn add immer
```

이 라이브러리를 사용 할 땐  보통 `produce` 라는 이름으로 불러온다.

```javascript
import produce from 'immer';
```

그리고 `produce` 함수를 사용 할 때에는 첫번째 파라미터에는 수정하고 싶은 상태, 두번째 파라미터에는 어떻게 업데이트하고 싶을지 정의하는 함수를 넣어준다.

두번째 파라미터에 넣는 함수에서는 불변성에 대해서 신경쓰지 않고 업데이트를 진행하면 된다. 