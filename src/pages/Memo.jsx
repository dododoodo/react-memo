import React, { useState } from 'react'
import MemoList from '../component/MemoList';
import MemoInsert from '../component/MemoInsert';

function Memo() {

    const [data,setData] = useState([]);

  return (
    <div>
        <MemoInsert data={data} setData={setData}/>
        <MemoList data={data}/>
    </div>
  )
}

export default Memo