import React, { Component } from "react";
import "./App.css";

// import HelloClass from "./components/HelloClass";
// import HelloClassProps from "./components/HelloClassProps";
  // import CounterClass from "./components/CounterClass"

  // import CollegeStudents  from "./components/CollegeStudents"
  import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapBasics from "./components/image/BootstrapBasics";
    class App extends Component {
      render(){
        return(
          <div className="App">
            <BootstrapBasics />
          </div>
         
        )
      }
    }

    // <div className="App">
    //        <CollegeStudents />
    //      </div>
  //counter class
// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <CounterClass />
//         {/* <HelloClassProps greetTo="Africa" /> */}
//       </div>
//     );
//   }
// }



// function App() {
//   return (
//     <div className="App">
//       <HelloClass  greetTo='World'/>
//       <HelloClass greetTo ='Africa'/>
//       {/* <Hello1  greetTo ='India' greetAlsoTo ='Frans'/> */}
//       {/* <Hello1 /> */}
//     </div>
//   );
// }

export default App;
