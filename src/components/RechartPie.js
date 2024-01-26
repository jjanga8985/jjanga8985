import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Legend, Cell } from 'recharts';

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();

let finalDate = `${year}` + (month < 10 ? '0' : '') + month + (date < 10 ? '0' : '') + date;

export default function RechartPie({ accidents }) {

  if (finalDate.length === 7) {
    finalDate = `${year}${(month < 10 ? '0' : '')}${month}${(date < 10 ? '0' : '')}${date}`;
  }

  const data2 = accidents.filter(accident => {
    return finalDate === accident.dt && (accident.znCd === '11' || accident.znCd === '28');
  });

  const riskdata = data2.map(accident => ({
    local: accident.znCd === '11' ? "서울시" : "인천시",

    diss: accident.dissCd === '1' ? "감기" : 
          accident.dissCd === '2' ? '눈병' : 
          accident.dissCd === '3' ? '식중독' : '천식',

    risk: accident.risk === 1 ? "관심" : 
          accident.risk === 2 ? '주의' : 
          accident.risk === 3 ? '경고' : '위험'

  }));

  console.log(riskdata);
  console.log(data2)

  const RADIAN = Math.PI / 180;
  const data = [
    { name: '관심', value: 25, color: '#11a5b2' },
    { name: '주의', value: 25, color: '#62A71F' },
    { name: '경고', value: 25, color: '#FF9700' },
    { name: '위험', value: 25, color: '#EB4226' },
  ];

  // 좌우위치
  const cx = 200;
  const cy = 230;
  // 굵기
  const iR = 100;
  const oR = 150;
  // 바늘표시
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (data2[0]?.risk === 1) {
      setValue(12.5);
    } else if (data2[0]?.risk === 2) {
      setValue(37.5);
    } else if (data2[0]?.risk === 3) {
      setValue(62.5);
    } else if (data2[0]?.risk === 4) {
      setValue(87.5);
    }
  }, [data2]);




  const needle = (value, data, cx, cy, iR, oR, color) => {
    let total = 0;
    data.forEach((v) => {
      total += v.value;
    });

    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return [
      <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
      <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
    ];
  };

  return (
    <div className='flex'>
      <div className="w-1/2 fxied flex-col h-full">
        <PieChart width={500} height={400} className='mt-0'>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx={200}
            cy={230}
            innerRadius={100}
            outerRadius={150}
            fill="#8884db"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {needle(value, data, cx, cy, iR, oR, '#d0d000')}
          <Legend
            iconSize={30}
            layout="horizontal"
            verticalAlign="middle"
            wrapperStyle={{
              top: '70%',
              left: '-3%',
              lineHeight: '50px',
            }}
          />
        </PieChart>
      </div>
      <div className='flex items-center justify-center'>
        <h3 className="text-[2rem] text-center">
          <span className=' font-semibold text-green-500'>
          {riskdata[1].local}</span> 
          <br/>
        <span className='font-semibold text-sky-500'>
          {riskdata[1].diss}</span>의 
          <br/>       
          위험도는  
        <span className='font-semibold text-rose-600'>
          {riskdata[1].risk}</span> 단계 입니다</h3>
      </div>
    </div>
  );
};