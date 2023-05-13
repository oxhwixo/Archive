# DOM 조작하기

## 새로운 요소 추가하기 (Create)

### createElement()

새로운 요소를 생성한다. 

~~~js
const addDiv = document.createElement("div");
~~~

### node.before(), node.after()

호출한 노드 앞, 뒤에 새로운 노드를 추가한다.

~~~
a.after(addDiv);
a.before(addDiv);
~~~

### textContent =

요소에 text 내용을 추가한다.

~~~js
addDiv.textContent = "내용을 추가합니다.";
~~~

 ### classList.add()

요소에 클래스를 추가하다.

~~~js
addDiv.classList.add("newClass");
~~~

### Node.append()

생성한 요소를 원하는 요소에 추가한다. Node는 원하는 DOM Node를 의미한다. 

~~~js
document.body.append(addDiv)
document.body.appendChild(addDiv)
~~~

* Node.appendChild() 메소드는 부모 노드의 자식 노드 리스트 중 마지막 자식으로 새로운 요소를 추가한다. 

### setAttribute(속성, 값)

요소에 속성을 추가하거나 변경한다.

~~~js
addDiv.setAttribute("color", "red")
~~~

* removeAttribute() 메소드를 사용해서 요소의 속성을 삭제할 수 있다.

### Node.cloneNode()

호출한 노드의 메소드를 복사한다. 복제된 노드를 반환하는 메소드이며 깊이를 정하는 두가지 옵션이 있다.

~~~js
const dupDiv1 = addDiv.cloneNode(true)
const dupDiv1 = addDiv.cloneNode(false)
~~~

* true : 호출한 노드의 자식까지 복제한다.
* false :  호출한 노드만 복제한다.

## 요소 선택하기 (Read) 

### querySelector(CSS선택자)

CSS 선택자에 매치되는 하나 이상의 요소들중 첫번째 항목을 반환한다. 매치되는 요소가 하나도 없을 경우 null을 반환한다. 

### querySelectorAll(CSS선택자)

CSS 선택자에 매치되는 모든 요소의 노드리스트를 반환한다. 매치되는 요소가 하나도 없을 경우 빈 노드리스트를 반환한다. 

### getElementById(Id)

Id 선택자에 매치되는 하나 이상의 요소들중 첫번째 항목을 반환한다.

### getElementByClass(Class)

Class 선택자에 매치되는 하나 이상의 요소들중 첫번째 항목을 반환한다.

## 요소 속성 변경하기 (Update)

### replaceChild()

부모 노드의 한 자식 노드를 다른 노드로 교체한다. 반환 값은 교체된 노드로 oldChild와 같다.

~~~js
const returnValue = parentNode.replaceChild(newChild, oldChild);
~~~



## 요소 삭제하기 (Delete)

### remove()

**제거하고 싶은 요소의 참조**가 존재하는 경우 remove 메소드로 요소를 삭제할 수 있다. 일부 구 버전의 브라우저에서 작동하지 않기 때문에 아래의 removeChild 방식도 알아두자.

~~~js
const addDiv = document.createElement("div");
document.body.appendChild(addDiv)
addDiv.remove()
~~~

### removeChild()

부모 노드에서 자식 노드를 삭제한다.

~~~js
var parent = document.getElementById("parent");
var child = document.getElementById("child");
parent.removeChild(child);
~~~

삭제할 노드를 알고있지만 그 **부모노드를 찾는데 시간을 낭비하고 싶지 않을 때**, 이런 방법으로도 removeChild 메소드를 사용할 수 있다.

~~~js
var child = document.getElementById("child");
child.parentNode.removeChild(child);
~~~

### remove와 removeChild의 차이

remove는 메모리에서 노드를 삭제한다. removeChild()는 메모리가 아닌, DOM 트리에서 노드를 삭제하고 해당 노드의 참조를 반환한다. 삭제된 노드는 메모리에 남아있기 때문에 반환된 참조값을 저장해 놓으면 다시 재사용이 가능하다.





