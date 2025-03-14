    import React, { useEffect, useState } from 'react'
    import axios from 'axios'

    function MemoInsert({data,setData}) {
        const [state,setState] = useState(false);

        // useEffect로 기존 데이터 불러오기
        useEffect(() => {
            axios.get(`${process.env.REACT_APP_APIURL}/test/memo`)
            .then(res => {
                setData(res.data);
            })
        }, [setData]);

        // 입력한 내용 서버에 전송
        function insert(e){
            e.preventDefault();

            let date = new Date();
            date = date.toISOString().split('T')[0];
            // console.log(
            //     date.getFullYear(),
            //     date.getMonth(),
            //     date.getDate(),
            //     ['일','월','화','수','목','금','토'][date.getDay()],
            //     date.getHours(),
            //     date.getMinutes(),
            //     date.getSeconds(),
            //     '20'.padStart(2,'0'),
            //     '010-3940-8962'.split('-'),
            //     date.toISOString().split('T')
            // );
            // console.log(e.target.subject.value);
            // console.log(e.target.content.value);
            
            const formdata = new FormData(e.target);
            // **FormData : 입력한 내용을 가져올 때 쓰는 생성자 함수
            formdata.append('id',Date.now());
            formdata.append('date',date);
            
            const entries = Object.fromEntries(formdata)
            // **오브젝트 객체로 만들어줌->저장시키려고

            // axios post를 이용하여 서버에 전송시키기
            axios.post(`${process.env.REACT_APP_APIURL}/test/memo`, entries)
            .then(res=>{
                // **중요
                setData([...data, entries]);
            })

            e.target.reset();
            e.target.subject.focus();
            setState(false)
        }

    return (
        <>
            <button onClick={()=>setState(true)}>글쓰기</button>
            <div className={`insert ${state ? 'active': ''}`}>
                    <form onSubmit={insert}>
                    // FormData에서 insert를 이용해 가져옴
                        <input type="text" name='subject' />
                        <textarea name='content'></textarea> 
                        <input type="submit" value='저장' />
                    </form>
            </div>
        </>
        )
    }

    export default MemoInsert