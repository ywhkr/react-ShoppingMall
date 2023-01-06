# REACT 쇼핑몰 제작

> 리액트로 기본적인 쇼핑몰을 제작

## 배포

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
- cloudinary(이미지 업로드)

## 목차

- 기능
- 구현
- 트러블 슈팅

## 기능

- 로그인/로그아웃 (firebase 사용)

- 검색

- 상품 등록/ 삭제 (어드민 권한이 있을 때만 가능)

- 상품 불러오기 / 수정

- 가격 순 정렬

- 상품 상세페이지

- 장바구니

- 결제

- 랜딩페이지

## 트러블 슈팅

- [recoil로 로그인/로그아웃 구현 중 typeError]

  > 리코일은 저장하려는 객체를 재귀적으로 freeze 하고 있기 때문에, freeze가 불가능한 오브젝트(firebase User 객체 등)을 저장할 시 에러 발생.

  완벽히 이해는 안됐지만, recoil은 atom에 대한 값을 부분적으로 freeze 해놓는거 같다.
  기본적으로, 객체의 freeze는 동결해서 값을 변경되지 않게 만드는 것으로 알고 있는데
  useRecoilState 같은 것으로 값을 변경하는게 아니라, firebase User 객체는 onUserStateChange라는 함수가 user가 로그인/로그아웃 될 때마다 자동으로 상태를 감지하여 변화시키기 때문에 recoil과 충돌이 나는 것 같다. '
  그래서 강제적으로 가변 객체를 사용할 수 있게 옵션을 추가해줘야 하는 것 같다.

  dangerouslyAllowMutability: true 옵션을 추가로 해결.

  출처: https://zih0.tistory.com/24
  출처: https://github.com/facebookexperimental/Recoil/issues/406

- [firebase로 adminUser 구현하던 중 firebase_database**WEBPACK_IMPORTED_MODULE_2**.ref)(...).then is not a function 에러 발생]

  > @firebase/app 설치로 해결.

- recoil duplicate key

  리렌더링 되는 과정에서 atom으로 만든 state가 재선언됨.
  key는 고유값이어야 하는데, 똑같은 key가 다시 선언되서 발생.

  > uuid로 해결.

- [React-Query] Query data cannot be undefined 에러

  useQuery에 사용한 함수가 Promise를 반환하지 않아서 발생.  
  중괄호를 쓰고 return을 쓰지 않아서 에러가 발생했다.

  > 해결방법
  >
  > 1.  화살표 함수로 바로 리턴 (중괄호,리턴 생략)
  > 2.  중괄호 내부에서 return하기

- env 값을 못 읽어옴
  env 값을 넣을 때 따옴표를 넣고 문자열 형태로 넣는게 아니라 따옴표를 빼야 한다.

  출처: https://curryyou.tistory.com/502

- 비동기 처리는 return 으로 종료시킬 수 없다.
  장바구니에 이미 담은 상품인 경우 더 이상 담지 못하고 return으로 종료하려고 시도.

  하지만, 파이어베이스 데이터베이스를 가져오는건 비동기 처리이기 때문에 return으로 종료가 되지 않음.

  > 그래서 isUploaded라는 플래그를 세워서 수동적으로 boolean 값으로 작동되지 않게 만듬.

- Products 페이지에서 새로고침하면 데이터가 날라감.

  sort해서 데이터를 받아오는 버튼을 넣어놔서 다시 누르면 나오긴 하지만, 새로고침하면 날라가는게 불편.
  recoil에 저장해놓은 sortedState가 새로고침하는 순간 날라간다고 가정하여, recoil-persist 라는 라이브러리를 적용.
  하지만, 여전히 새로고침하면 사라진다..
  추가적으로, 상품 등록/삭제 시 새로고침을 한 번 해줘야 새로운 데이터를 보여준다.
  react-query의 invalidateQuery를 사용하고 있는데 원인을 모르겠다.
  recoil과 같이 사용하면서 중간에 꼬인 거 같다.

  > 1.  useEffect로 첫 렌더링 될 때 만들어 둔 정렬 필터를 작동시킨다.

  - dependency array missing 발생.
  - 등록은 등록한 이후 직접 이동하기 때문에 해결 가능.
  - 삭제는 삭제 하는 순간 useNavigate로 이동하게 만들었더니 새로고침이 되지 않아 해결 불가.

  > 2. window.location.reload()를 사용하면 해결 가능 하지만, 인위적으로 새로고침하는게 눈에 보여서 부자연스럽다.

  > 3. 조건부 렌더링으로 해결 완료

  ```
        {!sortedData &&
          products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
  ```

  > 필터를 누르지 않을 경우 sortedData가 없어서 data가 보여지지 않았다. 그래서, sortedData가 없을 때 react-query로 받아온 products를 보여줬다.

## 학습한 내용

- tailwind css

  - className을 이용하여 굉장히 간편하게 css 적용을 할 수 있었다.
  - css를 위해 써본게 emotion과 postCSS가 있는데 개인적으로는 tailwind가 좋은 거 같다.
  - 가독성이 문제가 될 수도 있어서 개인프로젝트가 아닌 경우엔 어쩔 지 모르겠지만 나는 맘에 든다.

- firebase

  - firebase를 듣기만 해봤지 직접적으로 이용한 건 처음인데 백엔드 없이 이용할 수 있는건 편리했다.
  - 공식문서가 워낙 잘 되어있다 그래서 쉽다 그랬지만 처음 사용할 땐 약간 응용이 필요하기에 헤맬 수도 있을 거 같다.
  - firebase를 이용해 CRUD와 구글 로그인/로그아웃을 구현하는 법을 배웠다.

- react-query

  - 서버에서 받아온 데이터를 관리하는 라이브러리.

  - caching과 retry를 할 수 있다.

  - staleTime을 별도로 설정하지 않으면 window가 focus될 때마다 새로 데이터를 받아온다.

    staleTime을 상황에 맞춰 잘 설정해줘야 한다.

  - 상품 등록/삭제 같이 즉각적으로 update가 필요할 경우 invalidateQueries를 이용할 수 있다.

  - UI 부분과 비즈니스 로직을 분리하기 위해 별도의 파일에 useQuery와 useMutation으로 분리해두고 사용하는 곳에서 불러와서 사용.
    useMutation 된 것은  
    .mutate()를 붙여서 사용.
