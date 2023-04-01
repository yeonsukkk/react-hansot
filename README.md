# 한솥 도시락
한솥 도시락의 회사 소개와 한솥 도시락의 메뉴를 볼 수 있는 사이트<br />
[사이트방문](http://ys-react-hansot.s3-website.ap-northeast-2.amazonaws.com/)
## 목차
1. [언어&#x0026;툴](#언어&툴)
2. [스토리보드](#스토리보드)
3. [구조](#구조)
4. [페이지](#페이지)
5. [기능설명](#기능설명)

<br />

### 💡언어&#x0026;툴
<img src="https://img.shields.io/badge/HTML5-E34F26?style=E34F26&logo=HTML5&logoColor=fff"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=1572B6&logo=CSS3&logoColor=fff"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=F7DF1E&logo=JavaScript&logoColor=333"/> <img src="https://img.shields.io/badge/Node.js-339933?style=339933&logo=Node.js&logoColor=fff"/> <img src="https://img.shields.io/badge/npm-CB3837?style=CB3837&logo=npm&logoColor=fff"/> <img src="https://img.shields.io/badge/React-61DAFB?style=61DAFB&logo=React&logoColor=fff"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=764ABC&logo=Redux&logoColor=fff"/>
<br />
<br />

### 💡스토리보드
[스토리보드](https://www.figma.com/file/3bA7Takc9KNJzv901hw7pq/%EB%A6%AC%EC%95%A1%ED%8A%B8%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A42-%ED%95%9C%EC%86%A5%EB%8F%84%EC%8B%9C%EB%9D%BD?node-id=0-1&t=fWFBgzDOj13tEVOI-0)
<img src="https://img.shields.io/badge/figma-F24E1E?style=000000&logo=figma&logoColor=fff"/>
<br />
<br />

### 💡구조
```
react-portfolio2_hansot
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  └─ json
│     ├─ mainVisual.json
│     ├─ newsData.json
│     ├─ product.json
│     └─ store.json
└─ src
   ├─ .redux
   │  ├─ MainVisual.js
   │  ├─ News.js
   │  └─ store.js
   ├─ api
   │  └─ api.js
   ├─ assets
   │  └─ images
   ├─ common.css
   ├─ component
   │  ├─ App.js
   │  ├─ CartItem.css
   │  ├─ CartItem.js
   │  ├─ ChkCart.js
   │  ├─ Event.css
   │  ├─ Event.js
   │  ├─ Footer.css
   │  ├─ Footer.js
   │  ├─ HansotPromise.css
   │  ├─ HansotPromise.js
   │  ├─ HansotStoreCnt.css
   │  ├─ HansotStoreCnt.js
   │  ├─ HansotStoreOpt.css
   │  ├─ HansotStoreOpt.js
   │  ├─ MainNews.css
   │  ├─ MainNews.js
   │  ├─ MainVisual.css
   │  ├─ MainVisual.js
   │  ├─ MenuItem.css
   │  ├─ MenuItem.js
   │  ├─ MenuOption.css
   │  ├─ MenuOption.js
   │  ├─ MyMenuAfter.js
   │  ├─ MyMenuBefore.js
   │  ├─ Nav.css
   │  ├─ Nav.js
   │  ├─ NewsItem.css
   │  ├─ NewsItem.js
   │  ├─ Philosophy.css
   │  ├─ Philosophy.js
   │  ├─ ProductEx.js
   │  ├─ ProductSubEx.css
   │  ├─ ProductSubEx.js
   │  ├─ Shortcut.css
   │  ├─ Shortcut.js
   │  ├─ SignIn.js
   │  └─ SignUp.js
   ├─ index.js
   ├─ json
   │  ├─ mainVisual.json
   │  ├─ newsData.json
   │  ├─ product.json
   │  ├─ store.json
   │  └─ 가맹점리스트json변환전.txt
   ├─ Main.js
   ├─ page
   │  ├─ Cart.js
   │  ├─ HansotStore.css
   │  ├─ HansotStore.js
   │  ├─ Home.js
   │  ├─ Menu.css
   │  ├─ Menu.js
   │  ├─ MenuDetail.css
   │  ├─ MenuDetail.js
   │  ├─ MyMenu.js
   │  ├─ News.css
   │  ├─ News.js
   │  ├─ NewsDetail.js
   │  └─ NotFound.js
   └─ store.js

```

### 💡페이지
  1. [홈](#1-홈)
  2. [메뉴소개](#2-메뉴소개)
  3. [메뉴 상세페이지](#3-메뉴-상세페이지)
  4. [나의 장바구니](#4-나의-장바구니)
  5. [가맹점 찾기](#5-가맹점-찾기)
  6. [새로운 소식](#6-새로운-소식)
<br />

### 💡기능설명
  1. 홈
  <br />
    *pages>index.js*<br />
    *component : src>component>MainVisual.js, HansotPromise.js, Shortcut.js, Philosophy.js, MainNews.js*
    <br />
    <img src="https://ys-react-hansot.s3.ap-northeast-2.amazonaws.com/git/home.png" alt="홈 이미지" width="400" />
      - 데이터
        - 메인 비주얼 영역 & 뉴스 영역 -> react hook(useCallback(), useEffect(), useState())을 이용하여 데이터 가져옴

        ```bash
        
        <메인 비주얼 영역 json 파일 형식>
        [
          {
            "id": 1,
            "imgUrl": "url",
            "ex": "ex"
          }
        ]

        <뉴스 json 파일 형식>
        [
          {
            "id": 1,
            "title": "title",
            "imgUrl": "url",
            "text": "text",
            "link": "link",
            "date": 1676505600000
          }
        ]

        ```

      - 레이아웃
        - 메인 비주얼 영역<br />
          - Swiper를 이용하여 슬라이드 구현
        - 뉴스 영역<br />
          - 데이터를 prop를 이용하여 *src>component>NewsItem.js* 컴포넌트에 데이터 전달
          - props를 이용하여 전달받은 데이터 중, 뒤에서 세번째까지의 데이터 노출
          - 밀리초로 되어있는 날짜를 2023-02-08 로 노출되게끔 함수 구현<br />
    <br />
    <br />

  2. 메뉴소개
  <br/>
    *src>page>menu.js*<br />
    *component : src>component>MenuOption.js, MenuItem.js*
    <br />
    <img src="https://ys-react-hansot.s3.ap-northeast-2.amazonaws.com/git/menu.png" alt="메뉴소개 이미지" width="400" />

      - 데이터
        - Redux(createAsyncThunk(), useSelector(), ueseEffect(), useDispatch())를 이용하여 데이터 가져옴

        ```bash

        json 파일 형식
        [
          {
            "id": 1,
            "title": "title",
            "slug": "slug",
            "price": 8200,
            "imgUrl": "url",
            "text": "text",
            "category": ["category"],
            "allergy": ["allergy1"],
            "kcal": 713.25
          }
        ]

        ```

        - 레이아웃
          - 필터(체크박스)
            - props를 이용하여 *MenuOption.js* 의 컴포넌트에서 checkbox onChange가 될 때 필터값의 조건에 따라 아이템(메뉴) 출력
            - 리스트 영역 상단에 필터의 조건에 따라 텍스트 변경
              - 체크x
                - "전체상품입니다." 출력
              - 체크o
                - 아이템(메뉴) o -> “옵션1, 옵션2를 검색한 상품입니다.” 출력
                - 아이템(메뉴) x -> “죄송합니다해당 상품이 없습니다.” 출력
          - 메뉴 리스트
            - props를 이용하여 *MenuItem.js* 의 컴포넌트에서 아이템(메뉴) 출력
    <br />
    <br />

  3. 메뉴 상세페이지
    <br/>
    *src>page>menuDetail.js*<br />
    *component : src>component>ProductSubEx.js*
    <br />
    <img src="https://ys-react-hansot.s3.ap-northeast-2.amazonaws.com/git/menuDetail.png" alt="메뉴 상세페이지 이미지" width="400" />

      - 데이터
        - Redux(useSelector(), useDispatch(), useEffect())를 이용하여 데이터 가져온 후 react-router hook(useParams())와 find()을 이용하여 해당 아이템(메뉴) 데이터만 가져옴
        <br /><br />
      - 레이아웃
        - 전체메뉴 클릭 시 react-router hook(useNavigate())을 이용하여 뒤로가기 구현
        - 담기버튼
          - localstorage.setItem()을 이용하여 구현된 함수(*src>api>api.js addCart()*)에 따라 localstorage에 데이터 담음
            - 중복x -> alert “장바구니에 담겼습니다.”
            - 중복 ->  alert “이미 장바구니에 담겨있습니다.”
        - 서브 정보<br />
          props를 이용하여 *ProductSubEx.js* 컴포넌트로 해당 아이템(메뉴) 칼로리, 알레르기 데이터를 넘겨줌
    <br />
    <br />

  4. 나의 장바구니<br/>
    *src>page>Cart.js*<br />
    *component : src>component>ChkCart.js, CartItem.js*
    <br />
    <img src="https://ys-react-hansot.s3.ap-northeast-2.amazonaws.com/git/cart.png" alt="나의 장바구니 이미지" width="400" />

      - 데이터
        - localstorage.getItem()을 이용하여 localstorage에 있는 데이터 가져옴
      <br /><br />
      - 레이아웃
        - props를 이용하여 *ChkCart.js*  컴포넌트에 데이터 넘겨줌
        - localstorage에 데이터가 담겨 있지 않으면 "장바구니가 비었습니다. 상품을 담아주세요" 출력
        - localstorage에 데이터가 담겨있으면 해당 데이터들을 react hook(useState())를 이용하여 담고, props를 이용해 *CartItem.js* 로 데이터 넘겨줌
          - 삭제버튼
            - 클릭 시 구현된 함수(*src>api>api.js removeCart()*)에 따라 해당 아이템 삭제
            - localstorage.getItem()을 이용하여 현재 담겨있는 데이터를 props로 부모 컴포넌트에 넘겨준 후 useState를 변경해 삭제버튼 구현 
          - 전체삭제
            - 클릭 시 구현된 함수(*src>api>api.js removeAll()*)에 따라 전체 아이템 삭제
            - localstorage.getItem()을 이용하여 현재 담겨있는 데이터를 props로 부모 컴포넌트에 넘겨준 후 useState를 변경해 삭제버튼 구현
    <br />
    <br />

  5. 가맹점 찾기<br/>
    *src>page>HansotStore.js*<br />
    *component : src>component>HansotStoreOpt.js, HansotStoreCnt.js*
    <br />
    <img src="https://ys-react-hansot.s3.ap-northeast-2.amazonaws.com/git/store.png" alt="가맹점찾기 이미지" width="400" />

      - 데이터
        - react hook(useState(), useEffect())와 axios를 이용하여 데이터 가져옴
        <br /><br />
      - 레이아웃
        - 필터
          - "전체"일 경우
            - 데이터 가장 첫번째 구글 맵 노출
            - 전체 가맹점 리스트 노출
          - "전체"가 아닐 경우 
            - 옵션명에 따른 해당 지역의 첫번째 가맹점 지도 노출
            - 옵션명에 따른 해당 지역의 가맹점 리스트 노출
        - 지도보기 버튼 클릭 시 해당 가맹점 지도 보여줌
    <br />
    <br />

  6. 새로운 소식<br/>
    *src>page>News.js*<br />
    *component : src>component>NewsItem.js*
    <br />
    <img src="https://ys-react-hansot.s3.ap-northeast-2.amazonaws.com/git/news.png" alt="새로운소식 이미지" width="400" />

      - 데이터
        - react hook(useState(), useEffect())와 axios를 이용하여 데이터 가져옴
        <br /><br />
      - 레이아웃
        - props를 이용하여 *NewsItem.js*  컴포넌트에 데이터 넘겨줌
        - 밀리초로 되어있는 날짜를 2023-02-08 로 노출되게끔 함수 구현
