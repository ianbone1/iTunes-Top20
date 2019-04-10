import React from 'react'
import Sound from 'react-sound'

const PlaySound = ({selectedSong, play}) =>{

  if (!selectedSong) return false
  if (!play) return false

  console.log("Let's play")
  console.log(selectedSong)
  console.log(selectedSong.link[1].attributes.href)

  return(
    <Sound
      url={selectedSong.link[1].attributes.href}
      playStatus={Sound.status.PLAYING}
      playFromPosition={0}

      />
  )

}

export default PlaySound
