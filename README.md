# userInfo APP #
### using react project ###

> 국내 인기 게임인 로스트아크의 유저 정보를 공식 홈페이지 크롤링으로 볼수 있고 게임내에 할것을 체크할수 있게 구현하는것이 목표입니다. 또한 리덕스를 사용한 첫 프로젝트가 될것입니다.

+ 21.08.26
    - 기본 파일들 구현
    - cors 이슈


### How to use ###

리액트 라우터로 구현했습니다 설치가 필요합니다.
```
npm install react-router-dom
```
json-server REST api가 필요합니다. 
```
npm install json-server
```
json서버 포트는 3001로 사용해줍니다.
```
json-server --watch ./src/db/data.json --port 3001
```
react-redux를 사용해 데이터를 관리 했습니다.
```
npm install react-redux
```