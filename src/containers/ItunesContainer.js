import React, {Component} from 'react'
import ChartContainer from './ChartContainer.js'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import PlaySound from '../components/PlaySound.js'
import SongDetail from '../components/SongDetail.js'

import './ItunesContainer.css'

class ItunesContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      top20:null,
      selectedSong: null,
      play: false,
    }
    this.handleSelectSong = this.handleSelectSong.bind(this)
    this.handlePressPlay = this.handlePressPlay.bind(this)
  }

  handleSelectSong(position){
    this.setState({selectedSong: this.state.top20[(position-1)]})
    this.setState({play: false})
  }

  handlePressPlay(url){
    this.setState({play: !this.state.play})
    // console.log(this.state.play)
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({top20: data.feed.entry}))
  }

  render(){
    if (!this.state.top20) return null
    // console.log(this.state.top20)
    // console.log(this.state.selectedSong)
    return (
      <div className="itunes-container">
      <Header />
      <div className="main-page">
        <ChartContainer top20={this.state.top20} handleSelectSong={this.handleSelectSong}/>
        <SongDetail selectedSong={this.state.selectedSong} handlePressPlay={this.handlePressPlay}/>
        <PlaySound selectedSong={this.state.selectedSong} play={this.state.play}/>
      </div>
      <Footer />
      </div>
    )
  }
}

export default ItunesContainer;
