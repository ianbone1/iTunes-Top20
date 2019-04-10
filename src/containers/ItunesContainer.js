import React, {Component} from 'react'
import ChartContainer from './ChartContainer.js'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

class ItunesContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      top20:null
    }
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
    return (
      <div className="itunes-container">
      <Header />
      <ChartContainer top20={this.state.top20}/>
      <Footer />
      </div>
    )
  }
}

export default ItunesContainer;
