import React from 'react'
import './ChartItem.css'
const ChartItem = ({position, title, artist, handleSelectSong})=>{

  return(
    <div className="chart-item">
      <div className="song-position-title">
          <button className="button" onClick={()=>handleSelectSong(position)}>{position} : {title} - {artist}</button>
      </div>

    </div>
  )

}

export default ChartItem;
