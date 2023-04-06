## CSS

### 계단식, 상속

CSS 는 **Cascading Style Sheets** 의 약자이며, CSS 라는 단어를 이해하는 데 있어 첫 번째 단어 *cascading* 은 매우 중요하다. Casecade란 간단한 수준에서 CSS 규칙 순서가 중요하다는 것을 의미한다. 동일한 우선 순위를 가진 두 규칙이 적용될 때, 마지막으로 나오는 규칙이 사용된다. 

우선 순위는 선택자의 선택이 얼마나 구체적인지에 따라 정해진다. 아래에 우선 순위 점수 기준 있음.

부모 요소에서 설정된 일부 CSS 속성 값은 자식 요소에게 상속된다.

* inherit : 선택한 요소에 적용된 속성 값을 부모 요소의 속성 값과 동일하게 설정
* initial : 선택한 요소에 적용된 속성 값을 기본 스타일 시트 값과 동일하게 설정
* unset : 선택한 요소에 적용된 속성 값을 자연적인 상태 값으로 재설정. 만약 속성이 자연적으로 상속되면 inherit, 그렇지 않으면 initial 처럼 작동 

### 기본 구조

~~~css
div[선택자]{
  
  속성: 값;
  
  font-size: 50px;
  color: blue;
  text-decoration: underline;
}
~~~

* 선택자 : 스타일을 적용할 대상
* 속성 : 스타일의 종류 (property)
* 값 : 스타일의 값 (value)



### CSS 선언 방식

css 선언 방식은 4개로 나누어진다. 각각 장점과 단점이 있으니 필요에 맞게 사용한다. 

* #### 내장 방식

  \<style>태그를 이용. html의 \<head>에 스타일태그 공간을 만들어서 CSS 스타일을 작성. 

  ~~~html
  <style>
  	div {
  		color: red;
  	}
  </style>
  ~~~

  단, 앞으로 CSS, HTMl, JS를 나눠서 파일을 관리하는 것이 일반적이므로 내장 방식을 이용하는 경우는 거의 없다.

* #### 인라인 방식

  태그에 속성으로 스타일 속성을 이용해서 직접 스타일을 작성하는 방식. 선택자를 사용하지 않는다. 

  ~~~html
  <div style="color: red;"></div>
  ~~~

  단, CSS 우선순위에서 가장 높은 우선순위를 가지기 때문에 이를 덮어써서 수정하는 것이 불가능하여 유지 보수에 악영향을 준다. 따라서 권장하지 않는다.

* #### 링크 방식

  ~~~html
  <link rel="stylesheet" href="./main.css">
  ~~~

  병렬 연결 방식.

* #### @import 방식

  CSS 문서 안에서 또 다른 CSS 문서를 가져와 연결하는 방식.

  ~~~css
  @import url("./box.css");
  ~~~

  직렬 연결 방식. 이 방식은 import를 호출하는 css파일의 크기가 클 때 box.css의 연결이 지연될 수 있다. 이것을 의도적으로 이용하는 경우가 많지는 않지만 그런 상황에서 유용하게 사용 가능하다. 

  그런 경우가 아니라면 그냥 링크로 병렬 연결을 할 것 ! 

  

### CSS 선택자

* #### 기본 선택자

  * #### 전체 선택자

    ~~~css
    * {
    color: red;
    }
    ~~~

    모든 요소를 선택한다.

  * #### 태그 선택자

    ~~~css
    li {
     color: red;
    }
    ~~~

     태그의 이름으로 요소를 선택한다.

    

  * #### 클래스 선택자

    ~~~css
      .orange {
      	color: red;
      }
    ~~~

    class 속성의 값으로 요소를 선택한다. 

    

  * #### 아이디 선택자

    ~~~css
      #orange {
      	color: red;
      }
    ~~~

    id 속성의 값으로 요소를 선택한다.

    

