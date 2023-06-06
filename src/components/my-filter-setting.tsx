import React, { useEffect } from "react";
import { TFilter, TJuso, TLand } from "../type/types";
import axios from "axios";

type PMyFilterSettingProps = {
  filterList: TFilter[];
};

const encCodeKey =
  "ZwxVklLsL6zgVOKa4gEuD9BHrrEh8uwsxG2WMCerSG440FruBQhdMwzyjinpsNc5W0CtPlWOKbtBHrEx3oKU%2BA%3D%3D";

function MyFilterSetting(): JSX.Element {
  const [accToken, setAccToken] = React.useState("");
  var errCnt = 0;
  const [sido, setSido] = React.useState<TJuso[]>();
  const [sgk, setSgk] = React.useState<TJuso[]>();
  const [emd, setEmd] = React.useState<TJuso[]>();
  const [selectedJuso, setSelectedJuso] = React.useState({
    sido: "",
    sgk: "",
    emd: "",
    detail: "",
  });

  const [landTypeList, setLandTypeList] = React.useState<TLand[]>();
  const [scndLandTypeList, setScndLandTypeList] = React.useState<TLand[]>();

  const [filterList, setFilterList] = React.useState<TFilter[]>();

  useEffect(() => {
    getAccessToken();
    getMiddleLandCd();
  }, []);

  const getAccessToken = async () => {
    await axios
      .get("https://sgisapi.kostat.go.kr/OpenAPI3/auth/authentication.json", {
        params: {
          consumer_key: "2ebdf6cf7ddd4eafa284",
          consumer_secret: "ee54d708b71e4eac905c",
        },
      })
      .then((res) => {
        const accessToken = res.data.result.accessToken;
        setAccToken(accessToken);
        getJuso(accessToken, setSido);
      })
      .catch((e) => console.log(e));
  };

  const getJuso = async (
    _token: string,
    setResult: (result: any[]) => void,
    _cd?: string
  ) => {
    await axios
      .get("https://sgisapi.kostat.go.kr/OpenAPI3/addr/stage.json", {
        params: {
          accessToken: _token,
          cd: _cd,
        },
      })
      .then((res) => {
        const { data } = res;
        // console.log(data);
        switch (parseInt(data.errCd)) {
          case 0:
            setResult(data.result);
            break;
          case -401:
            errCnt++;
            if (errCnt < 200) {
              getAccessToken();
            }
            break;
          case -100:
            break;
        }
      })
      .catch((error) => console.log(error));
  };

  const parseXML = (xmlData: string, type: string) => {
    const landTypeList = new Array<{
      ctgrId: string;
      ctgrNm: string;
    }>();
    const parser = new DOMParser();
    const parsedXml = parser.parseFromString(xmlData, "text/xml");
    const items = parsedXml.getElementsByTagName("item");

    for (let i = 0; i < items.length; i++) {
      const ctgrId = items[i].children[1].innerHTML;
      const ctgrNm = items[i].children[2].innerHTML;

      landTypeList.push({
        ctgrId: ctgrId,
        ctgrNm: ctgrNm,
      });
    }
    if (type === "MID") setLandTypeList(landTypeList);
    else if (type === "BOTTOM") setScndLandTypeList(landTypeList);
  };

  const getMiddleLandCd = async () => {
    const code_url =
      "http://openapi.onbid.co.kr/openapi/services/OnbidCodeInfoInquireSvc/getOnbidMiddleCodeInfo";

    const heroku_proxy = "https://jazzo-land.herokuapp.com/";
    const full_url = `${code_url}?serviceKey=${encCodeKey}&numOfRows=10&pageNo=1&CTGR_ID=10000`;
    const res = await fetch(heroku_proxy + full_url).then((res) => {
      return res.text();
    });
    parseXML(res, "MID");
  };

  const onSidoChangeHandler = (e: any) => {
    getJuso(accToken, setSgk, e.target.value);
    setSelectedJuso((prev) => {
      return { ...prev, sido: e.target.value };
    });
  };

  const onSgkChangeHandler = (e: any) => {
    getJuso(accToken, setEmd, e.target.value);
    setSelectedJuso((prev) => {
      return { ...prev, sgk: e.target.value };
    });
  };

  const onEmdChangeHandler = (e: any) => {
    setSelectedJuso((prev) => {
      return { ...prev, emd: e.target.value };
    });
  };
  // todo 필터 저장소.. localStorage?

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    // todo 일단 필터를 세팅하면 그 필터에 맞는 물건을 걸러오는 기능을 만들어보자

    console.log(selectedJuso);
  };

  const onChangeMiddleLandCdHandler = (e: any) => {
    const ctgrId = e.target.value;
    getBottomLandCd(ctgrId);
  };

  const onChangeBottomLandCdHandler = (e: any) => {
    const ctgrId = e.target.value;
  };

  const getBottomLandCd = async (ctgrId: string) => {
    const code_url =
      "http://openapi.onbid.co.kr/openapi/services/OnbidCodeInfoInquireSvc/getOnbidBottomCodeInfo";
    const heroku_proxy = "https://jazzo-land.herokuapp.com/";
    const full_url = `${code_url}?serviceKey=${encCodeKey}&numOfRows=10&pageNo=1&CTGR_ID=${ctgrId}`;
    const res = await fetch(heroku_proxy + full_url).then((res) => {
      return res.text();
    });
    parseXML(res, "BOTTOM");
  };

  const onShowResultList = (e: any) => {
    e.preventDefault();

    console.log("리스트 조회!!!");
  };

  const getKamcoList = () => {
    //todo api 어떤거 쓸지 선택
    const url = `http://openapi.onbid.co.kr/openapi/services/KamcoPblsalThingInquireSvc/getKamcoPbctCltrList`;
    const url_2 = `http://openapi.onbid.co.kr/openapi/services/UtlinsttPblsalThingInquireSvc/getPublicSaleObject`;
  };

  return (
    <>
      <section className="filter-select-form-wrapper">
        <form id="filter-form" onSubmit={onSubmitHandler}>
          <h2>내 필터 설정</h2>
          <label className="basic-input-label">
            지역
            <select className="basic-input" onChange={onSidoChangeHandler}>
              <option>시/도</option>
              {sido?.map((d, idx) => {
                return (
                  <option key={idx} value={d.cd}>
                    {d.addr_name}
                  </option>
                );
              })}
            </select>
            <select className="basic-input" onChange={onSgkChangeHandler}>
              <option>구/군</option>
              {sgk?.map((d, idx) => {
                return (
                  <option key={idx} value={d.cd}>
                    {d.addr_name}
                  </option>
                );
              })}{" "}
            </select>
            <select className="basic-input" onChange={onEmdChangeHandler}>
              <option>읍/면/동</option>
              {emd?.map((d, idx) => {
                return (
                  <option key={idx} value={d.cd}>
                    {d.addr_name}
                  </option>
                );
              })}{" "}
            </select>
            <input
              type="text"
              className="basic-input"
              placeholder="나머지주소 직접입력"
            />{" "}
          </label>
          <div>
            <label className="basic-input-label">
              종류
              <select
                className="basic-input"
                id="ctgrHirkId"
                onChange={onChangeMiddleLandCdHandler}
              >
                <option>전체</option>
                {landTypeList?.map((landCd, idx) => {
                  return (
                    <option key={idx} value={landCd.ctgrId}>
                      {landCd.ctgrNm}
                    </option>
                  );
                })}
              </select>
            </label>

            <label className="basic-input-label">
              세부종류
              <select
                className="basic-input"
                id="ctgrHirkIdBottom"
                onChange={onChangeBottomLandCdHandler}
              >
                <option>전체</option>
                {scndLandTypeList?.map((landCd, idx) => {
                  return (
                    <option key={idx} id={landCd.ctgrId}>
                      {landCd.ctgrNm}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
          <input
            type={"submit"}
            value="필터 추가"
            className="basic-submit-button"
          />
        </form>
      </section>
      <div id="resultBox">여기에 결과값이 나오는 거야 </div>
    </>
  );
}

export default MyFilterSetting;
