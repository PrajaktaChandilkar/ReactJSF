import React, { Component } from 'react'
import Tours from './Component/Tours'
import './App.css';
import Loading from './Component/Loading';
const url = "https://course-api.com/react-tours-project"

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      tours:[],
      loading:true
    }
    this.fetchTours = this.fetchTours.bind(this)
    this.removeTour = this.removeTour.bind(this)
  }

  removeTour(id){
    this.setState({tours:this.state.tours.filter((tour)=> tour.id != id)})
  }
  componentDidMount(){
    this.fetchTours()
  }

  async fetchTours(){
    try{
        const response = await fetch(url)
        const toursFetched = await response.json()
        console.log(toursFetched)
        this.setState({tours:toursFetched, loading: false})
        // this.setState({loading:false})
    }catch(err){
      console.log(err)
      this.setState({loading:false})
    }
    
  }
  
  render(){
    if(this.state.loading){
      return(
        <main>
          <Loading />
        </main>
      )
    }

    if(this.state.tours.length == 0){
      return(
        <main>
          <div className="title">
            <h2>No tours left</h2>
            <button className='btn' onClick={this.fetchTours}>refresh</button>
          </div>
        </main>
      )
    }
    return(
      <main>
        <Tours tours={this.state.tours} removeTour = {this.removeTour} />
      </main>
    )
  } 
}

export default App;
