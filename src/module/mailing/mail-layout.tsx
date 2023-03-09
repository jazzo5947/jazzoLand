import React from 'react';
import {testItems} from "../../data/test-public-auction-data";

const serviceKey = 'ZwxVklLsL6zgVOKa4gEuD9BHrrEh8uwsxG2WMCerSG440FruBQhdMwzyjinpsNc5W0CtPlWOKbtBHrEx3oKU%2BA%3D%3D'
const url = 'http://openapi.onbid.co.kr/openapi/services/KamcoPblsalThingInquireSvc/getKamcoPbctCltrList'
const req_url = url + '?serviceKey=' + serviceKey + '&numOfRows=10&pageNo=1&DPSL_MTD_CD=0001'

const testData = testItems;

function MailLayout() {
    var xhr = new XMLHttpRequest();
    var url = 'http://openapi.onbid.co.kr/openapi/services/KamcoPblsalThingInquireSvc/getKamcoPbctCltrList'; /*URL*/
    var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + '서비스키'; /*Service Key*/
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
    queryParams += '&' + encodeURIComponent('DPSL_MTD_CD') + '=' + encodeURIComponent('0001'); /**/
    queryParams += '&' + encodeURIComponent('CTGR_HIRK_ID') + '=' + encodeURIComponent('10000'); /**/
    queryParams += '&' + encodeURIComponent('CTGR_HIRK_ID_MID') + '=' + encodeURIComponent('10100'); /**/
    queryParams += '&' + encodeURIComponent('SIDO') + '=' + encodeURIComponent('강원도'); /**/
    queryParams += '&' + encodeURIComponent('SGK') + '=' + encodeURIComponent('인제군'); /**/
    queryParams += '&' + encodeURIComponent('EMD') + '=' + encodeURIComponent('남면'); /**/
    queryParams += '&' + encodeURIComponent('GOODS_PRICE_FROM') + '=' + encodeURIComponent('522740000'); /**/
    queryParams += '&' + encodeURIComponent('GOODS_PRICE_TO') + '=' + encodeURIComponent('617393000'); /**/
    queryParams += '&' + encodeURIComponent('OPEN_PRICE_FROM') + '=' + encodeURIComponent('522740000'); /**/
    queryParams += '&' + encodeURIComponent('OPEN_PRICE_TO') + '=' + encodeURIComponent('617393000'); /**/
    queryParams += '&' + encodeURIComponent('CLTR_NM') + '=' + encodeURIComponent('종이팩'); /**/
    queryParams += '&' + encodeURIComponent('PBCT_BEGN_DTM') + '=' + encodeURIComponent('20171218'); /**/
    queryParams += '&' + encodeURIComponent('PBCT_CLS_DTM') + '=' + encodeURIComponent('20171218'); /**/
    queryParams += '&' + encodeURIComponent('CLTR_MNMT_NO') + '=' + encodeURIComponent('2012-1141-001291'); /**/
    xhr.open('GET', url + queryParams);
    // xhr.open('GET', req_url);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            alert('Status: ' + this.status + 'nHeaders: ' + JSON.stringify(this.getAllResponseHeaders()) + 'nBody: ' + this.responseText);
            console.log(xhr.responseText)
        }
    };


    xhr.send('');
    return (
        <section>
            <h1>2023년 3월 셋째주 추천물건입니다!</h1>
            <article>
                <table>
                    <thead>
                    <tr>
                        <th>물건번호</th>
                        <th>시도</th>
                        <th>시군구</th>
                        <th>읍면동</th>
                        <th>물건명</th>
                    </tr>
                    </thead>
                    <tbody>
                    {testData.map(d => {
                        return (<tr>
                            <td>{d.cltrNo}</td>
                            <td>{d.sido}</td>
                            <td>{d.sgk}</td>
                            <td>{d.emd}</td>
                            <td>{d.cltrNm}</td>
                        </tr>)
                    })}
                    </tbody>
                </table>
            </article>
        </section>
    );
}

export default MailLayout;