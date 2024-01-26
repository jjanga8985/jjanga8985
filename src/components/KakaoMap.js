import { useEffect, useState } from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk";


export default function KakaoMap ({ accidents }) {

  const [isSeoul, setIsSeoul] = useState(true);

  const locations1 = [
    {title: '용산구', latlng : {lat : 37.532527, lng : 126.980682}, id: "d0"},
    {title: '영등포구', latlng : {lat : 37.525765194, lng : 126.896661369}, id: "d1"},
    {title: '강남구', latlng : {lat : 37.5166714253, lng : 127.041482039}, id: "d2"},    
  ]
  const locations2 = [
    {title: '부평구', latlng : {lat : 37.50784204, lng : 126.7219068}, id: "d0"},
    {title: '미추홀구', latlng : {lat : 37.46369169 , lng : 126.6502972}, id: "d1"},
    {title: '계양구', latlng : {lat : 37.53770728, lng : 126.737744}, id: "d2"},    
  ]

  // 지도 서울,인천 지역 비교하기
  const data = accidents.map(pos => {
    return pos.znCd
  })

  useEffect(() => {
  if(data[0] === '11'){
    setIsSeoul(true);
  } else if(data[0] === '28'){
    setIsSeoul(false);
  }
})


  
  // 서울 지도
  const SEOUL = (
    <div className='relative h-[500px] w-full border rounded-lg'>
      <Map
      // lat : 위도(위 아래), lng : 경도
        center={{ lat: 37.58252751210247, lng: 126.98068251210247 }}
        level={9}
        className='h-full'
      >
      
         {locations1.map((loc, index) => (
            <MapMarker
               key={`${loc.title}`}
               position={loc.latlng}
               image={{
                  src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
                  size: { width: 24, height: 35 },
               }}
               title={loc.title}

          />
         ))}
      </Map>
    </div>
  );
  
  // 인천지도
  const INCHEON = (
    <div className='relative h-[500px] w-full border rounded-lg'>
    <Map
    // lat : 위도(위 아래), lng : 경도
      center={{ lat: 37.50784204, lng: 126.6919068 }}
      level={8}
      className='h-full'
    >
    
    {locations2.map((loc, index) => (
      <MapMarker
        key={`${loc.title}`}
        position={loc.latlng}
        image={{
          src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
          size: { width: 24, height: 35 },
        }}
        title={loc.title}

        />
    ))}
    </Map>
  </div>
  );

  return (
    <>
    {isSeoul ? SEOUL : INCHEON}
    </>
  )
}

