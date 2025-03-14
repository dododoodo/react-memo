import React from 'react'

function MemoList({data}) {
    
  return (
    
        <div className="list">
            {
                data.map((item, i) => (
                    <div key={i}>
                        <b>{item.subject} ({item.date})</b>
                        <p>{item.content}</p>
                    </div>
                ))
            }
        </div>
  )
}

export default MemoList