* #### 복합 선택자

  * #### 일치 선택자

    ~~~css
    span.orange {
    	color: red;
    }
    ~~~

     ABCXYZ : 선택자 두개를 연달아 붙임
    기본 선택자 4개 중 2개의 조합을 동시에 만족하는 요소를 선택.

    태그 선택자는 항상 맨 앞에 써줄 것!

    

  * #### 자식 선택자

    ~~~css
    ul > .orange {
    	color: red;
    }
    ~~~

    ABC > XYZ : 선택자 ABC의 자식 요소 XYZ 선택.

    

  * #### 하위(후손) 선택자

    ~~~css
    div .orange {
    	color: red;
    }
    ~~~

    ABC XYZ : 선택자 ABC의 하위 요소 XYZ 선택. 
    띄어쓰기가 선택자의 기호임! 띄어쓰기 주의! 

    

  * #### 인접 형제 선택자

    ~~~css
     .orange + li {
     	color: red;
     }
    ~~~

    ABC + XYZ : 선택자 ABC의 다음 형제 요소 XYZ **하나**를 선택. 
    ABC를 기준으로 위는 이전 형제, 아래는 다음 형제. 

    

  * #### 일반 형제 선택자

    ~~~css
    .orange ~ li {
    	color: red;
    }
    ~~~

    ABC ~ XYZ : 선택자 ABC의 다음 형제 요소 XYZ 모두를 선택.

  

* ### 가상 클래스 생성자

  * #### hover

    ~~~ css
    .box {
      width: 100px;
      height: 100px;
      background-color: orange;
      transition: 1s; --> 장면 변환 효과!!!!!!짱신기함!!!!
    }
    
    .box:hover { --> 가상클래스
    width: 300px;
    }
    ~~~

    ABC:hover  : 선택자 ABC 요소에 마우스 커서가 올라가 있는 동안을 선택.

  * #### active

    ~~~ css
    a:active { 
      color: red;
    }
    ~~~

    ABC:active  : 선택자 ABC 요소에 마우스를 클릭하고 있는 동안 선택.

  * #### focus

    ~~~ css
    input:focus { 
      background-color: red;
    }
    ~~~

    ABC:focus  : 선택자 ABC 요소가 포커스되면 선택.

    Focus가 될 수 있는 요소는 HTML 대화형 콘텐츠가 해당된다. INPUT, A, BUTTON, LABEL, SELECT등 여러 요소가 있다. 또한 HTML 대화형 콘텐츠 요소가 아니더라도, tabindex 속성을 사용한 요소는 Focus가 될 수 있다. 

    * tapindex="-1" 속성 추가하면 됨.
    * MDN에 HTML 대화형 콘텐츠 검색해 볼 것.

  

  > 위의 세개는 CSS에서 동작과 관련된 처리를 하는 특이한 경우의 선택자였고 아래 부터는 동작과 관련되지 않은 가상 클래스들임.

  

    * #### First child 

      ~~~ css
      .fruits span:first-child { --> 띄어쓰기는 하위 선택자!!!
        color: red;
      }
      ~~~

      ABC:first-child  : 선택자 ABC가 형제 요소중 첫째라면 선택.

      **ABC가 첫째여야만 함. 첫째가 아니면 선택되지 않는다.**

  

    * #### Last child 

      ~~~ css
      .fruits span:last-child { --> 띄어쓰기는 하위 선택자!!!
        color: red;
      }
      ~~~

      ABC:last-child  : 선택자 ABC가 형제 요소중 막내라면 선택.

      **ABC가 막내여야만 함. 막내가 아니라면 선택되지 않는다.**

      

    * #### nth child 

      ~~~ css
      .fruits *:nth-child(2) { --> 띄어쓰기는 하위 선택자!!!
        color: red;
      }
      ~~~

      ABC:nth-child(n)  : 선택자 ABC가 형제 요소중 n째라면 선택.

      **ABC가 n째여야만 함. n째가 아니면 선택되지 않는다.**

      상수 뿐만 아니라 n도 자체 사용 가능한데, 예를들어서 nth-child(2n) 이라면 2의 배수에 해당하는 순서의 요소들을 선택할 수 있다. n은 0부터 시작한다. 

  

    * #### Not

      ~~~ css
      .fruits *:not(span) { --> 띄어쓰기는 하위 선택자!!!
        color: red;
      }
      ~~~

      ABC:not(XYZ)  : 선택자 XYZ가 아닌 ABC 요소 선택

  

* #### 가상 요소 선택자 (인라인요소)

  가상의 인라인 요소를 만들어서 삽입하는 선택자.

  * #### before 

    ~~~css
    .box::before {
    	content: "앞!";
    }
    ~~~

    ABC::before : 선택자 ABC 요소의 내부 맨 앞에 content를 삽입.

    

  * #### After

    ~~~css
    .box::after {
    	content: "뒤!";
      display: block; --> 인라인 요소를 강제로 블럭 요소로 전환
    }
    ~~~

    ABC::after: 선택자 ABC 요소의 내부 맨 뒤에 content를 삽입.

     before와 after을 사용할 때 **content 속성은 무조건 들어가야함. **
    값을 "" 와 같이 비워두더라도 꼭 같이 묶여있어야 한다. 

  

