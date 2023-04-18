## useEffect

컴포넌트가 렌더링 될 때, 특정 작업을 실행할 수 있도록 하는 hook이다. useEffect를 이용해서 컴포넌트가 마운트 됐을 때 (= 처음 나타났을 때), 언마운트 됐을 때 (= 사라질 때), 그리고 업데이트 될 때(= 특정 props가 바뀔 때)를 처리할 수 있다. 

- componentDidMount: 컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행

- componentDidUpdate: 리렌더링을 완료한 후 실행. 즉 render()가 업데이트될 때마다 실행

- compoenntWillUnMount: 컴포넌트를 DOM에서 제거할 때 실행

  
~~~js
useEffect(function, deps)
~~~

첫번째 인자에는 함수, 두번째 인자에는 배열이 들어간다. 



1. **Deps가 생략되었을 때**

   렌더링 될 때 마다 useEffect가 실행된다. 

2. **Deps가 빈 배열일 때**

   처음 렌더링 될 때 한 번만 실행된다.

3. **Deps에 특정 값을 넣었을 때** 
   ( == 컴포넌트가 업데이트 되었을 때 (props, state의 변경))
   특정 값이 업데이트 될 때만 실행하고 싶을 때는 deps 배열 안에 실행 조건을 넣어준다 (업데이트가 일어날 특정 값). 업데이트 뿐 만 아니라 마운트 되었을 때도 실행되므로, 업데이트 될 때만 실행시키고 싶다면 useRef를 이용해서 구현 가능하다. (useRef로 만들어진 객체는 리액트가 만든 전역 저장소에 저장되기 때문에 함수를 재 호출 하더라도 마지막으로 업데이트한 current 값이 유지된다.)

   ~~~js
     const mounted = useRef(false);
     useEffect(() => {
       if (!mounted.current) {
         mounted.current = true;
       } else {
         console.log(name);
         console.log("업데이트 될 때마다 실행");
       }
     }, [name]);
   ~~~

4. **useEffect 에 함수 반환 값이 있을 때**

   (== 컴포넌트가 언마운트 되었을 때 & 업데이트 되기 직전에)

   useEffect는 함수를 반환할 수 있는데 이 함수를 cleanup 이라고 한다. 

   * 언마운트 될 때만 클린업 함수를 실행시키고 싶다면 deps 에 빈 배열을 넣는다.

   * 특정 값이 업데이트 되기 직전에 클린업 함수를 실행시키고 싶다면 deps에 해당 값을 넣는다. 
   
     
   
    만약에 상태 관리 되고 있는 변수 A가 deps에 들어가있을 때, A 값이 변하면 useEffect는 마운트 될 때의 코드(초기상태) , 클린업(상태값 변함) , 다시 마운트 될 때의 코드(렌더링 다시됨) 이런 식으로 동작한다.