import React,{ Component } from 'react';
import './App.css';
import Reviews from './Component/Review';


class App extends Component{
  constructor(props){
    super(props)

  }
  render(){
    return(
      <main>
         <section className='container'>
           <div className='title'>
             <h1>Our Reviews</h1>  
           </div>
          <Reviews />
         </section>
      </main>
    )
  }
}
export default App;
