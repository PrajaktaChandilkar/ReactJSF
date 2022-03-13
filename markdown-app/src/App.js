import React, { Component } from 'react'
// import ReactMarkdown from 'react-markdown'
import ReactMarkdown from 'react-markdown'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      markdown:"",
      loading:true
    }
    this.handleChange = this.handleChange.bind(this)
    this.changeLoadingVar = this.changeLoadingVar.bind(this)
  }

  handleChange(e){
    this.setState({
      markdown: e.target.value
    })
  }

  changeLoadingVar(){
    this.setState({
      loading:false
    })
  }

  render(){
    if(this.state.loading){
      setTimeout(this.changeLoadingVar,3000)
      return(<div><h1>Loading...</h1></div>)
    }
    return (
          <div className="App">
            <textarea onChange={this.handleChange} />
            <ReactMarkdown className='preview' children={this.state.markdown}/>
          </div>
        );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <textarea />
//       <ReactMarkdown className='preview'/>
//     </div>
//   );
// }

export default App;
