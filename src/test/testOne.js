import React from 'react';
import './testOne.css';

// function Helloword(props) {
//   return(
//     <h2>{props.titles}</h2>
//   )
// }
class Helloword extends React.Component{
  
  state = {
    show:true
  }
  toggle = () => {
    this.setState({ show:!this.state.show })
  }
  render(){
    if (this.state.show) {
      return(
        <div className='card'>
          <h2>{this.props.titles}</h2>
          <p>{this.props.paragraph}</p>
          <button onClick={this.toggle}>Hide</button>
        </div>
      );
    } else {
      return(
        <div className='default'>
          <h2>this not Component </h2>
          <button onClick={this.toggle}>Show</button>
        </div>
      );
    }
   
  }
}
function App() {
  return (
    <div className="App">
      <h1>This is my first component</h1>
      <Helloword titles="I am title one" paragraph='ksajdhgpiuasehpgihpwieyghpb fwhebvfp  qbfpiqb'/>
      <Helloword titles="I am title two" paragraph='{pasihdgóihas} fwhebvfp  qbfpiqb'/>
      <Helloword titles="I am title three" paragraph='lskdmfjs fwhebvfp  qbfpiqb'/>
    </div>
  );
}

export default App;
