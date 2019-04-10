import React from 'react'
import './ChartItem.css'
const ChartItem = ({position, title, artist, handleSelectSong})=>{

  return(
    <div className="chart-item">
      <div className="song-position-title">
        <div className="song-position">
          {position}
        </div>
        <div className="song-title">
          <button onClick={()=>handleSelectSong(position)}>{title}</button>
        </div>
       </div>
       <div className="song-artist">
        {artist}
      </div>
    </div>
  )

}

export default ChartItem;
