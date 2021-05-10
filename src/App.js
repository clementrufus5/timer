import './App.css';
import Inputform from './inputform';
import React from 'react';
import './inputform.css';

class App extends React.Component {

  d;

  constructor(){
    super();
    this.state = {
      i:'',
      u:'',
      days:'00',
      hours:'00',
      mins:'00',
      secs:'00'
    }
  }

  onSearchChange = (event) => {
    this.setState({i:event.target.value})
  }
  onSubmit = () => {
    this.d = this.state.i;
    this.setState({u:this.d})
    setInterval(this.calculateTimer, 1000);
  }

  calculateTimer = () => {
    let given = Date.parse(this.d);
    let current = Date.parse(new Date());
    let distance = given - current;
    if(distance<0){
      clearInterval(setInterval(this.calculateTimer, 1000));
      this.setState({days:'00'});
      this.setState({hours:'00'});
      this.setState({mins:'00'});
      this.setState({secs:'00'});
    }else{
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      this.setState({days:days});
      this.setState({hours:hours});
      this.setState({mins:minutes});
      this.setState({secs:seconds});
    }
    
  }

 

  render(){
    return (
      <div>
          <Inputform searchChange={this.onSearchChange} Inputbox={this.onSubmit} d={this.state.u} days={this.state.days} hours={this.state.hours} mins={this.state.mins} secs={this.state.secs}/>
      </div>
      
    );
  }
  
}

export default App;