## Zustand 사용하기

### 상태관리 라이브러리를 사용하는 이유

> [출처: 상태관리 라이브러리에 대하여](https://chanhuiseok.github.io/posts/react-15/)

컴포넌트에서 사용하는 상태가 변경되면, 컴포넌트는 리렌더링 되면서 변한 값을 표시한다. ㄷ부분 이 상태를 다른 자식 컴포넌트에도 적용하기 위해 전달하려는 경우가 생기는데, 이 때는 props로 이 값을 전달한다. 하지만, 자식 컴포넌트는 부모로 부터 전달받은 상태를 직접 변경할 방법이 없다.

만약, 자식 컴포넌트가 부모 컴포넌트로 부터 받은 상태 값을 변경하고 싶다면, 부모로부터 setter를 전달받아야한다. 그런데 컴포넌트 갯수가 점점 많아지고 공유해야하는 상태가 늘어난다면, 상태값을 전달하고 setter까지 전달하기 위해 부모 - 자식으로 이어지는 전달 과정을 매번 작성해야하는 비효율적인 상황이 발생한다. 이 깊이가 깊어지면 깊어질 수록 더욱 그런 상황에 직면한다. (과도한 prop drilling)

프로젝트가 커져서 컴포넌트 개수가 많아지고, 서로 공유하는 상태 값들이 많아진다면, 상태가 어디서 어떻게 변하는지 쉽게 파악하기 어려워진다.

그래서 대다수 상태관리 라이브러리들은 **전역 상태를 관리**할 수 있게 해준다. Redux를 예로 들면, store라는 상태 저장 공간을 만들어서 여러 컴포넌트가 하나의 store을 참고하도록 한다.

결론적으로 여러 컴포넌트들 간에 상태 의존성이 높아지는 경우에 상태관리 라이브러리의 사용을 고려하게 된다.

### Zustand 는 무엇인가?

> [출처: 차세대 상태관리 라이브러리, Jotai VS Zustand ⭐ (Feat. Recoil)](https://programming119.tistory.com/263)
>
> [출처: React 상태 관리 라이브러리 Zustand의 코드를 파헤쳐보자](https://ui.toast.com/weekly-pick/ko_20210812)

Zustand는 독일어로 '상태' 라는 뜻을 가지고있으며, 단순화 된 flux 원칙을 사용하는 작고, 빠르고, 확장 가능한 상태 관리 솔루션이다. Redux 처럼 Store 형태이면서 간단하게 상태관리 구성이 가능하다.

flux 원칙이란, 페이스북이 클라이언트 사이드 웹 어플리케이션을 구성하는데 사용하는 어플리케이션 아키텍처이다. 단방향 데이터 흐름을 활용해서 React의 컴포넌트 뷰를 보완한다. 자세한 내용은 [이 페이지](https://facebook.github.io/flux/docs/in-depth-overview/)에서 확인할 수 있고, 다음에 번역을 한 번 해봐야겠다.

공식 문서는 [여기서](https://github.com/pmndrs/zustand/blob/main/readme.md) 확인 가능하다.

### 사용법

#### store 생성 : create

```js
import create from "zustand";

const useStore = create((set) => ({
  bears: 0,
  fishies: {},
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  fetch: async (pond) => {
    const response = await fetch(pond);
    set({ fishies: await response.json() });
  },
}));
```

- 객체 안에 state로 사용할 키와 값을 담아주고, create 함수로 묶어준다.
- 액션 또한 store의 키 값 형태로 담기며, sync action도 포함 가능하다.

#### 사용하기 : create로 만든 객체를 통해

```Js
function BearCounter() {
  const bears = useStore(state => state.bears)
  return <h1>{bears} around here ...</h1>
}

function Controls() {
  const increasePopulation = useStore(state => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}
```

- useStore 훅을 사용할 때, store에서 상태를 어떤 형태로 꺼내올지 결정하는 셀렉터 함수를 전달해야하는데, 만약 셀렉터 함수를 전달하지 않는다면 store 전체가 return 된다.

#### 액션 내부에서 다른 상태 참조

```js
const useStore = create((set, get) => ({
  sound: "grunt",
  action: () => {
    const sound = get().sound
    // ...
  }
})
```

#### 상태 구독 가능

```js
import { subscribeWithSelector } from "zustand/middleware";
const useStore = create(
  subscribeWithSelector(() => ({ paw: true, snout: true, fur: true }))
);

// Listening to selected changes, in this case when "paw" changes
const unsub2 = useStore.subscribe((state) => state.paw, console.log);
// Subscribe also exposes the previous value
const unsub3 = useStore.subscribe(
  (state) => state.paw,
  (paw, previousPaw) => console.log(paw, previousPaw)
);
// Subscribe also supports an optional equality function
const unsub4 = useStore.subscribe(
  (state) => [state.paw, state.fur],
  console.log,
  { equalityFn: shallow }
);
// Subscribe and fire immediately
const unsub5 = useStore.subscribe((state) => state.paw, console.log, {
  fireImmediately: true,
});
```

구독 기능에 대해선 다시 알아보도록 하자.

## 코드에 적용하기

### 추가로 알아야 하는 것들

#### Context

Context를 이용하면 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공할 수 있다. context는 React 컴포넌트 트리 안에서 전역적(global)이라고 볼 수 있는 데이터를 공유할 수 있도록 고안된 방법이다. 전역적인 데이터로는 현재 로그인한 유저, 테마, 선호하는 언어 등이 있다.

#### zustand에 context 추가하기

create로 store을 만들 때, context provider는 필요하지 않다. 하지만 종속성 주입 또는 컴포넌트의 props로 store 을 초기화 하고 싶을 때 context 를 필요로 할 수도 있다. Store 은 훅이기 때문에 일반적인 context 값을 사용하는건 불가능하며 zustand 에서 따로 context 를 사용할 수 있도록 제공한다.

방법은 두가지가 있는데 공식문서에서 추천하는 방법은 vanilla store 을 사용하는 것이다.

```js
import { createContext, useContext } from 'react'
import { createStore, useStore } from 'zustand'

const store = createStore(...) // vanilla store without hooks

const StoreContext = createContext()

const App = () => (
  <StoreContext.Provider value={store}>
    ...
  </StoreContext.Provider>
)

const Component = () => {
  const store = useContext(StoreContext)
  const slice = useStore(store, selector)
  ...
}
```

대안으로는 V3.5 에서 추가된 특별한 createContext 를 사용하는 방법이 있다.

```js
import create from 'zustand'
import createContext from 'zustand/context'

const { Provider, useStore } = createContext()

const createStore = () => create(...)

const App = () => (
  <Provider createStore={createStore}>
    ...
  </Provider>
)

const Component = () => {
  const state = useStore()
  const slice = useStore(selector)
  ...
}
```
