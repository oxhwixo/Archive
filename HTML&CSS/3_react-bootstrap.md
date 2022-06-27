## react-bootstrap 사용하기



### 1. 설치하기

npm 혹은 yarn 을 이용해서 설치하는 것이 제일 좋은 방법이다. 

```bash
npm install react-bootstrap bootstrap
```

그런데 만약 부트스트랩 Sass 파일을 수정할 예정이거나, 스타일시트에 CDN을 사용하지 않고 싶다면 react-bootstrap이 아니라  vanilla Bootstrap을 설치하는 것이 더 나을 수 있다고 한다. 

<details>
<summary>react-bootstrap에서 수정하고싶다면?</summary>
<div markdown="1">
일단 맨 아래에 보면 커스터마이징 부분이 있는데 참고해보고, 컴포넌트 개별적으로 수정을 하고싶을 때, 공식 문서에 의하면 bsPrefix="custom-class" 속성을 이용해서 가능하다는데 모든 컴포넌트에 적용 가능한 것은 아니라고 하니 추 후에 알아보기로 하자..
(https://stackoverflow.com/questions/40738484/how-to-customise-react-bootstrap-components)
</div>
</details>



### 2. 컴포넌트 가져오기

전체 컴포넌트를  import 하지 않고 사용할 컴포넌트만 개별적으로 가져와야 한다.

```react
import Button from 'react-bootstrap/Button';
// or 
import { Button } from 'source/_posts/style/react-bootstrap';
```



### 3. Stylesheets 설정

index.js나 App.js에서 css 파일을 추가한다.

```react
import 'bootstrap/dist/css/bootstrap.min.css';
```



만약에 Sass를 사용중이라면 main Sass 파일에 bootstrap의 Sass 파일을 추가하면 된다. 

```scss
@import "~bootstrap/scss/bootstrap";
```



### 4. 커스터마이징

커스텀 Sass 파일을 만들어서 부트스트랩 테마를 수정하거나 요소들을 수정할 수 있다. 커스터마이징 가능한 변수들 이름은 [여기서](https://create-react-app.dev/docs/adding-bootstrap/#using-a-custom-theme ) 확인할  수 있다.

```scss
$theme-colors: (
    "info": tomato,
    "danger": teal
);

/* import bootstrap to set changes */
@import "~bootstrap/scss/bootstrap";
```

위 코드를 custom.scss에 추가하고 난 후에 main Sass 파일에 `@import "custom";` 를 추가한다.



### 5. StyledComponent에서 커스터마이징

`const StyledWrapper = styled.div`` ` 를

`StyledWrapper = styled(컴포넌트이름)`` ` 로 수정해서 css 수정 가능

