
class Body extends React.Component{
  alert(){
    alert('Dont click these please, I am still building them and clicking them just reminds me that I am a failure')
  }
  render(){
    return (
      <div>
        <nav>
          <div className=
          "nav-wrapper navbar-fixed">
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a onClick={this.alert}>Dont</a></li>
              <li><a href="badges.html">Click</a></li>
              <li><a href="collapsible.html">These</a></li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col s1"></div>
            <div className="col s10"><h2 className="animate__animated animate__flipInX" >Mike Fest 2021</h2></div>
            <div className="col s1"></div> 
          </div>  
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Body/>,
  document.getElementById('app')
);