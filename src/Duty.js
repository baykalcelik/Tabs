import {BiChevronsRight} from 'react-icons/bi';
import './duty.css';

export default function Duty(props){


    return(
        <div className="dutyCover">  
            <div className="dutychevron">
                <BiChevronsRight/>
                
            </div>
            <div className='dutyText'>{props.item}</div>
        </div>
    )
}