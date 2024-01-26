import { DISTRICTS } from "./constants/districts";
import { DISCODES } from "./constants/cards";
import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";

export default function App() {
  // 지역별 id
  const [disId, setDisId] = useState("11");
  // 질병 코드
  const [card, setCard] = useState(1);

  useEffect(() => {
    document.title = "질병 예측 실시간 조회";
  }, [])

  const districtList = DISTRICTS.map(disId => (
    <option key={disId.cityNum} value={disId.cityNum}>
      {disId.city}
    </option>
  ))

  const cardList = DISCODES.map(card => (
    <option key={card.codeNum} value={card.codeNum}>
      {card.codeName}
    </option>
  ))

  return (
    <>
      <header className="sticky top-0 z-[9999] shadow-lg">
        <div className="h-[80px] flex justify-between px-8" style={{ background: 'linear-gradient(to right, #0033FF, #28A0FF)' }}>
          <div className="flex items-center">
            <div className="flex items-center">

              {/* 로고 */}
              <svg 
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg" 
                height="16" 
                width="16" 
                viewBox="0 0 512 512">
                <path
                  fill="#fafa0a"
                  d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM256 112c8.8 0 16 7.2 16 16c0 33 39.9 49.5 63.2 26.2c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6C334.5 200.1 351 240 384 240c8.8 0 16 7.2 16 16s-7.2 16-16 16c-33 0-49.5 39.9-26.2 63.2c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0C311.9 334.5 272 351 272 384c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-33-39.9-49.5-63.2-26.2c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6C177.5 311.9 161 272 128 272c-8.8 0-16-7.2-16-16s7.2-16 16-16c33 0 49.5-39.9 26.2-63.2c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0C200.1 177.5 240 161 240 128c0-8.8 7.2-16 16-16zM232 256a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm72 32a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"/>
              </svg>
              <h3 className="ml-4 text-[26px] text-white font-semibold cursor-pointer hover:text-[#fafa0a]">
                질병 예측 실시간 조회
              </h3>
            </div>
          </div>
      
          <div className="flex items-center">
            <select 
              className="p-1 bg-white rounded-lg shadow-lg"
              onChange={({ target }) => setDisId(target.value)}
            >
              {districtList}
            </select>

            <select 
              className="p-1 ml-5 bg-white rounded-lg shadow-lg"
              onChange={({ target }) => setCard(target.value)}
            >
              {cardList}
            </select>
          </div>
        </div>    
      </header>
      
      <main className="pb-4">
        <Dashboard 
          disId={disId}
          card={card}
        />
      </main>
    </>      
  )
};