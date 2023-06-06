import axios from "axios";

const serviceKey =
  "ZwxVklLsL6zgVOKa4gEuD9BHrrEh8uwsxG2WMCerSG440FruBQhdMwzyjinpsNc5W0CtPlWOKbtBHrEx3oKU%2BA%3D%3D";
const url =
  "http://openapi.onbid.co.kr/openapi/services/KamcoPblsalThingInquireSvc/getKamcoPbctCltrList";
const req_url =
  url + "?serviceKey=" + serviceKey + "&numOfRows=10&pageNo=1&DPSL_MTD_CD=0001";

const ctgrId = "10000";
const ctgrMidUrl =
  "http://openapi.onbid.co.kr/openapi/services/OnbidCodeInfoInquireSvc/getOnbidMiddleCodeInfo";

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
  xhr.open("GET", req_url);
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      alert(
        "Status: " +
          this.status +
          "nHeaders: " +
          JSON.stringify(this.getAllResponseHeaders()) +
          "nBody: " +
          this.responseText
      );
    }
  };

  xhr.send("");
}

export const getListTest = async () => {
  try {
    // API 요청에 필요한 정보
    const apiUrl =
      "http://openapi.onbid.co.kr/openapi/services/KamcoPblsalThingInquireSvc/getKamcoPbctCltrList";
    const serviceKey =
      "ZwxVklLsL6zgVOKa4gEuD9BHrrEh8uwsxG2WMCerSG440FruBQhdMwzyjinpsNc5W0CtPlWOKbtBHrEx3oKU%2BA%3D%3D";

    // API 호출
    const response = await axios.get(apiUrl, {
      params: {
        serviceKey,
        numOfRows: 10,
        pageNo: 1,
        dpslMtdCd: "0001",
      },
    });

    // 응답 데이터 파싱
    const responseData = response.data;
    // 파싱된 데이터를 이용하여 원하는 로직 수행
    console.log(responseData);
  } catch (error) {
    console.error("API 호출 중 오류가 발생하였습니다.", error);
  }
};

// API 호출 함수 실행
getListTest();

function xmlToJson(xml: any) {
  // Create the return object
  var obj: any;

  if (xml.nodeType === 1) {
    // element
    // do attributes
    if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
      for (var j = 0; j < xml.attributes.length; j++) {
        var attribute = xml.attributes.item(j);
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType === 3) {
    // text
    obj = xml.nodeValue;
  }

  // do children
  // If all text nodes inside, get concatenated text from them.
  var textNodes = [].slice.call(xml.childNodes).filter(function (node: any) {
    return node.nodeType === 3;
  });
  if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
    obj = [].slice.call(xml.childNodes).reduce(function (text, node: any) {
      return text + node.nodeValue;
    }, "");
  } else if (xml.hasChildNodes()) {
    for (var i = 0; i < xml.childNodes.length; i++) {
      var item = xml.childNodes.item(i);
      var nodeName = item.nodeName;
      if (typeof obj[nodeName] == "undefined") {
        obj[nodeName] = xmlToJson(item);
      } else {
        if (typeof obj[nodeName].push == "undefined") {
          var old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xmlToJson(item));
      }
    }
  }
  return obj;
}

const getXMLfromAPI = async () => {
  const url = ctgrMidUrl;
  const reqURL = `${ctgrMidUrl}?serviceKey=${serviceKey}`;
  const response = await fetch(reqURL);
  const xmlString = await response.text();
  let XmlNode = new DOMParser().parseFromString(xmlString, "text/xml");
  console.log(xmlToJson(XmlNode));
};
getXMLfromAPI();