* #### 속성 선택자

  * #### ATTR

    ~~~css
    [disabled] {
    	color: red;
    }
    ~~~

    [ABC] : 속성 ABC를 포함한 요소 선택.

    

  * #### ATTR = Value

    ~~~css
    [type="password"] {
    	color: red;
    }
    ~~~

    [ABC="XYZ"] : 속성 ABC를 포함하고 값이 XYZ인 요소 선택.



### 스타일 상속

상속이란? 어떤 요소에 CSS 속성을 지정했을 때 그 요소의 하위 요소들에도 해당 CSS 속성이 적용되는 것.

상속 되는 CSS 속성들은 모두 글자/문자와 관련된 속성들이다. 모든 글자/문자 속성이 아님에 주의.

#### [ 강제 상속 ]

일반적인 룰으로는 상속되지 않는 속성을 강제로 상속시키는 것.

~~~css
.parent {
	width: 300px;
	height: 400px;
	backgroun-color: red;
}

.child {
	width: 300px;
	height: inherit; --> 강제 상속! 부모요소의 height를 물려받음
	backgroun-color: inherit; --> 강제 상속
}
~~~





### 선택자 우선순위

우선순위란, 같은 요소가 여러 선언의 대상이 된 경우, 어떤 선언의 CSS 속성을 우선 적용할 지 결정하는 방법.

1. 점수가 높은 선언이 우선됨
2. 점수가 같으면, 가장 마지막에 해석된 선언이 우선됨



* 인라인 선언 : 1000점

* 전체 선택자 : 0점 

* 상속 : 0점

* 태그 선택자 : 1점

* class 선택자 : 10점

* ID 선택자 : 100점

* !important : 9999999999999점

  \+ 가상 요소 선택자도 태그 선택자 처럼 1점!!

  \+ not에는 점수를 주지 않음



이렇게 CSS의 우선순위를 점수로 구하는 방법을 명시도 라고 칭함..
!important 키워드를 사용하는 것은 중요도 라고 칭함
해석된 순서에 의한 방법은 선언 순서 라고 칭함 

인라인 선언이나 important 키워드는 되도록 지양할 것 !!!! 



## CH8 : CSS 속성

Html의 속성은 attributes, CSS와 JS에서는 Properties.

### CSS를 통해서 구현할 수 있는 개념들

* #### 박스모델

* #### 글꼴, 문자

* #### 배경

* #### 배치

* #### 플렉스 (정렬)

* #### 전환 효과

* #### 변환 효과

* #### 플로트 (띄움)

* #### 애니메이션

* #### 그리드

* #### 다단

* #### 필터

---

### 박스모델

####  블록 박스 

* 상위 컨테이너 너비만큼 박스가 사용 가능한 공간을 100% 채운다. 
* 새 줄로 행갈이를 한다.
* width, height 속성이 적용된다.
* 패딩, 여백, 테두리로 인해 다른 요소들이 박스로부터 밀려난다.
* \<div>, \<p> 등



#### 인라인 박스

* 새 줄로 행갈이 하지 않는다.
* width, height 속성이 적용되지 않는다.
* 인라인 박스에 여백, 패딩, 테두리를 적용할 수 있지만 다른 요소들의 여백, 패딩에 반응 하지 않는다. (겹침 현상 발생)
*  \<a>, \<span>, \<em> 및 \<strong> 요소



#### 인라인 블록 박스

* 새 줄로 행갈이를 하지 않는다.

* width, height 속성이 적용된다.
* 패딩, 여백, 테두리로 인해 다른 요소들이 박스로부터 밀려난다. (겹침 현상을 피할 수 있다.)



#### width, height : 요소의 가로/세로 너비

* auto (기본값) : 브라우저가 자동으로 너비를 계산
* px, em, vw 등 단위로 지정

#### max-width, max-height : 요소가 커질 수 있는 최대 가로/세로 너비

기본값은 none ! 최대 너비 제한이 없음

#### min-width, min-height : 요소가 작아질 수 있는 최소 가로/세로 너비

기본값은 0 ! 최소 너비 제한이 없음



