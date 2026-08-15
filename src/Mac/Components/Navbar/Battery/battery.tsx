import React from 'react'
import ReactDOM from 'react-dom/client'

import "./battery.css"


import BatteryImg from '../../../assets/battery_0.png'
import Bolt from '../../../assets/bolt.png'

type BatteryProps = {
    level: number;
    isCharging: boolean;

}

function Battery({level, isCharging}: BatteryProps){
    return (
        <div className='Battery'>
            <label >{level}%</label>
            <div className='BatteryIcon'>
                {isCharging && <img  src={Bolt} alt='bolt' className='battery-bolt'/>}
                <img src={BatteryImg} alt="" className='battery-img'/>
                <div className={'battery-fill ' + (level < 21 ? "battery-dying" : "")} style={{width: level >= 8 ? `${level}%` : "8%"}}>

                </div>
            </div>
            
        </div>
    )
}

export default Battery
