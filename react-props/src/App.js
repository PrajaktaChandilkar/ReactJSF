import React from "react";
import "./App.css";

// import HelloClass from "./components/HelloClass";
import HelloClassProps from "./components/HelloClassProps";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HelloClassProps greetTo="World" />
        <HelloClassProps greetTo="Africa" />
      </div>
    );
  }
}
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
