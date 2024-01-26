
export const CODES = [
  { cityCode: 11, districtCode : 11170, districtId: "d0" },
  { cityCode: 11, districtCode : 11560, districtId: "d1" },
  { cityCode: 11, districtCode : 11680, districtId: "d2" },
  { cityCode: 28, districtCode : 28237, districtId: "d3" },
  { cityCode: 28, districtCode : 28170, districtId: "d4" },
  { cityCode: 28, districtCode : 28245, districtId: "d5" },
]

const API_KEY = "z1xu2sp6YWQMeoZTjQTQVm3%2B4vPkCEusayZGZcxh%2FvxKkldWDQjDdaq%2FlpEIf3tXqLFrVcLemQ61Papzaz7I2Q%3D%3D";

export async function getPublicData(disId, card) {


  let url = "https://apis.data.go.kr/B550928/dissForecastInfoSvc/getDissForecastInfo";
  // let url = "https://apis.data.go.kr/B550928/dissForecastInfoSvc/getDissForecastInfo?serviceKey=z1xu2sp6YWQMeoZTjQTQVm3%2B4vPkCEusayZGZcxh%2FvxKkldWDQjDdaq%2FlpEIf3tXqLFrVcLemQ61Papzaz7I2Q%3D%3D&numOfRows=10&pageNo=1&type=json&dissCd=1&znCd=11"

  // query
  url += "?serviceKey=" + API_KEY;
  url += "&numOfRows=25";
  url += "&pageNo=1";
  url += "&type=json";
  url += "&dissCd=" + card;
  url += "&znCd=" + disId;

  console.log(url)
  const res = await fetch(url, {});

  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }

  
  
  return res.json();
}


