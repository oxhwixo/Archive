# Flexbox 



**flexbox**는 행 또는 열을 기준으로 **항목들을 1차원 공간에 배치**하는 메소드이다. 항목들은 공간의 크기에 따라 변형된다.

flexbox는 항목들을 담는 공간인 **flex-container**와 각 항목들을 나타내는 **flex-item**으로 구성된다. 각각 다른 속성을 적용시킬 수 있다. 

flexbox에는 **중심축(main axis)**과 **교차축(cross axis)**이 존재한다. 아이템이 정렬되는 기준이 되는 축이 중심축이고 그와 반대되는 축이 교차축이다. 예를들어 아이템이 수평으로 정렬되고 있다면 중심축은 row, 교차축은 column이 된다. 



## container 속성



#### 1. display: flex;

container 역할을 할 곳에 display 속성의 값을 flex로 입력해서 flexbox를 만들어준다. 



#### 2. flex-direction

중심축을 설정하는 속성이다. 

* row
* row-reverse
* column
* column-reverse



#### 3. flex-wrap

아이템을 줄바꿈할지, 한 줄에 전부 나타낼지 설정하는 속성이다.

* nowrap (기본값) : 줄바꿈 하지 않는다. 
* wrap : 줄바꿈을 허용한다.
* wrap-reverse :   wrap 속성이 켜진 상태에서 flex line들의 순서를 뒤집는다.



각 줄에 고정된 개수의 아이템을 넣으려면 flex-item의  width 비율을 조절하면 된다. 예를들어 각 줄에 아이템 3개를 넣고싶으면 width: 30% 



#### 4. flex-flow

direction과 wrap 을 한번에 설정하는 속성이다.

`flex-flow: row wrap`



#### 5. justify-content

  container안에 배치되는 item들의 **중심축 기준 정렬 방식**을 설정한다. 

* start (기본값) : 중심축의 시작점으로 아이템이 정렬된다.
  * flex-direction: row-reverse 인 경우에 중심축의 시작점은 오른쪽이 아니라 왼쪽이다. reverse하더라도 바뀌지 않는다.
* end : 중심축의 끝점으로 아이템이 정렬된다.
* center : 중심축의 중심으로 아이템이 정렬된다. 
* space-around : 각 아이템들이 동일한 크기의 space로 둘러쌓인다.
  * 맨 첫 요소와 끝 요소의 가장자리의 크기가 1이라면 그 사이 아이템들의 간격은 2이기 때문에 모든 간격이 동일하지 않다.
* space-evenly : 아이템들 사이에 동일한 크기의 간격이 생긴다.
* space-between : 가장자리에는 간격이 생기지 않고, 그 사이에 동일한 크기의 간격이 생긴다. 



#### 6. align-content

이 속성은 container가 wrap으로 설정되어 두개 이상의 flex line이 존재하는 경우에만 작동한다. 교차축을 기준으로 flex line의 정렬 방식을 설정한다. 

속성값의 종류는 justify-content와 같다. 



#### 7. align-items

 container안에 배치되는 item들의 **교차축 기준 정렬 방식**을 설정한다.

align-items에는 baseline이라는 속성값이 존재하는데 설정된 baseline라인에 맞추어 아이템을 정렬한다. 

wrap 속성으로 인해 줄바꿈 된 경우, 아이템들은 자신이 속해있는 각 **flex line을 기준**으로 정렬된다. nowrap 일 때는 container를 기준으로 정렬된다.  

* stretch  (기본) : flex line 혹은 container에 꽉 채워진다.
* flex-start 
* flex-end
* center 
* baseline : 아이템을 문자 기준선에 정렬한다. 각 아이템들이 가지고 있는 문자의 크기나 모양이 다를 때 사용된다. 



## item 속성



#### order

item의 순서를 직접 지정할 수 있다. 



#### flex-grow

flex-grow 속성 값을 설정하지 않으면 아이템들은 컨테이너 사이즈가 커질 때 원래 크기를 유지한다. (컨테이너가 작아지는 경우에는 작아진다.)

각 아이템에 flex-grow 값을 설정하면 비율을 계산해서 컨테이너 사이즈에 맞추어 아이템들 크기가 커진다. 세 아이템의 flex-grow값을 1로 설정하면 1 : 1 : 1 비율로 아이템의 크기가 커지는 것이다. 



#### flex-shrink

flex-grow는 아이템이 커지는 비율을 설정하는 속성이라면 flex-shrink는 아이템이 작아지는 비율을 설정하는 속성이다.



#### flex-basis

컨테이너에서 유지해야하는 아이템의 크기 비율을 지정해서 커지거나 작아질때도 이 비율을 유지할 수 있도록 하는 속성이다. 



#### align-self

아이템 각각의 정렬방식을 설정할 수 있는 속성이다. 



## FLEXBOX FROGGY

https://flexboxfroggy.com/#ko

flexbox에 대한 css 속성들을 이용해서 개구리를 옮기는 게임! 