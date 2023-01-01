# REACT 쇼핑몰 제작

> 리액트로 기본적인 쇼핑몰을 제작

## 실행

> yarn install
> yarn start

## 사용

- React
- tailwind css
- react-query
- react-router
- recoil
- firebase

## 목차

- 기능
- 구현
- 트러블 슈팅

## 기능

## 구현

## 트러블 슈팅

- recoil로 로그인/로그아웃 구현 중 typeError

  recoil은 재귀 프리즈 어쩌고 공부해야함.

  https://zih0.tistory.com/24

- firebase로 adminUser 구현하던 중 firebase_database**WEBPACK_IMPORTED_MODULE_2**.ref)(...).then is not a function 에러 발생

  @firebase/app 설치로 해결.

- recoil duplicate key

  리렌더링 되는 과정에서 atom으로 만든 state가 재선언됨.
  key는 고유값이어야 하는데, 똑같은 key가 다시 선언되서 발생.

  uuid로 해결.