---



### CSS 단위

* px : 픽셀 

  화면에 표현할 수 있는 하나의 점.

* % : 상대적 백분율

* em : 요소의 글꼴 크기 

* rem : 최상위 루트 요소(html)의 글꼴 크기

  기본적으로 html 태그 안에서 fontsize를 지정하지 않으면 16px = 1rem

* vw : 뷰포트 가로 너비의 백분율

* vh : 뷰포트 세로 너비의 백분율



---



### 외부 여백 : margin

#### margin

1. margin : 요소의 외부 여백(공간)을 지정하는 단축 속성

* 기본값 = 0 : 외부 여백 없음
* auto : 브라우저가 여백을 계산. 가로(세로) 너비가 있는 요소의 가운데 정렬에 활용한다.
* 단위 : px, em 등
* 음수 사용 가능. 음수를 사용하면 여백이 줄어들며 요소들이 겹쳐진다.



2. 크기를 설정하는 규칙

* [  margin-top, margin-bottom, margin-left, margin-right  ]

* margin: 10px; --> 모든 방향에 10px 초기화

* margin: 10px 20px; --> 값이 2개면 앞의 값은 top,bottom 뒤의 값은 left, right

* margin: 10px 20px 30px; --> top, left-right, bottom

* margin: 10px 20px 30px 40px; --> top, right, bottom, left



---



### 내부 여백 : padding

1. padding : 요소의 내부 여백을 지정하는 단축 속성 

  * 기본값 = 0 : 내부 여백 없음
  * 단위 : px, em 등
  * % : 부모 요소의 가로 너비에 대한 비율로 지정
  * 패딩은 요소의 내부 여백이기 때문에 요소 자체의 크기가 커지게 만든다.



2. 크기를 설정하는 규칙
   * margin과 같음

---



### 테두리 선 : border

#### border : 요소의 테두리 선을 지정하는 단축 속성

선-두께 선-종류 선-색상 : border-width , border-style, border-color

--> 순서는 이렇게 사용하는 것이 관습적임

~~~css
border : 10px solid orange;
~~~

패딩처럼 요소 자체의 크기가 커지게 한다.

border-width도 마진, 패딩처럼 상 우 하 좌 네가지 크기 지정 가능

상 하 좌 우에 대쉬를 붙여서 두께 종류 색상을 다 따로 지정 가능. 

