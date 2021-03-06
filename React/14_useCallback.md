## useCallback

useCallback은 useMemo와 비슷하지만, useMemo는 특정 결과 값을 재사용할 때 사용하는 반면, useCallback은 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용한다. 컴포넌트 내부에 선언하는 함수들은 컴포넌트가 리렌더링 될 때 마다 새로 만들어진다. 함수를 선언하는 것 자체는 메모리나 cpu 의 리소스를 많이 차지하는 작업은 아니지만, 한번 만든 함수를 필요할 때만 만들고 재사용하는 것은 중요한 일이다. 왜냐하면 **컴포넌트에서 Props가 바뀌지 않으면 Virtual DOM에 새로 렌더링을 하지 않도록 컴포넌트의 결과물을 재사용 하는 최적화**를 진행할 때, **함수 재활용이 필수**이기 때문이다. 

useEffect, useMemo처럼 첫번째 인자로 콜백함수가, 두번째 인자로 의존성 배열인 deps가 들어간다. 함수 안에서 사용하는 상태, 혹은 props 가 있다면 꼭 deps 배열 안에 포함시킨다.

