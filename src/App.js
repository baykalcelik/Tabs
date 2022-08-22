import { useState, useEffect } from 'react';
import './App.css';
import TabButton from './TabButton';
import Yukleniyor from './Yukleniyor';
import Duty from './Duty';


function App() {

  const [yukleniyor, setYukleniyor] = useState(true);

  const [fullData, setFullData] = useState([]);

  const [activeRecord, setActiveRecord] = useState({});

  


  useEffect(()=>{

    fetch('./data.json').then(res=>res).then(data=>data.json()).then(veri=>{
      console.log(veri);
      setFullData(veri);
      setYukleniyor(false);
      setActiveRecord(veri[0]);
    });

  },[]);

    if(yukleniyor) return <Yukleniyor/>

  return (

    <div className="App">

      <div className='topPart'>
          <p className='header'>Experience</p>
          <div className='bottomLine'></div>
      </div>

      <div className='bottomPart'>
            <div className='panel'>
              {fullData.map((item, index)=>{
                return <TabButton key={index} cname={item.company} id={item.id} setActiveRecord={setActiveRecord} fullData={fullData}/>
              })}
                
            </div>

            <div className='content'>
              <p className='title'>{activeRecord && activeRecord.title}</p>
              <p className='company'>{activeRecord && activeRecord.company}</p>
              <p className='dates'>{activeRecord && activeRecord.dates}</p>
              {activeRecord && activeRecord.duties.map((item, dindex)=> <Duty key={dindex} item={item} />)}
            <button className='moreinfo' >More Info </button>

            </div>

        </div>
    </div>
  );
}

export default App;
