class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: "Getting clock data ... " /*(new Date()).toLocaleString()*/ };
    this.launchClock();
  }

  launchClock() {
    setInterval(() => {
      console.log("Update clock ...");
      this.setState({ currentTime: new Date().toLocaleString() });
    }, 1000);
  }

  render() {
    console.log("Rendering clock ...");
    return React.createElement(
      "div",
      null,
      React.createElement(AnalogDisplay, { time: this.state.currentTime }),
      React.createElement(DigitalDisplay, { time: this.state.currentTime })
    );
  }
}