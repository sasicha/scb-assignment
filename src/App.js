import React, { Component } from 'react';
import './App.css';
import Email from './Component/Email.js'
import './styles/header.css'

//import data from './data.json'

class App extends Component {
  state = {
    data:null
  }
  componentWillMount(){
    let data;
    try {
      data= require('./data.json')
      this.setState({data:data});
    } catch (error) {
      console.log(error)
      this.setState({data:"data error"})
    }
  }
  
  render() {
    let emailList;
    if(this.state.data=="data error"){
      emailList=(<div>data error</div>);
    }
    else if(this.state.data.length==0){
      emailList=(<div>no email</div>);
    }
    else{
      emailList=this.state.data.map(email => {
        return(<Email info={email}/>);
      })
    }

    return (
      <div className="App">
          <div className ="header">
            <div className='inbox'>Inbox</div><div className="filter">Filter<div className="arrow-down"></div></div>
          </div>
          {emailList}
      </div>
    );
  }
}

export default App;
