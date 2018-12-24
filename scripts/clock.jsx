class Clock extends React.Component
{
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {currentTime: "Getting clock data ... "/*(new Date()).toLocaleString()*/};
  }


  launchClock() {
    setInterval(()=>{
      console.log("Update clock ...");
      this.setState({currentTime: (new Date()).toLocaleString()});
    }, 1000);
  }

  render() {
    console.log("Rendering clock ...");
    return (<div>{this.state.currentTime}</div>);
  }
}

ReactDOM.render (<Clock />, document.getElementById('content'));
