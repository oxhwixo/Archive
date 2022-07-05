## react-hook-form 사용해서 버튼형 form/input 구현하기



### react-hook-form 기본 사용법

#### Register

```javascript
import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

export default function App() {
  const { register } = useForm();
  // const { register, watch } = useForm();
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="username" {...register("username")} />
        <input type="submit" />
      </form>
    </div>
  );
}
```

* {...register("username")} : username 부분에 사용하고 싶은 이름을 넣어주면 나중에 이 이름으로 값을 불러올 수 있다. 
* Input 에 입력하는 값을 실시간으로 확인하기 위해서는 watch 함수를 사용한다. 



#### handleSubmit 

handleSubmit은 Submit을 관리하기 위한 함수이다. 

```javascript
import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="username" {...register("username")} />
        <input type="submit" />
      </form>
    </div>
  );
}
```

* handleSubmit은 함수를 인자로 받고, 받아온 함수의 인자로 data를 넘겨준다. data에는 사용자가 최종적으로 입력한 값이 들어있다.



#### onError 

handleSubmit은 두가지 인자를 받는다. 하나는 정상적으로 submit이 되었을 때 실행하는 onSubmit 함수이고 두번째는 Form에서 에러가 발생했을 때 실행되는 onError함수이다. 

```javascript
import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };
  const onError = (errors) => {
    console.log(errors.username);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <input
          type="text"
          placeholder="username"
          {...register("username", {
            minLength: {
              value: 5,
              message: "Username must be longer than 5 characters"
            }
          })}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
```

* 입력 조건과 조건에 맞지 않았을 때의 메시지를 설정할 수 있다. 
* HTML에서 입력란 검증을 위해 기본적으로 제공되는 `required`, `pattern`, `minLength`와 같은 검증 타입을 사용할 수 있다.
*  `formState` 속성의 `errors` 객체에 오류 내용이 저장된다. 



#### 실시간 유효성 검사 

실시간 유효성 검사를 위해 useForm의 모드를 바꿔주고 errors 객체를 가져와서 실시간으로 확인할 수 있다. 

```javascript
useForm({ mode: "onChange" });
```

```javascript
import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const onError = (error) => {
    console.log(error);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <input
          type="text"
          placeholder="username"
          {...register("username", {
            minLength: {
              value: 5,
              message: "Username must be longer than 5 characters"
            }
          })}
        />
        <input type="submit" />
      </form>
      {erros && <h1>{error?.username?.message}</h1>}
    </div>
  );
}
```

다음과 같이 코드를 짜면 유효성 검사를 통과하지 못할때마다 에러 메세지가 나타난다.



#### 중복 제출 방지

사용자가 이벤트 처리가 미처 종료되기 전에 다시 제출 버튼을 클릭할 경우 양식이 중복해서 제출되는 문제가 발생할 수 있다. 따라서 사용자가 버튼을 클릭하자 마자 해당 버튼을 비활성화 시켰다가, 이벤트 처리가 완료되었을 때, 제출 버튼을 다시 활성화 시키는 것이 안전하다. 

```jsx
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
```

 useForm() 훅이 반환하는 객체에 formState: { isSubmitting } 를 추가하고 제출 버튼에는 disabled={isSubmitting} 을 추가한다.  formState 속성은 양식이 현재 어떤 상태인지를 담고 있다. 



#### 스크린 리더 사용자를 위한 속성

스크린 리더(screen reader) 사용자를 위해서 각 입력란에 `aria-invalid` 속성을 사용하고, 에러 메세지를 표시해주는 영역에는 `role="alert"` 을 사용할 수 있다. 



#### form으로 만들어진 컴포넌트를 다른 form 컴포넌트에서 사용하기

컴포넌트를 사용할 부모 컴포넌트에서`<FormProvider>` 를 추가하고 useForm 의 반환값인 methods 를 넣어준다. 그리고 그 사이에 사용할 컴포넌트들을 넣어주면 된다. 

~~~js
<FormProvider {...methods}>
</FormProvider>
~~~

사이에 사용되는 자식 컴포넌트들은 useForm훅이 아닌, useFormContext 훅을 사용해서 객체를 생성해준다. 

~~~js
export const NestedInputContainer = ({ children }) => {
  const methods = useFormContext();

  return <NestedInput {...methods} />;
};
~~~


#### 사용자 입력이 하나라도 있는지 확인하는 법

`formState` 안의 `isDirty` 또는 `dirtyFields` 속성을 활용해서 확인할 수 있다. 유저가 form의 모든 필드에서 입력을 하나라도 했으면 뒤로가기같은 이탈 상황에서, 정말 이탈할 것인지 확인 창을 띄울 때 사용 가능하다. 

isDirty 는 사용자 입력이 남아있을 때, true 값으로 설정된다. dirtyFields는 사용자 입력이 있는 필드를 보여주는 객체이다. 

사용자가 입력을 한 번 했다가 다시 default 입력값으로 바꿔두었을 때, isDirty가 false 로 바뀌기 위해서는 `setValue` 함수를 써서 필드의 값을 변경하면서 `shouldDirty` option을 true로 설정해야한다. 그렇지 않으면 `updateTouchAndDirty`함수가 실행되지 않고 따라서 `isDirty`를 다시 계산하지 않는다.





### 여러개 버튼으로 이루어진 input을 react-hook-form으로 관리하기



### 자료 출처

https://zlrlo.github.io/react-hook-form/

https://www.daleseo.com/react-testing-library/

http://blog.hwahae.co.kr/all/tech/tech-tech/9249/

