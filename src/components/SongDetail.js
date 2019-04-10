import React from 'react'

import './SongDetail.css'

const SongDetail = ({selectedSong, handlePressPlay}) =>{

  if(!selectedSong) return (
    <div className="song-details">
      <div className="artwork">

      </div>
      <h1>Select Song</h1>
    </div>
  )

  return (
    <div className="song-details">
      <div className="artwork">
        <img src={selectedSong['im:image'][2].label} alt="Artwork"/>
      </div>
      <div className="info">
        <div className="song-title">
          {selectedSong['im:name'].label}
        </div>
        <div className="artist">
          {selectedSong['im:artist'].label}
        </div>
        <div className="genre">
          Genre: {selectedSong.category.attributes.label}
        </div>
        <div className="release-date">
          Released: {selectedSong['im:releaseDate'].attributes.label}
        </div>
        <div className="rights">
          {selectedSong.rights.label}
        </div>
        <div className="play">
        <button className="button button2" onClick={()=>handlePressPlay() }>Sample</button>
        </div>
      </div>
    </div>
  )
}

export default SongDetail
