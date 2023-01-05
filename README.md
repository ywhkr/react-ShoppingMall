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

  출처: https://zih0.tistory.com/24

- firebase로 adminUser 구현하던 중 firebase_database**WEBPACK_IMPORTED_MODULE_2**.ref)(...).then is not a function 에러 발생

  @firebase/app 설치로 해결.

- recoil duplicate key

  리렌더링 되는 과정에서 atom으로 만든 state가 재선언됨.
  key는 고유값이어야 하는데, 똑같은 key가 다시 선언되서 발생.

  uuid로 해결.

- [React-Query] Query data cannot be undefined 에러

useQuery에 사용한 함수가 Promise를 반환하지 않아서 발생.
중괄호를 쓰고 return을 쓰지 않아서 에러가 발생했다.

해결방법

1. 화살표 함수로 바로 리턴 (중괄호,리턴 생략)
2. 중괄호 내부에서 return하기

- env 값을 못 읽어옴
  env 값을 넣을 때 따옴표를 넣고 문자열 형태로 넣는게 아니라 따옴표를 빼야 한다.

출처: https://curryyou.tistory.com/502

- 비동기 처리는 return 으로 종료시킬 수 없다.
  장바구니에 이미 담은 상품인 경우 더 이상 담지 못하고 return으로 종료하려고 시도.

하지만, 파이어베이스 데이터베이스를 가져오는건 비동기 처리이기 때문에 return으로 종료가 되지 않음.

그래서 isUploaded라는 플래그를 세워서 수동적으로 boolean 값으로 작동되지 않게 만듬.

- Products 페이지에서 새로고침하면 데이터가 날라감.

sort해서 데이터를 받아오는 버튼을 넣어놔서 다시 누르면 나오긴 하지만, 새로고침하면 날라가는게 불편.
recoil에 저장해놓은 sortedState가 새로고침하는 순간 날라간다고 가정하여, recoil-persist 라는 라이브러리를 적용.
하지만, 여전히 새로고침하면 사라진다..
추가적으로, 상품 등록/삭제 시 새로고침을 한 번 해줘야 새로운 데이터를 보여준다.
react-query의 invalidateQuery를 사용하고 있는데 원인을 모르겠다.
recoil과 같이 사용하면서 중간에 꼬인 거 같다.

1. useEffect로 첫 렌더링 될 때 만들어 둔 정렬 필터를 작동시킨다.

- dependency array missing 발생.
- 등록은 등록한 이후 직접 이동하기 때문에 해결 가능.
- 삭제는 삭제 하는 순간 useNavigate로 이동하게 만들었더니 새로고침이 되지 않아 해결 불가.

2. window.location.reload()를 사용하면 해결 가능 하지만, 인위적으로 새로고침하는게 눈에 보여서 부자연스럽다.

3. 조건부 렌더링으로 해결 완료

```
        {!sortedData &&
          products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
```

필터를 누르지 않을 경우 sortedData가 없어서 data가 보여지지 않았다. 그래서, sortedData가 없을 때 react-query로 받아온 products를 보여줬다.
