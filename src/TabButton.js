import './tabbutton.css';


export default function TabButton(props){

    return <button className="tbBtn" onClick={()=>{
        let sira = -1;
        props.fullData.forEach((element,index) => {
            if(props.id === element.id) sira = index;
        });

        props.setActiveRecord(props.fullData[sira]);
    }}>{props.cname}</button>
}