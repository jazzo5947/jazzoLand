import React from 'react';
import {TFilterType, TSGGType} from "../../type/types";

type PMyFilterSettingProps = {
    filterList: TFilterType[]
}

function MyFilterSetting() {
    const [sgg, setSGG] = React.useState<TSGGType[]>([]);

    const getSGG = async () => {
        const apiUrl = 'https://sgisapi.kostat.go.kr/OpenAPI3/addr/stage.json'
        await fetch(apiUrl, {
            method: 'GET',
            body: JSON.stringify({
                accessToken: 'd3c6ffe7-65e9-4d75-95b5-a7bc06e7f057',
                pg_yn: '0'
            })
        }).then((res: Response) => (res.json())).then((res => console.log(res)))
            .catch(error => console.log(error))
    }
    getSGG()


    return (
        <section className="filter-select-form-wrapper">
            <form id="filter-form">
                <div>
                    <h2>내 필터 설정</h2>
                    <label className="basic-input-label">지역</label>
                    <select className="basic-input">
                      

                    </select>

                    <select className="basic-input">
                        <option>구/군</option>

                    </select>

                    <select className="basic-input">
                        <option>읍/면/동</option>

                    </select>

                    <input
                        className="basic-input"
                        type="text"
                        placeholder="나머지주소 직접입력"
                    />
                </div>
                <div>
                    <label className="basic-input-label">종류</label>
                    <select className="basic-input" id='ctgrHirkId'>
                        <option>전체</option>
                        <option>주거용</option>
                        <option>업무용</option>
                        <option>토지</option>
                        <option>기타</option>
                    </select>
                </div>
                <div>
                    <label className="basic-input-label">세부종류</label>
                    <select className="basic-input" id='ctgrHirkIdMid'>
                        <option>전체</option>

                    </select>
                </div>
                <div>
                    <label className="basic-input-label">대지면적</label>
                    <input className="basic-input" type="number"/>
                    <span>m2</span>

                    <label className="basic-input-label">건물면적</label>
                    <input className="basic-input" type="number"/>
                    <span>m2</span>
                </div>
                <div>
                    <label className="basic-input-label">감정가</label>
                    <input className="basic-input" type="text"/>

                    <label className="basic-input-label">최저가</label>
                    <input className="basic-input" type="text"/>
                </div>

            </form>
            <input type={'submit'} className="basic-submit-button">필터 추가</input>
        </section>
    );
}

export default MyFilterSetting;

