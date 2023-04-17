
const serviceKey =
  'ZwxVklLsL6zgVOKa4gEuD9BHrrEh8uwsxG2WMCerSG440FruBQhdMwzyjinpsNc5W0CtPlWOKbtBHrEx3oKU%2BA%3D%3D';
const url =
  'http://openapi.onbid.co.kr/openapi/services/KamcoPblsalThingInquireSvc/getKamcoPbctCltrList';
const req_url =
  url + '?serviceKey=' + serviceKey + '&numOfRows=10&pageNo=1&DPSL_MTD_CD=0001';

type TKamcoReqParams = {
  serviceKey: string;
  numOfRows: number;
  pageNo: number;
  dpslMtdCd: string; // 처분방식코드
  ctgrHirkId: string; // 상위카테고리ID
  ctgrHirkIdMid: string;
  sido: string;
  sgk: string;
  emd: string;
  goodsPriceFrom: number; //감정가
  goodsPriceTo: number;
  openPriceFrom: number; //최저입찰가
  openPriceTo: number;
  cltrNm: string; // 물건명
  pbctBegnDtm: string; //입찰일자
  pbctClsDtm: string;
  cltrMnmtNo: string; //물건관리번호
};

type TKamcoResponse = {
  resultCode: string;
  resultMsg: string;
  numOfRows: number;
  pageNo: number;
  totalCount: number;
  plnmNo: number;
  pbctNo: number;
  pbctCdtnNo: number;
  cltrNo: number;
  cltrHstrNo: number;
  scrnGrpCd: string;
  ctgrFullNm: string;
  bidMnmtNo: string;
  cltrNm: string;
  cltrMnmtNo: string;
  ldnmAdrs: string;
  nmrdAdrs: string;
  dpslMtdNm: string;
  dpslMtdCd: string;
  bidMtdNm: string;
  minBidPrc: number;
  apslAsesAvgAmt: number; //감정가
  feeRate: string; // 최저입찰가율
  pbctBegnDtm: string;
  pbctClsDtm: string;
  pbctCltrStatNm: string;
  uscbdCnt: number;
  iqryCnt: number;
};

export function getKamcoList(params: TKamcoReqParams) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', req_url);
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      alert(
        'Status: ' +
          this.status +
          'nHeaders: ' +
          JSON.stringify(this.getAllResponseHeaders()) +
          'nBody: ' +
          this.responseText
      );
    }
  };

  xhr.send('');
}
