class HelloWorld extends React.Component {
  render() {
    let DateTimeNow = new Date().toLocaleString();
    return React.createElement(
      'h1',
      this.props,
      'Hello ',
      this.props.frameworkName,
      ' world, now ',
      DateTimeNow,
      ', and now again ',
      new Date(Date.now()).toLocaleString(),
      ' !'
    );
  }
}

ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(HelloWorld, { id: 'reactjs', frameworkName: 'ReactJS', title: 'Talk about ReactJS' }),
  React.createElement(HelloWorld, { id: 'angularjs', frameworkName: 'AngularJS', title: 'Talk about AngularJS' }),
  React.createElement(HelloWorld, { id: 'emberjs', frameworkName: 'EmberJS', title: 'Talk about EmberJS' })
), document.getElementById('content'));
