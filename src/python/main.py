from fastapi import FastAPI
import requests
import xmltodict
import pprint
import json
from bs4 import BeautifulSoup
from urllib.request import urlopen

app = FastAPI()

serviceKey = 'ZwxVklLsL6zgVOKa4gEuD9BHrrEh8uwsxG2WMCerSG440FruBQhdMwzyjinpsNc5W0CtPlWOKbtBHrEx3oKU%2BA%3D%3D'

url = 'http://openapi.onbid.co.kr/openapi/services/KamcoPblsalThingInquireSvc/getKamcoPbctCltrList'

req_url = url + '?serviceKey='+serviceKey + \
    '&numOfRows=10&pageNo=1&DPSL_MTD_CD=0001'

result = urlopen(req_url).read()

# print(result.read())

soup = BeautifulSoup(result, 'lxml-xml')
# print('SOUP: ', soup)

items = soup.find_all('item')

print('ITEMS: ', items)

datas = []

for i in range(len(items)):
    cltr_mnmt_no = items[i].CLTR_MNMT_NO.string.strip()
    ldnm_adrs = items[i].LDNM_ADRS.string.strip()
    nmrd_adrs = items[i].NMRD_ADRS.string.strip()
    min_bid_prc = items[i].MIN_BID_PRC.string.strip()
    fee_rate = items[i].FEE_RATE.string.strip()
    data = [cltr_mnmt_no, ldnm_adrs, nmrd_adrs, min_bid_prc, fee_rate]
    datas.append(data)

print(datas, len(items))

# pp = pprint.PrettyPrinter(indent=4)
# print(pp.pprint(result.read()))


@app.get('/')
async def root():
    return {'message': 'Hello Worked!'}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}


@app.get("/onbid")
async def getList():
    result = urlopen(req_url).read()
    soup = BeautifulSoup(result, 'lxml-xml')
    items = soup.find_all('item')
    datas = []

    for i in range(len(items)):
        cltr_mnmt_no = items[i].CLTR_MNMT_NO.string.strip()
        ldnm_adrs = items[i].LDNM_ADRS.string.strip()
        nmrd_adrs = items[i].NMRD_ADRS.string.strip()
        min_bid_prc = items[i].MIN_BID_PRC.string.strip()
        fee_rate = items[i].FEE_RATE.string.strip()
        data = [cltr_mnmt_no, ldnm_adrs, nmrd_adrs, min_bid_prc, fee_rate]
        datas.append(data)

    # print(datas, len(items))

    return {'message': datas}


@app.get("/getAdrress")
async def getAdr():
    result = urlopen(
        'https://sgisapi.kostat.go.kr/OpenAPI3/addr/stage.json').read()
    print(result)
