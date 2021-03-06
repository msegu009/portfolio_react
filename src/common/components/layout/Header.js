import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
    <div className="masthead">
			<div className="container">
			  <h3 className="masthead-title">
			    <a href="/" title="Home">Michael Segura</a>
			    <small>Full Stack Web Developer based in Miami</small>
			  </h3>
			</div>
		</div>
    );
  }
}

export default Header;