- [`border-top-width`](https://developer.mozilla.org/ko/docs/Web/CSS/border-top-width): `medium`
- [`border-right-width`](https://developer.mozilla.org/ko/docs/Web/CSS/border-right-width): `medium`
- [`border-bottom-width`](https://developer.mozilla.org/ko/docs/Web/CSS/border-bottom-width): `medium`
- [`border-left-width`](https://developer.mozilla.org/ko/docs/Web/CSS/border-left-width): `medium`



* solid : 실선
* dashed : 파선
* 그 외 나머지 많지만 잘 안쓰임



* Transparent : 투명색



---



### 색상 표현

* 색상 이름 : 브라우저에서 제공하는 색상 이름 -  red, tomato, orange ...
* Hex 색상코드 : 16진수 색상 - #000 #FFFFFF
* RGB : 빛의 삼원색 - rgb(255, 255, 255)
* RGBA : 빛의 삼원색 + 투명도 - rgba(0, 0, 0, 0.5)



---



### border-radius : 모서리를 둥글게 하는 속성.

border-radius: 10px;

이것도 왼쪽위 , 오른쪽 위, 오른쪽 아래, 왼쪽 아래 네개의 모서리 조정 가능. 



---



### box-sizing : 요소의 크기 계산 기준을 지정

* 기본 : content-box : 요소의 내용으로 크기 계산
* border-box : 요소의 내용 + padding + border로 크기 계산



기본적으로 width와 height를 설정 한 후, border와 padding을 주고 개발자 도구에서 해당 요소의 크기를 확인하면 boder크기와 padding 크기가 더해져 요소의 크기가 계산된다. 

여기서 **처음에 설정한 width,height를 유지**하기 위해 각각의 값을 padding, margin값을 빼서 고쳐줄 수도 있지만 box-sizing: border-box를 이용해서 간단하게 고칠 수 있다. 

내가 원하는 가로, 세로사이즈에 맞게 자동으로 그 내부에 패딩과 마진을 넣을 수 있다. 



---



### overflow : 요소의 크기 이상으로 내용이 넘쳤을 때, 보여짐을 제어하는 단축 속성

* 기본 : visible : 넘친 내용을 그대로 보여줌
* Hidden : 넘친 내용을 잘라냄
* scroll : 넘치거나 안넘치거나 상관 없이 스크롤바 생성 (강제로 세로, 가로 둘다 생성)
* auto : 넘친 내용이 있는 경우에만 잘라내고 스크롤바 생성

부모 요소에서 자식 요소에 대한 설정을 지정. 



* overflow-x 
* overflow-y 

개별 속성으로도 제어 가능함. 



---



### display

* block, inline, inline-block 들은 이미  display 특성이 지정되어있음.
* flex, grid, none은 display를 따로 지정해서 사용함



----



### opacity

* 1 : 불투명
* 0 : 투명
* 0~1 : 반투명



---



### 글꼴

* font-size : (ex)10px;

  글자 크기 설정. 기본은 16px

* font-weight :(ex)700;

  글자의 두께 설정. 기본은 400, bold는 700. 100~900까지 지정가능

  * 100 - lighter
  * 400 - normal
  * 700 - bold
  * 900 - bolder

* font-style : (ex)italic;

  글꼴의 스타일 설정. 주로 이탤릭체를 설정하기 위해서 사용

* font-family : (ex)sans-serif;

  사용할 글꼴 후보들과, 마지막에 필수로 글꼴 계열 입력 (serif등)

  후보란? 여러개의 후보중 가장 맨 처음 나온 글꼴 후보를 사용하려고 브라우저가 시도했을 때, 글꼴 사용이 불가능하면 다음 후보 사용. 

  모든 후보가 사용 불가능하면 마지막에 명시해놓은 글꼴 후보를 이용.

  띄어쓰기나 특수문자가 들어가는 경우에는 ""쌍따옴표로 묶어서 표기.

  * 글꼴 후보
    * Serif : 바탕체 계열
    * Sans-serf : 고딕체 계열
    * Monospace : 고정너비 글꼴 계열
    * Cursive : 필기체
    * Fantasy : 장식체

* lien-height : (ex)1.4;

  한 줄의 높이. 행간과 유사함. 요소의 글꼴 크기의 배수로 지정한다. ex) 글자 크기의 1.4배

* color:  (ex)rgb(0,0,0) 

  글자의 색상을 설정

* text-align : left, right, center

  글자 정렬

* text-decoration : none, underline, line-through

  문자를 선으로 장식

* text-indent: (ex)50

  들여쓰기. 음수 넣으면 내어쓰기



---



### 배경

* backgroud-color: orange;

  기본은 transparent 투명!

* background-image: url("경로");

* background-size: 200px; 

  만약에 div 공간보다 백그라운드 이미지 크기가 클 때, 백그라운드 사이즈를 div 사이즈와 똑같이 맞춰주면 백그라운드 이미지를 온전하게 삽입 가능함.

  만약에 백그라운드 사이즈를 div 사이즈보다 작게하면 이미지가 반복적으로 들어감

  * cover :  비율을 유지하면서 요소의 더 넓은 너비에 맞춰짐.

    만약 div 사이즈가 500,200 이고 백그라운드이미지가 500:500이면 div의 가로 세로중 더 넓은 크기인 500에 맞춰서 백그라운드 이미지가 삽입되며 백그라운드 이미지의 세로 300이 잘림.

  * contain : cover의 반대로 요소의 더 짧은 너비에 맞춰짐.

    위의 예시에서 가로사이즈 200에 맞춰서 백그라운드 이미지의 비율이 조정됨

* backround-repeat: no-repeat; 

  백그라운드 이미지가 반복해서 들어가는 것을 한번만 들어가게 만들 수 있음

  repeat-x : 수평반복

  repeat-y : 수직반복

* background-position: center;

  정렬

  0% 0%로 X, Y값 설정 가능함. x----->

  ​											y|

  ​											  |

  X px, Y px도 가능

* background-attachment : 요소의 배경 이미지 스크롤 속성

  * scroll: 이미지가 요소를 따라서 같이 스크롤 (기본)

  * fixed: 이미지가 **뷰포트에 고정**됨. 스크롤 X

    화며에 배경 이미지가 고정되는 것 !!! 



---



### 배치

포지션은 요소의 위치를 직접 지정하는 것이 아니라 그 지정을 위한 기준을 제공하는 속성

* position : 요소의 위치 지정 기준을 정한다.

  * static : 기준 없음 (기본)

  * relative : 요소 자신을 기준 

    자기 자신이 있는 자리를 기준으로 함. 단, 자기 자신을 기준으로 배치하는 것은 잘 사용 안함

  * absolute : 위치 상 부모 요소를 기준

    * 포지션 앱솔루트가 부여된 요소는 **주변 요소들과의 상호작용이 사라짐**

    * 위치 상이란??

      position이 지정되어 있는 부모 요소를 말한다. 

      모든 부모요소에 position이 기본 값이라면? 뷰포트가 부모가 된다. 부모요소에  포지션이 부여되어있지 않으면 static이라는 것인데, 이때는 더 상위 부모를 찾아가게되고 결국 최상위 부모인 뷰포트로 찾아가게됨

  * fixed : 뷰포트를 기준

    * absolute 처럼 주변 요소들과의 상호작용 사라짐

    * 스크롤을 해도 사라지지않고 화면에 고정된 요소 만들때 사용.

* top, bottom, left, right, z-index 등 position의 기준을 통해서 사용

  * (ex) top: 0; bottom: 0; 
  * 요소의 각 방향별 거리 지정

* **position 속성의 값으로 absolute, fixed가 지정된 요소는 display 속성이 block 요소로 변함!!**

---



### 요소 쌓임 순서 (stack order)

* 어떤 요소가 사용자와 더 가깝게 있는지 결정

1. 요소에 position 속성의 값이 있는 경우 위에 쌓임. (기본값 static 제외)
2. 1번 조건이 같은 경우, z-index 속성의 숫자 값이 높을 수록 위에 쌓임.
3. 1번과 2번 조건이 같은 경우, HTML의 다음 구조일 수록 위에 쌓임.

포지션 값 없이 z-index만 들어가있는 요소는 포지션값이 있는 요소 위에 쌓일 수 없음. 



* z-index : 요소의 쌓임 정도를 지정
  * 숫자가 높을 수록 위에 쌓임 
  * auto : 부모 요소와 동일한 쌓임 정도. 보통 0 



---



### 플렉스

1차원의 레이아웃

* display: flex

  수직으로 쌓여있는 요소들의 **부모요소에 flex 값**을 설정하면 요소들이 수평 정렬되며 그 수평 요소들을 flex item, 요소들을 둘러쌓은 수평 공간은 flex container라고 한다.

  이 둘을 나누는 이유는 각각에 사용하는 속성이 정해져있기 때문임.

* display

  * flex : 블록 요소로 플랙스 컨테이너를 생성
  * inline-flex : 인라인 요소로 플랙스 컨테이너 생성

* flex-direction: 주 축을 설정

  row : 행 축 (좌 -> 우) --- 기본값 

  row-reverse : 행 축 (우 -> 좌)

  column : 열 축 (위 -> 아래)

  column-reverse : 열 축 (아래 -> 위)

  * 주축 (main-aixs) ,  교차축 (cross-axis) , start, end



### flex-container

* flex-wrap : 플랙스 아이템 묶음 (줄바꿈) 여부

  * nowrap : 묶음 없음 (한 줄로 정렬)

    요소들의 크기를 전부 더한 값이 부모 요소보다 커도 억지로 한 줄에 끼워 맞춤.

  * wrap : 여러 줄로 묶음

    요소들이 크기에 맞게 표현되며 자연스럽게 줄바꿈됨

* Justify-content : 주 축의 정렬 방법 

  * flex-start : 플렉스 아이템을 시작점으로 정렬 (기본)
  * flex-end : 플렉스 아이템을 끝점으로 정렬
  * center : 플렉스 아이템을 가운데 정렬

* align-content : 교차 축의 여러 줄 정렬 방법 (많이안씀)

  아이템이 한 줄이면 이용 불가능함

  * stretch : 플렉스 아이템을 교차 축으로 늘려서 정렬 (기본)

  * flex-start : 플렉스 아이템을 시작점으로 정렬

    * stretch와 flex-start의 차이가 있음.

      stetch 이용했을 때에는 줄 사이에 간격이 있는 상태로 정렬이 되어있음, flex-start사용했을 때는 줄간격 없이 시작점에 붙어서 정렬됨

  * flex-end : 플렉스 아이템을 끝점으로 정렬

  * center : 플렉스 아이템을 가운데 정렬

* align-items : 교차 축의 한 줄 정렬 방법 -아이템이 한 줄일 경우 이용!

  * stretch : 플렉스 아이템을 교차 축으로 늘려서 정렬 (기본)
  * flex-start : 플렉스 아이템을 각 줄의 시작점으로 정렬
  * flex-end : 플렉스 아이템을 각 줄의 끝점으로 정렬
  * center : 플렉스 아이템을 각 줄의 가운데 정렬



### flex-items

* order : 플렉스 아이템의 순서

  * 0 : 순서 없음 - 기본
  * 숫자 : 작을 수록 앞쪽

* flex-grow : 플렉스 아이템의 증가 너비 비율

  * 0 : 증가 비율 없음 - 기본
  * 숫자 : 증가 비율

* flex-shrink : 플렉스 아이템의 감소 너비 비율

  * 1 : 플렉스 컨테이너 너비에 따라 감소 비율 적용 -기본
    * 플레스 아이템들은 컨테이너 너비보다 클 때 컨테이너 크기에 맞게 아이템 크기가 줄어들음. 감소 비율이 적용된 것!
  * 숫자 : 감소 비율

* flex-basis : 플렉스 아이템의 공간 배분 전 기본 너비 

  div 크기가 200*200 일 때 이 안에 hello 라고 적은 글< content라고 할 수 있음. content가 존재할 때, flex-grow는 content의 크기를 뺀 나머지 공간에 대해서 적용됨. 따라서 flex-grow를 1:1:2 같이 설정 했지만 각각의 content 크기가 다르다면 사용자 눈으로 보았을 때엔 1:1:2로 보이지않음. 그 content크기만큼의 공간을 기본너비 라고 함.

  (basis=0을 하지 않으면 flex-grow/shrink로 인해 크기가 조정된 div안에 내용물을 넣었을 때 조정되었던 크기가 일그러짐.)
  
  * auto : 요소의 content 너비 -기본
  * 단위 : px, em 등
  * 0 : 기본 너비가 없어짐. content 크기 상관 없이 flex-grow를 적용 가능해짐



---



### 전환

* transition : 속성명 **지속시간** 타이밍함수 대기시간

  전환 효과를 지정하는 단축 속성. 지속시간은 꼭 필요!!!!!!

  단축속성 시간, 단축속성 시간 이런식으로 여러개도 가능

  * transition-property :전환 효과를 사용할 속성 이름 지정

    all : 모든 속성에 적용 (기본)

    속성이름 : 전환 효과를 이용할 속성 이름 명시

  * transition-duration : 전환효과의 지속시간

  * transition-timing-function : 전환 효과의 타이밍(Easing) 함수를 지정

    * ease : 느리게 - 빠르게 - 느리게 (기본)
    * linear : 일정하게

		 * ease-in : 느리게 - 빠르게
    * ease-out : 빠르게 - 느리게
    * ease-in-out : 느리게 - 빠르게 - 느리게

* Easing functions 검색해서 Easing 함수차트 홈페이지 참고

* transition-delay : 전환효과가 몇 초 뒤에 시작할 지 대기시간 지정

  전환효과 지속시간 옆에 시간을 적으면 그것이 딜레이 시간.

  * 0s : 대기시간 없음 (기본)
  * 시간 : 대기시간 지정



---



### 변환

* transform: 변환함수1 변환함수2 변환함수3 .... ;

  원근법, 이동, 크기, 회전, 기울임 등 변환함수들 사용 가능

* 2D 변환 함수

  * translate(x,y) : x,y값에 따라 이동
  * translateX(x)
  * translateY(y)
  * scale(x,y) : x,y축 크기 키우기
  * rotate(degree) : 회전 (각도)
  * skewX(x) : 기울임
  * skewY(y) 

* 3D 변환 함수

  * perspective(n) : 원근법(거리)
* rotateX(x)
  * rotateY(y)
  * rotateZ(z)
  
* perspective : 함수아니고 속성

  perspective: 600px; ----> 관찰 대상의 부모에 적용. 기준점은 perspective-origin

  transform: perspective(600px); ---> 관찰 대상에 적용. 기준점은 transform-origin

* backface-visibility : 3D 변환으로 회전된 요소의 뒷면 숨김 여부

  * Visible : 뒷면 보임 (기본)
  * hidden : 숨김

변환함수에서 원근법 관련한 부분 이해가 잘 안가서 다시 찾아볼 것 !

---

### Grid

flex가 주 축의 정렬 방식을 row, column 중에 선택해서 1차원적인 배치를 하는것과 다르게, grid는 row, column을 둘다 주 축으로 사용하여 2차원 배치를 하는데 사용한다.

### container 속성

1. display: grid;

container 역할을 할 곳에 display 속성의 값을 grid를 입력해서 gridbox를 만들어준다. gridbox 안의 아이템들은 grid cell이라고 부른다.

2. grid-template-columns, grid-template-rows

   * grid-template-columns: (ex) 100px 100px 100px

     100px씩 세개의 공간을 만든다는 뜻. 원하는 사이즈의 원하는 갯수만큼의 열 공간을 만든다.

   * grid-template-row: (ex) 100px 100px 100px

   * repeat(5, 100px) : 100px 씩 5번 반복한다는 뜻으로, 반복해서 같은 값을 입력해야할 때는 repeat을 사용한다.

   * 사이즈를 지정할 때는 보통 **픽셀을 넣기 보다는 반응형을 위해서 %나 fr을 사용**한다.

     * repeat(5, 20%)
     * grid-template-columns : 1fr 2fr 1fr;

   * grid-auto-rows : column을 기준으로 줄넘김이 발생하기 때문에 column에 따라 달라지는 row를 자동 계산해서 모든 일괄적으로 크기를 지정하는 속성. 

     * minmax(최소크기, auto)를 value값으로 넣으면 grid cell 안에 컨텐츠가 최소 크기를 벗어나면 자동으로 계산해서 해당 row 크기를 그 값으로 바꿔주고 나머지 row는 최소 크기를 유지하도록 할 수 있다.

3. grid-column-gap, grid-row-gap, grid-gap, padding

   * column과 row에 각각 따로 gap을 설정할 수 있다.
   * grid-gap을 사용해서 일괄적으로 같은 gap 설정도 가능. 단, gird-gap은 cell들 사이사이에 공간을 주는 것이기 때문에 grid-cell 외부에는 여백이 생기지 않는다. 외부까지 여백을 주고 싶다면 같은 값의 padding 속성을 추가한다.
     
     

### item 속성

1. grid-column-start, grid-column-start, grid-row-start, grid-row-start

   grid cell 범위 설정. 만들어진 grid container의 grid line을 이용해서 범위를 지정할 수 있다. 아래와 같이 축약형도 존재한다.

   * grid-column : start / end
   * grid-row : start / end 
   * start와 end는 각각 직접 grid line을 입력할 수도 있지만 몇개의 cell을 차지할 것인지 지정할 수 도 있다. 이 경우에는 숫자 앞에 span을 붙인다.

### area

item 속성으로 grid line을 이용한 범위 지정 말고 다른 방식의 범위 지정, 영역 설정 방법.

1. container 속성

   * grid-template-areas : 
     	(ex)
       	'a a a'
       	'b c c'
       	'b d g'
       	'e f g'

     예시 처럼 각 셀에 영역 이름을 지어준다.

2. item 속성

   grid-area: (ex)a 

   item이 cotainer에서 설정한 a영역을 차지할 수 있게 한다.

### 그외

* object-fit

  * fill : 기본값, 요소에 크기에 맞게 꽉채워 보여줌, 필요한 경우 오브젝트가 늘어나거나 찌그러짐.
  * contain : 요소의 가로나 세로크기에 가능한 만큼 맞추어 크기가 조정되고, 비율은 고정된 상태. 남는 공간이 발생할 수 있다.
  * cover : 요소의 가로나 세로크기에 가능한 맞춰져 크기가 조정되고, 비율은 고정된 상태입니다. 개체 크기에 맞게 잘리며, 가득 채울때까지 확대된다.
  * none : 크기가 조정되지 않고 원본사이즈로 처리. 크면 잘리고, 작으면 남는다.
  * scale-down : 크기를 아무것도 지정되지 않거나 혹은 contain이 지정되어 있는 것처럼 변경. 이는 원본 크기보다 작아지는 결과를 보여준다.

* object-position

  * object-fit을 이용했을 때 cover나 none속성으로 이미지가 잘려서 보일 때 보일 위치를 지정

  * x축 키워드 : left, center, right

  * y축 키워드 : top, center, bottom

  * 수치는 px이나 %를 이용해서 디테일한 위치를 지정 가능