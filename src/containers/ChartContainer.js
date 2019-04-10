import React from 'react'
import ChartItem from '../components/ChartItem.js'
import './ChartContainer.css'
const ChartContainer = ({top20}) => {

  const charts = top20.map((entry, index)=>{
    return <ChartItem key={index+1} position={index+1} artist={entry['im:artist'].label} title={entry['im:name'].label} />
  })

  return(
    <div className="chart-container">
    {charts}
    </div>
  )
}

export default ChartContainer;
