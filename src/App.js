import React, { useState, useEffect } from "react";
import top from './top.jpg'
import chu from './chu.gif'
import chutext from './chutext.jpg'

function App() {
  const [name, setName] = useState('');
  const [num, setNum] = useState('');
  const [click, setClick] = useState(true);

  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = `2021-${month}-${day}`;
  const time = `2021-${month}-${day} 18:06:01`;

  // 对当前时间处理

  
  const [nowtime, setNowtime] = useState('');
  const nowTimer = () => {
    setInterval(
      () => {
        let hours = new Date().getHours();
        let minute = new Date().getMinutes();
        let second = new Date().getSeconds();
        if(hours < 10){
          hours = '0'+hours;
        }    
        if(second < 10){
          second = '0'+second;
        }      
        if(minute < 10){
          minute = '0'+minute;
        }
        setNowtime(`2021-${month}-${day} ${hours}:${minute}:${second}`);
      }, 1000)

  }

  // 倒计时
  const [timer, setTimer] = useState('');

  const nameChange = (val) => {
    setName(val)
  }
  const numChange = (val) => {

    setNum(val)
  }
  const handlelick = () => {
    if(!name){
      alert('name')
      return
    }
    if(!num){
      alert('num')
      return
    }
    setClick(false)
    jishijian();
    nowTimer();
  }

  function jishijian() {
    let jishi = 300;
    setInterval(() => {
      let second = Math.floor(jishi%60);//秒
      if(second < 10){
        second = '0'+second;
      }      
      let minute = Math.floor(jishi/60);//分
      if(minute < 10){
        minute = '0'+minute;
      }

      setTimer(`00:${minute}:${second}`)
      jishi--;
      if(jishi < 0){
        setTimer(`00:00:00`)
        return
      }
    }, 1000);
  }
  return (
    <div className="App">
    {
      click ? (
        <>
          <input placeholder="输入学号" name='num' value={num} onChange={(e) => numChange(e.target.value)}/>
          <input placeholder="输入姓名" value={name} onChange={e => nameChange(e.target.value)}/>
          <button onClick={handlelick}>确认</button>
          <div>确认后会立马跳转出凭证，5分钟倒计时</div>
          <div  style={{fontSize: "0.3rem", marginTop: "40rem"}}>此页面只做娱乐所用，不做商业用途，作者既不负责，有怪莫怪，buff叠满</div>
        </>
      ) : (
        <>
          <img style={{width: "100%"}} src={top}/>
          {/* <p style={{display: "inline-block", fontWeight: 700,fontSize: "1.1rem", position: "absolute", left: '2.3rem',top: '7.62rem', background: 'white', }}>{name}</p>
          <p style={{display: "inline-block", fontWeight: 700,fontSize: "1.1rem", position: "absolute", left: '6.9rem',top: '7.62rem', background: 'white', }}>{num}</p> */}
          <img style={{width: "100%", marginLeft :' -2px'}} src={chutext}/>
          <div style={{fontSize: '1.1rem', marginTop: "-2rem", lineHeight: '0.5re,'}}>
            <p>
              <p style={{display: "inline-block", fontWeight: 600, marginLeft: "3rem"}}>{name}（{num}）</p>
              同学可于 
              <p style={{display: "inline-block", fontWeight: 600, marginLeft: "0.4rem" }}> {year}</p>
              出校。 </p>
            <p style={{marginLeft: "3rem", marginTop: "-1.3rem"}}>注：必须在
              <p style={{display: "inline-block", fontWeight: 600, marginRight: "0.2rem" }}> {time} </p>
              前返校。
            </p>
            <p style={{color: 'red', display: "inline-block", marginLeft: '3rem', marginTop: "1.3rem", marginBottom: '1rem'}}>该凭证
              <p style={{display: "inline-block", fontWeight: 600 }}>{timer}</p>
              后将失效，请尽快出校</p>
            <img style={{width: "35%", display: "block", margin: "0 auto"}} src={chu}/>
            
            <p style={{color: 'red', display: "inline-block", marginLeft: '5rem', marginTop: "1.3rem", marginBottom: '1rem'}}>{nowtime}</p>
            
            {/* <p style={{display: "inline-block", fontWeight: 700,fontSize: "1.1rem", position: "absolute", left: '2.3rem',top: '10.62rem', background: 'white', }}>{year}</p>
            <p style={{display: "inline-block", fontWeight: 700,fontSize: "1.1rem", position: "absolute", left: '6.9rem',top: '10.62rem', background: 'white', }}>{time}</p> */}
          </div>
        </>
      )
    }
    </div>
  );
}

export default App;
