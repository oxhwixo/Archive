## useMemo

useMemo 는 컴포넌트의 성능을 최적화 시킬 수 있는 대표적인 react-hooks 중 하나로, Memo는 Memorization을 뜻한다. 메모리제이션이란 기존에 수행한 연산의 결괏값을 어딘가에 저장해두고 동일한 입력이 들어오면 재활용하는 프로그래밍 기법을 말한다. 

useMemo 에 대해서 알아보기 전에, 먼저 함수형 컴포넌트에 대해 알아야한다. 
함수형 컴포넌트는 **[ 렌더링 -> 컴포넌트 함수 호출 -> 모든 내부 변수 초기화]**의 순서를 거친다. 

~~~js
function Component() {
    const value = calculate();
    return <div>{value}</div> 
}

function calculate() {
    return 10;
}
~~~

Component가 렌더링 될 때마다 내부에 있는 value가 초기화 된다. 따라서 calculate 함수는 반복적으로 호출되는데 만약 이 함수가 무거운 연산을 하는 함수라면 굉장히 비효율적인 동작을 하는 것이다. 

useMemo를 사용하면 **[ 렌더링 -> 컴포넌트 함수 호출 -> 메모라이즈된 함수를 재사용]** 하는 동작 순서를 거치기 때문에 calculate 함수를 반복적으로 실행할 필요가 없어진다. useMemo는 처음에 계산된 결괏값을 메모리에 저장해서 컴포넌트가 반복적으로 렌더링 되어도 계속 calculate를 호출하지 않고 이전에 이미 계산된 결과 값을 메모리에서 꺼내와 재사용할 수 있게 한다. 

useMemo 는 첫번째 인자로 콜백 함수를, 두번째 인자로 의존성 배열을 받는다. 두번째 인자인 배열의 요소 값이 업데이트될 때만 다시 콜백 함수를 호출해서 메모리제이션 된 값을 업데이트 시키고 다시 메모리제이션 한다. 만약 빈 배열을 의존성 배열로 넘겨주면, 맨 처음 컴포넌트가 마운트 되었을 때만 값을 계산하고 이 후에는 항상 메모리제이션된 값을 꺼내와서 사용한다. (마치 상수+정적변수 같은 느낌?)



값을 재활용 하기 위해서 따로 메모리를 소비해서 값을 저장하는 행위이기 때문에, 불필요한 값을 모두 메모리제이션 해버리면 오히려 성능이 안좋아질 수 있기 때문에 필요할 때만 사용하도록 한다. 



### Object 를 메모이제이션 하는 예제

object는 객체 타입이라 일반 원시 타입과는 다르게 값이 저장될 때 주소 값으로 저장된다. 즉, 메모리 상의 주소가 다르게 저장되어 있는데, **렌더링될 때 마다** 주소값이 변하므로 **내부 값이 동일해도 useEffect가 실행되는 경우**가 있는데 이걸 useMemo로 해결할 수 있다. 

~~~js
const location = { country: isKorea ? '한국' : '일본' };

useEffect(() => {
    console.log('useEffect... 호출');
}, [location])
~~~

이걸 아래와 같이 수정!

~~~js
// const location = { country: isKorea ? '한국' : '일본' };
  const location = useMemo(() => {
    return {
      country: isKorea ? '한국' : '일본'
    }
  }, [isKorea])

  useEffect(() => {
    console.log('useEffect... 호출');
  }, [location])
~~~

이렇게 하면 실제로 location의 내부 값이 바뀌었을 때에만 useEffect가 호출된다. 

출처 : https://itprogramming119.tistory.com/entry/React-useMemo-%EC%82%AC%EC%9A%A9%EB%B2%95-%EB%B0%8F-%EC%98%88%EC%A0%9C