import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div class="container">
          <a class="navbar-brand" href="landing.html">DevConnector</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span class="navbar-toggler-icon"></span>
          </button>
    
          <div class="collapse navbar-collapse" id="mobile-nav">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="profiles.html"> Developers
                </a>
              </li>
            </ul>
    
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="register.html">Sign Up</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="login.html">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
      <!-- Landing -->
      <div class="landing">
        <div class="dark-overlay landing-inner text-light">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h1 class="display-3 mb-4">Developer Connector
                </h1>
                <p class="lead"> Create a developer profile/portfolio, share posts and get help from other developers</p>
                <hr />
                <a href="register.html" class="btn btn-lg btn-info mr-2">Sign Up</a>
                <a href="login.html" class="btn btn-lg btn-light">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    )
  }
}
