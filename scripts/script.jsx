class HelloWorld extends React.Component
{
  render() {
    let DateTimeNow = new Date().toLocaleString();
    return (
        <h1 {...this.props}>
          Hello {this.props.frameworkName} world, now {DateTimeNow}, and now again {new Date(Date.now()).toLocaleString()} !
        </h1>
    );
  }
}

ReactDOM.render(
  <div>
    <HelloWorld id='reactjs' frameworkName='ReactJS' title='Talk about ReactJS'/>
    <HelloWorld id='angularjs' frameworkName='AngularJS' title='Talk about AngularJS'/>
    <HelloWorld id='emberjs' frameworkName='EmberJS' title='Talk about EmberJS'/>
  </div>,
  document.getElementById('content'));
