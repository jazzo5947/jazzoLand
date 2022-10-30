# otterAuction

개요: 공공 api를 활용한 경공매 정보 조회 서비스

- 원하는 조건으로 필터링된 물건정보를 매일 아침 메일로 전송
- 지도에서 이런저런 조건으로 필터링 된 물건들만 조회가능(ex; 주거용 > 아파트, 주거용 > 단독주택 등)
  <br>

## 프로젝트 진행내역

1. open api의 데이터를 가져온다. (성공!)
2. 데이터를 프론트에서 뿌려준다.
3. 프론트에 파라미터를 수정할 수 있는 폼을 만든다.
4. 프론트에서 선택한 파라미터대로 데이터를 받아온다.
5. 해당 데이터를 메일로 전송한다.

## Tech Stack

- react, typescript, python, fast-api

## 관련 공공 api

### 공시지가

- <a href="https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15058796" target="_blank">국토교통부\_표준지공시지가정보서비스</a>
- <a href="https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15059127" target="_blank">국토교통부\_개별공시지가정보서비스</a>

### 경/공매

- <a href="https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15000849" target="_blank">한국자산관리공사\_이용기관공매물건조회서비스</a>
- <a href="https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15000920" target="_blank">한국자산관리공사\_온비드코드조회서비스</a>
- <a href="https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15000851" target="_blank">한국자산관리공사\_캠코공매물건조회서비스</a>
- <a href="https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15000837" target="_blank">한국자산관리공사\_물건정보조회서비스</a>

### 실거래가

- 추후 추가예정
