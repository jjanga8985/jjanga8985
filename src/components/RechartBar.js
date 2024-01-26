import React, { useState } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

let today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
let year = today.getFullYear();  //현재 년도
let month = today.getMonth() + 1
month = month < 10 ? '0' + month : month; // 현재 월
let date = today.getDate();
date = date <10 ? '0' + date : date // 현재 날짜

let finalDate = `${year}` + month + date;

export default function RechartBar ({ accidents }) {
  if(finalDate.length === 7 ){
    return finalDate = `${year}` + `${month}` + `${date}`;
  }
   
    const data1 = accidents.filter(accident => {
      if(finalDate == accident.dt){
        if (accident.lowrnkZnCd === '11170') {
            return accident.name = "용산구";
        } else if (accident.lowrnkZnCd === '11560') {
            return accident.name = "영등포구";
        } else if (accident.lowrnkZnCd === '11680') {
            return accident.name = "강남구"
        } else if (accident.lowrnkZnCd === '28170') {
          return accident.name = "미추홀구"
        } else if (accident.lowrnkZnCd === '28237') {
          return accident.name = "부평구"
        } else if (accident.lowrnkZnCd === '28245') {
          return accident.name = "계양구"
        } else return
      }
    })
      const data = data1.map(accident => {
        return {
        구 : accident.name,
        질병예측건수 : accident.cnt,
      }
    })
    
    console.log(data)
  
    
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="구" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="질병예측건수" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
      </ResponsiveContainer>
    );
  };
