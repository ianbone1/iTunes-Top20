import React from 'react'
import './ChartItem.css'
const ChartItem = ({position, title, artist})=>{


  return(
    <div className="chart-item">
      <li>{position} : {title} - {artist} </li>
    </div>
  )

}

export default ChartItem;
