## Git rebase

이번에 알고리즘 스터디를 진행하면서 처음으로 다른 사람의 깃 레포지토리를 fork 해서 pull request를 해보았다. 매주 각자 브랜치를 만들어서 코드를 작성하고 풀 리퀘스트를 올려 머지한다. 그 후엔 다시 자신의 로컬 저장소를 fork한 원본 저장소의 최신 상태로 업데이트 하는 과정이 필요하다. 

```bash
git remote add upstream [원격저장소주소]
git remote -v
# 현재 로컬의 리모트 공간 확인 (origin, upstream 로컬과 서버 총 4개 확인)

git fetch upstream main
git rebase upstream/main
```



그 과정은 위와 같은데, 
여기서 **fetch**는 원격저장소의 객체 및 참조(커밋, 태그)를 다운로드하는 것이다. 다운로드만 하고 로컬 저장소에 병합은 되지 않는다. 

**rebase**는 브랜치의 base를 다시 정의하는 것이다. rebase를 이용해서 브랜치를 합칠 수 있다. 그렇다면 merge와 rebase의 차이는 무엇일까?

**merge**는 branch를 단지 "통합"하는 것이고, **rebase**는 base를 옮기는 것이다. 

브랜치는 base 지점을 가지고 있어서 base에서 부터 코드를 수정한다. git history를 살펴보면 브랜치의 base가 어디인지 확인할 수 있다. 