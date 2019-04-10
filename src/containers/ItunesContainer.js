import React, {Component} from 'react'
import ChartContainer from './ChartContainer.js'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import SongDetail from '../components/SongDetail.js'

import './ItunesContainer.css'

class ItunesContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      top20:null,
      selectedSong: null
    }
    this.handleSelectSong = this.handleSelectSong.bind(this)
  }

  handleSelectSong(position){
    // this.setState({selectedSong: this.state.top20[position]})
    console.log(position)
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({top20: data.feed.entry}))
  }

  render(){
    if (!this.state.top20) return null
    console.log(this.state.top20)
    console.log(this.state.selectedSong)
    return (
      <div className="itunes-container">
      <Header />
      <div className="main-page">
        <ChartContainer top20={this.state.top20} handleSelectSong={this.handleSelectSong}/>
        <SongDetail />
      </div>
      <Footer />
      </div>
    )
  }
}

export default ItunesContainer;
