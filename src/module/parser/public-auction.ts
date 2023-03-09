const serviceKey = 'ZwxVklLsL6zgVOKa4gEuD9BHrrEh8uwsxG2WMCerSG440FruBQhdMwzyjinpsNc5W0CtPlWOKbtBHrEx3oKU%2BA%3D%3D'
const url = 'http://openapi.onbid.co.kr/openapi/services/KamcoPblsalThingInquireSvc/getKamcoPbctCltrList'
const req_url = url + '?serviceKey=' + serviceKey + '&numOfRows=10&pageNo=1&DPSL_MTD_CD=0001'

type TKamco = {}

export function getKamcoList() {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', req_url);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            alert('Status: ' + this.status + 'nHeaders: ' + JSON.stringify(this.getAllResponseHeaders()) + 'nBody: ' + this.responseText);
        }
    };

    xhr.send('');
}


export default serviceKey