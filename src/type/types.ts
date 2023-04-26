export type TFilterType = {
  id: string;
  juso: string;
  gubun1: string;
  gubun2: string;
  land: string;
  building: string;
  standardPrice: string;
  minPrice: string;
};

export type TJusoType = {
  cd: string;
  addr_name: string;
  full_addr: string;
  x_coor: string;
  y_coor: string;
  pg: string;
};

export type TLandType = {
  resultCode: string;
  resultMsg: string;
  numOfRows: string;
  pageNo: string;
  totalCount: string;
  ctgrId: string;
  ctgrNm: string;
  ctgrHirkId: string;
  ctgrHirkNm: string
}