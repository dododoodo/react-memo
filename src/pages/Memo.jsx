import React, { useEffect, useState } from 'react'
import MemoList from '../component/MemoList';
import MemoInsert from '../component/MemoInsert';
import axios from 'axios'

function Memo() {

    const [data,setData] = useState([]);

    // useEffect로 기존 데이터 불러오기
    useEffect(() => {
      axios.get(`${process.env.REACT_APP_APIURL}/test/memo`,
      {headers:{"Content-Type":"application/json"}})
      .then(res => {
          setData(res.data);
      })
  }, []);

  return (
    <div>
        <MemoInsert data={data} setData={setData}/>
        <MemoList data={data}/>
    </div>
  )
}

export default Memo