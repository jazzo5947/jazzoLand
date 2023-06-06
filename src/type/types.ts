export type TFilter = {
  id: string;
  dpslMtdCd: string; // 매각 0001 임대 0002

  ctgrHirkId: string; // 부동산 10000
  ctgrHirkIdMid: string; // 하위코드

  sido: string;
  sgk: string;
  emd: string;

  goodsPriceFrom: number;
  goodsPriceTo: number;

  openPriceFrom: number;
  openPriceTo: number;

  cltrNm: string; // 물건명

  pbctBegnDtm: string; // 입찰 시작일
  pbctClsDtm: string; // 입찰 마감일
  cltrMnmtNo: string; // 물건관리번호
};

export type TItem = {
  plnmNo: number; // 공고번호
  pbctNo: number; // 공매번호
  pbctCdtnNo: number; // 공매조건번호
  cltrNo: number; // 물건번호
  cltrHstrNo: number; // 물건이력번호
  scrnGrpCd: string; // 화면그룹코드

  ctgrFullNm: string; // 용도명
  bidMnmtNo: string; //입찰번호

  cltrNm: string; // 물건명
  cltrMnmtNo: string; //물건관리번호

  ldnmAdrs: string; // 물건소재지(지번)
  nmrdAdrs: string; // 물건소재지 (도로명)

  dpslMtdCd: string; // 처분방식코드 0001매각 0002임대
  dpslMtdNm: string; // 처분방식코드명

  bidMtdNm: string; // 입찰방식명.. 일반경쟁? 인지
  minBidPrc: number; // 최저입찰가
  apslAsesAvgAmt: number; // 감정가
  feeRate: string; // 최저입찰가율

  pbctBegnDtm: string; // 입찰시작일시
  pbctClsDtm: string; // 입찰마감일시
  pbctCltrStatNm: string; // 물건상태

  uscbdCnt: number; // 유찰횟수
  iqryCnt: number; // 조회수
  goodsNm: string; // 물건상세정보
};

export type TJuso = {
  cd: string;
  addr_name: string;
  full_addr: string;
  x_coor: string;
  y_coor: string;
  pg: string;
};

export type TLand = {
  ctgrId: string;
  ctgrNm: string;
};
