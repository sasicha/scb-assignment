import React, { Component } from 'react';
import '../styles/Email.css';

class App extends Component {
  getColor(){
    let colors=["#FF1397","#7E3778","#11A313","#5F3BBA","#2B5697"];
    let characterCode = this.props.info.from.name.substring(0,1).charCodeAt(0);
    return colors[(characterCode % 5)];
  }
  getLetter(){
    let name=this.props.info.from.name.split(" ");
    if(name.length==2) return (name[0][0]+name[1][0]).toUpperCase();
    else return name[0][0].toUpperCase(); 
  }
  getTime(){
    let time=new Date();
    return time.getHours()+":"+time.getMinutes();  
  }

  render() {
    let colorCode=this.getColor();
    let name=this.getLetter();
    let time=this.getTime();
   
    return (
      <div className="Email">
          <div className="email-pic" style={{backgroundColor:colorCode}}>{name}</div>
          <div className="email-info">
            <div className="email-name">{this.props.info.from.name}</div>
            <div className="email-subject-and-time">
              <div className="email-title">{this.props.info.subject}</div><div className="email-time">{time}</div>
            </div>
            <div><div className="email-body" >{this.props.info.body}</div></div>
          </div>
      </div>
    );
  }
}

export default App;
